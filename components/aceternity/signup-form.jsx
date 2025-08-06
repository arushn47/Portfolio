"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@components/ui/textarea";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
    IconMailFilled,
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
    IconBrandTwitterFilled,
    IconBrandDiscordFilled,
} from "@tabler/icons-react";

const icons = [
    {
        id: 1,
        name: "Mail",
        image: <IconMailFilled/>,
        link: "mailto:arushn.2005@gmail.com",
    },
    {
        id: 2,
        name: "GitHub",
        image: <IconBrandGithubFilled/>,
        link: "https://github.com/arushn47",
    },
    {
        id: 3,
        name: "LinkedIn",
        image: <IconBrandLinkedinFilled/>,
        link: "https://www.linkedin.com/in/arushn47/",
    },
    {
        id: 4,
        name: "Twitter",
        image:<IconBrandTwitterFilled/>,
        link: "https://x.com/arushn_07",
    },
    {
        id: 5,
        name: "Discord",
        image:<IconBrandDiscordFilled/>,
        link: "https://discord.com/users/685526855767425026",
    },
]

export function SignupFormDemo() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="shadow-input w-full rounded-none ">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Form
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill the form below to get in touch with me. I&apos;ll respond as soon as possible!
      </p>
      <div className="mt-6 flex justify-center gap-4 items-center flex-wrap">
        <AnimatedTooltip items={icons} />
      </div>
      {submitted ? (
        <p className="mt-6 text-green-500 text-center">
          Thank you for contacting me. I&apos;ll get back to you soon!
        </p>
      ) : (
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Arush"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Menon"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="arushn.2005@gmail.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message Box</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              className="h-25"
              value={formData.message}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit →"}
            <BottomGradient />
          </button>
        </form>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-3", className)}>
      {children}
    </div>
  );
};