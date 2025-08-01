"use client";
import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    { title: "Delta Batch Apna College", src: "/certificates/certificate-delta-batch-web-development-656c99c46d04c6b398053bca.jpg" },
    { title: "NPTEL ML", src: "/certificates/NPTEL_Introduction to Machine Learning.jpg" },
    { title: "HackerRank Python Basic", src: "/certificates/python_basic certificate_hackerrank.jpg" },
    { title: "Fundamentals of AI and ML", src: "/certificates/Fundamentals of AI and ML.png" },
    { title: "Python Essentials", src: "/certificates/Python Essentials.png" },
    { title: "Programming in Java", src: "/certificates/Programming in Java.png" },
  ];

  return <FocusCards cards={cards} />;
}
