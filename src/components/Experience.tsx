import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Internship",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Web Developer Intern, Goitdev technologies pvt ltd.
          </p>
          <p  className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-10">June 2024 - Oct 2024</p>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>
            • Enhanced user satisfaction and navigation speed through a streamlined UI redesign.
            </li>
            <li>
            • Increased engagement and client retention with QR code and web tour features.
            </li>
            <li>• Developed 10+ templates, reducing development time and ensuring design consistency</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
