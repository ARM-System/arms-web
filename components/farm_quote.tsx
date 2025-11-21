"use client";

import { useState, useEffect } from "react";

const farmQuotes = [
  {
    text: "Farming is a profession of hope.",
    author: "Brian Brett",
  },
  {
    text: "The farmer has to be an optimist or he wouldn’t still be a farmer.",
    author: "Will Rogers",
  },
  {
    text: "Agriculture is our wisest pursuit.",
    author: "Thomas Jefferson",
  },
  {
    text: "Farming looks mighty easy when your plow is a pencil.",
    author: "Dwight D. Eisenhower",
  },
];

export default function QuoteBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % farmQuotes.length);
    }, 5000); // <-- 5 seconds (change to 300000 for 5 mins)

    return () => clearInterval(interval);
  }, []);

  const { text, author } = farmQuotes[index];

  return (
    <div className="hidden lg:block flex-1 relative bg-linear-to-br from-[#1F8A34] to-[#8B5A2B]">
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="text-white space-y-6 max-w-lg text-center transition-all duration-500">
          <h2 className="text-2xl italic">“{text}”</h2>
          <p className="text-lg text-white/90">— {author}</p>
          <p className="mt-4 text-base text-white/80">
            Join thousands of farms worldwide using ARMS to optimize operations,
            increase yields, and make data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
