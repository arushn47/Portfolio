"use client";
import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo({ onCardClick }) {
  const cards = [
    { title: "Apna College - Delta (Full Stack Web Development) ", src: "/certificates/certificate-delta-batch-web-development-656c99c46d04c6b398053bca.jpg" },
    { title: "NPTEL (IIT Madras) - Introduction to Machine Learning", src: "/certificates/NPTEL_Introduction to Machine Learning.jpg" },
    { title: "HackerRank - Python Basic", src: "/certificates/python_basic certificate_hackerrank.jpg" },
    { title: "VITyarthi - Fundamentals of AI and ML", src: "/certificates/Fundamentals of AI and ML.png" },
    { title: "VITyarthi - Python Essentials", src: "/certificates/Python Essentials.png" },
    { title: "VITyarthi - Programming in Java", src: "/certificates/Programming in Java.png" },
  ];

  return <FocusCards cards={cards} onCardClick={onCardClick} />;
}
