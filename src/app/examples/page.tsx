"use client";

import { COLORS } from "@/constants/colors";

// Example component showing different ways to use your color palette
export default function ColorExamplesPage() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-primary-blue">
        Color Palette Examples
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Using Tailwind classes */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue-dark">
            Using Tailwind Classes
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded bg-primary-blue text-white">
              Primary Blue Background
            </div>
            <div className="p-4 rounded bg-logo-blue-light text-gray-800">
              Logo Light Blue Background
            </div>
            <div className="p-4 rounded bg-primary-blue-dark text-white">
              Primary Dark Blue Background
            </div>
            <div className="p-4 rounded bg-primary-blue text-white">
              Primary Blue Background
            </div>

            <div className="pt-4 border-t">
              <p className="text-primary-blue">Primary Blue text color</p>
              <p className="text-logo-blue-light">Logo Light Blue text color</p>
              <p className="text-primary-blue-dark">
                Primary Dark Blue text color
              </p>
              <p className="text-primary-blue">Primary Blue text color</p>
            </div>
          </div>
        </div>

        {/* Using CSS Variables */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue-dark">
            Using CSS Variables
          </h2>
          <div className="space-y-4">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "#0494e2", color: "white" }}
            >
              Cerulean using CSS Variable
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "#b4d8f0", color: "#333" }}
            >
              Blizzard Blue using CSS Variable
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "#0494e2", color: "white" }}
            >
              Breaker Bay using CSS Variable
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "#027abc", color: "white" }}
            >
              Hippie Blue using CSS Variable
            </div>
          </div>
        </div>

        {/* Using TypeScript constants */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-logo-blue-light">
            Using TypeScript Constants
          </h2>
          <div className="space-y-4">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: COLORS.PRIMARY_BLUE, color: "white" }}
            >
              Primary Blue using TS Constant: {COLORS.PRIMARY_BLUE}
            </div>
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: COLORS.PRIMARY_BLUE_LIGHT,
                color: "#333",
              }}
            >
              Logo Light Blue using TS Constant: {COLORS.PRIMARY_BLUE_LIGHT}
            </div>
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: COLORS.PRIMARY_BLUE_DARK,
                color: "white",
              }}
            >
              Primary Dark Blue using TS Constant: {COLORS.PRIMARY_BLUE_DARK}
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: COLORS.PRIMARY_BLUE, color: "white" }}
            >
              Primary Blue using TS Constant: {COLORS.PRIMARY_BLUE}
            </div>
          </div>
        </div>

        {/* Practical Usage Examples */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue">
            Practical Usage Examples
          </h2>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-primary-blue-dark transition">
              Button with Primary Blue
            </button>
            <div className="p-4 border-l-4 border-primary-blue-dark bg-logo-blue-light/20">
              This is an alert styled with your color palette
            </div>
            <div className="flex space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary-blue"></div>
              <div className="w-10 h-10 rounded-full bg-logo-blue-light"></div>
              <div className="w-10 h-10 rounded-full bg-primary-blue-dark"></div>
              <div className="w-10 h-10 rounded-full bg-primary-blue"></div>
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
            <code className="bg-gray-100 px-1 rounded">text-primary-blue</code>,{" "}
            <code className="bg-gray-100 px-1 rounded">bg-primary-blue</code>,
            etc.
          </li>
          <li>
            <strong>CSS Variables:</strong> Use{" "}
            <code className="bg-gray-100 px-1 rounded">
              var(--primary-blue)
            </code>{" "}
            in styles
          </li>
          <li>
            <strong>TypeScript Constants:</strong> Import and use{" "}
            <code className="bg-gray-100 px-1 rounded">
              COLORS.PRIMARY_BLUE
            </code>
          </li>
          <li>
            Opacity can be controlled with Tailwind&apos;s opacity modifiers
            like{" "}
            <code className="bg-gray-100 px-1 rounded">bg-primary-blue/50</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
