"use client";

import { COLORS } from "@/constants/colors";

// Example component showing different ways to use your color palette
export default function ColorExamplesPage() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-cerulean">
        Color Palette Examples
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Using Tailwind classes */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-breakerBay">
            Using Tailwind Classes
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded bg-cerulean text-white">
              Cerulean Background
            </div>
            <div className="p-4 rounded bg-blizzardBlue text-gray-800">
              Blizzard Blue Background
            </div>
            <div className="p-4 rounded bg-breakerBay text-white">
              Breaker Bay Background
            </div>
            <div className="p-4 rounded bg-hippieBlue text-white">
              Hippie Blue Background
            </div>

            <div className="pt-4 border-t">
              <p className="text-cerulean">Cerulean text color</p>
              <p className="text-blizzardBlue">Blizzard Blue text color</p>
              <p className="text-breakerBay">Breaker Bay text color</p>
              <p className="text-hippieBlue">Hippie Blue text color</p>
            </div>
          </div>
        </div>

        {/* Using CSS Variables */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-hippieBlue">
            Using CSS Variables
          </h2>
          <div className="space-y-4">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "var(--cerulean)", color: "white" }}
            >
              Cerulean using CSS Variable
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "var(--blizzard-blue)", color: "#333" }}
            >
              Blizzard Blue using CSS Variable
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "var(--breaker-bay)", color: "white" }}
            >
              Breaker Bay using CSS Variable
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "var(--hippie-blue)", color: "white" }}
            >
              Hippie Blue using CSS Variable
            </div>
          </div>
        </div>

        {/* Using TypeScript constants */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blizzardBlue">
            Using TypeScript Constants
          </h2>
          <div className="space-y-4">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: COLORS.CERULEAN, color: "white" }}
            >
              Cerulean using TS Constant: {COLORS.CERULEAN}
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: COLORS.BLIZZARD_BLUE, color: "#333" }}
            >
              Blizzard Blue using TS Constant: {COLORS.BLIZZARD_BLUE}
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: COLORS.BREAKER_BAY, color: "white" }}
            >
              Breaker Bay using TS Constant: {COLORS.BREAKER_BAY}
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: COLORS.HIPPIE_BLUE, color: "white" }}
            >
              Hippie Blue using TS Constant: {COLORS.HIPPIE_BLUE}
            </div>
          </div>
        </div>

        {/* Practical Usage Examples */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-cerulean">
            Practical Usage Examples
          </h2>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-cerulean text-white rounded hover:bg-cerulean-600 transition">
              Button with Cerulean
            </button>
            <div className="p-4 border-l-4 border-hippieBlue bg-blizzardBlue/20">
              This is an alert styled with your color palette
            </div>
            <div className="flex space-x-2">
              <div className="w-10 h-10 rounded-full bg-cerulean"></div>
              <div className="w-10 h-10 rounded-full bg-blizzardBlue"></div>
              <div className="w-10 h-10 rounded-full bg-breakerBay"></div>
              <div className="w-10 h-10 rounded-full bg-hippieBlue"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          How to Use Your Color Palette
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tailwind Classes:</strong> Use{" "}
            <code className="bg-gray-100 px-1 rounded">text-cerulean</code>,{" "}
            <code className="bg-gray-100 px-1 rounded">bg-cerulean</code>, etc.
          </li>
          <li>
            <strong>CSS Variables:</strong> Use{" "}
            <code className="bg-gray-100 px-1 rounded">var(--cerulean)</code> in
            styles
          </li>
          <li>
            <strong>TypeScript Constants:</strong> Import and use{" "}
            <code className="bg-gray-100 px-1 rounded">COLORS.CERULEAN</code>
          </li>
          <li>
            Opacity can be controlled with Tailwind&apos;s opacity modifiers
            like{" "}
            <code className="bg-gray-100 px-1 rounded">bg-cerulean/50</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
