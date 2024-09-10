"use client";

import React from "react";

interface EmphasizedTextProps {
  text: string;
}

export default function EmphasizedText(
  { text }: EmphasizedTextProps = { text: "Your featured text goes here" },
) {
  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex items-center justify-center p-6"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, hsl(var(--primary)), #ff80b5)",
        }}
      >
        <blockquote className="relative z-10 text-center text-xl font-bold text-white drop-shadow-lg md:text-2xl lg:text-3xl">
          {text}
        </blockquote>
      </div>
    </div>
  );
}
