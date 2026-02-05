// import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const StyleGuide = () => {
  const colorPalette = {
    primary: [
      {
        name: "Primary Blue",
        hsl: "201 89% 45%",
        hex: "#0494e2",
        usage: "CTAs, links, accents",
      },
      {
        name: "Primary Dark",
        hsl: "201 89% 37%",
        hex: "#027abc",
        usage: "Hover states, emphasis",
      },
      {
        name: "Primary Light",
        hsl: "201 89% 67%",
        hex: "#b4d8f0",
        usage: "Highlights, gradients",
      },
    ],
    secondary: [
      {
        name: "Navy Dark",
        hsl: "222 47% 11%",
        hex: "#0F172A",
        usage: "Headers, dark backgrounds",
      },
      {
        name: "Navy",
        hsl: "215 25% 27%",
        hex: "#334155",
        usage: "Body text, subtitles",
      },
      {
        name: "Navy Light",
        hsl: "215 20% 65%",
        hex: "#94A3B8",
        usage: "Muted text, placeholders",
      },
    ],
    accent: [
      {
        name: "Success Green",
        hsl: "142 76% 36%",
        hex: "#16A34A",
        usage: "Success states, growth icons",
      },
      {
        name: "Teal",
        hsl: "180 70% 45%",
        hex: "#22B8B8",
        usage: "Secondary accents, badges",
      },
    ],
    neutral: [
      {
        name: "Background",
        hsl: "0 0% 100%",
        hex: "#FFFFFF",
        usage: "Page backgrounds",
      },
      {
        name: "Surface",
        hsl: "210 40% 96%",
        hex: "#F1F5F9",
        usage: "Cards, sections",
      },
      {
        name: "Border",
        hsl: "214 32% 91%",
        hex: "#E2E8F0",
        usage: "Dividers, borders",
      },
    ],
  };

  const typography = [
    {
      name: "Display",
      class: "text-5xl font-bold",
      example: "Hero Headlines",
      size: "48px / 3rem",
    },
    {
      name: "H1",
      class: "text-4xl font-bold",
      example: "Page Titles",
      size: "36px / 2.25rem",
    },
    {
      name: "H2",
      class: "text-3xl font-semibold",
      example: "Section Headers",
      size: "30px / 1.875rem",
    },
    {
      name: "H3",
      class: "text-2xl font-semibold",
      example: "Card Titles",
      size: "24px / 1.5rem",
    },
    {
      name: "H4",
      class: "text-xl font-medium",
      example: "Subsections",
      size: "20px / 1.25rem",
    },
    {
      name: "Body Large",
      class: "text-lg",
      example: "Lead paragraphs",
      size: "18px / 1.125rem",
    },
    {
      name: "Body",
      class: "text-base",
      example: "Regular body text",
      size: "16px / 1rem",
    },
    {
      name: "Small",
      class: "text-sm",
      example: "Captions, labels",
      size: "14px / 0.875rem",
    },
    {
      name: "XS",
      class: "text-xs",
      example: "Fine print",
      size: "12px / 0.75rem",
    },
  ];

  const spacing = [
    { name: "xs", value: "4px", class: "p-1" },
    { name: "sm", value: "8px", class: "p-2" },
    { name: "md", value: "16px", class: "p-4" },
    { name: "lg", value: "24px", class: "p-6" },
    { name: "xl", value: "32px", class: "p-8" },
    { name: "2xl", value: "48px", class: "p-12" },
    { name: "3xl", value: "64px", class: "p-16" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Datarsoft Style Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive guide to colors, typography, and components used
              across the Datarsoft website.
            </p>
          </div>

          {/* Color Palette */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                1
              </span>
              Color Palette
            </h2>

            {/* Primary Colors */}
            <div className="mb-10">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Primary Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {colorPalette.primary.map((color) => (
                  <Card key={color.name} className="overflow-hidden">
                    <div
                      className="h-24 w-full"
                      style={{ backgroundColor: color.hex }}
                    />
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground">
                        {color.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {color.hex}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        HSL: {color.hsl}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {color.usage}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="mb-10">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Secondary Colors (Navy)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {colorPalette.secondary.map((color) => (
                  <Card key={color.name} className="overflow-hidden">
                    <div
                      className="h-24 w-full"
                      style={{ backgroundColor: color.hex }}
                    />
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground">
                        {color.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {color.hex}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        HSL: {color.hsl}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {color.usage}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Accent Colors */}
            <div className="mb-10">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Accent Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colorPalette.accent.map((color) => (
                  <Card key={color.name} className="overflow-hidden">
                    <div
                      className="h-24 w-full"
                      style={{ backgroundColor: color.hex }}
                    />
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground">
                        {color.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {color.hex}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        HSL: {color.hsl}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {color.usage}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                Neutral Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {colorPalette.neutral.map((color) => (
                  <Card key={color.name} className="overflow-hidden">
                    <div
                      className="h-24 w-full border-b"
                      style={{ backgroundColor: color.hex }}
                    />
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground">
                        {color.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {color.hex}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        HSL: {color.hsl}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {color.usage}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                2
              </span>
              Typography
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {typography.map((type) => (
                    <div
                      key={type.name}
                      className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b last:border-0 last:pb-0"
                    >
                      <div className="w-32 shrink-0">
                        <Badge variant="secondary">{type.name}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {type.size}
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className={`${type.class} text-foreground`}>
                          {type.example}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {type.class}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Spacing */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                3
              </span>
              Spacing Scale
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-6">
                  {spacing.map((space) => (
                    <div key={space.name} className="text-center">
                      <div
                        className="bg-primary/20 border-2 border-primary border-dashed mx-auto mb-2"
                        style={{ width: space.value, height: space.value }}
                      />
                      <p className="text-sm font-medium text-foreground">
                        {space.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {space.value}
                      </p>
                      <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                        {space.class}
                      </code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Buttons */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                4
              </span>
              Buttons
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">
                      Variants
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">
                      Sizes
                    </h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="lg">Large</Button>
                      <Button size="default">Default</Button>
                      <Button size="sm">Small</Button>
                      <Button size="icon">✓</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">
                      Rounded Styles
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <Button className="rounded-none">Square</Button>
                      <Button className="rounded-md">Rounded MD</Button>
                      <Button className="rounded-xl">Rounded XL</Button>
                      <Button className="rounded-full">Pill</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                5
              </span>
              Cards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Standard card with subtle shadow and border. Use for content
                    sections.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-foreground text-background">
                <CardHeader>
                  <CardTitle className="text-background">Dark Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-background/70 text-sm">
                    Inverted card for emphasis. Use sparingly for featured
                    content.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle>Accent Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Card with primary accent. Use for highlighting important
                    features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Badges */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                6
              </span>
              Badges
            </h2>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    Success
                  </Badge>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    Warning
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                7
              </span>
              Usage Guidelines
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center gap-2">
                    <span>✓</span> Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Use primary blue (#0494e2) for all CTAs and interactive
                      elements
                    </li>
                    <li>• Maintain consistent spacing using the scale</li>
                    <li>• Use dark navy for headers on light backgrounds</li>
                    <li>• Keep sufficient contrast (4.5:1 minimum)</li>
                    <li>• Use green accent sparingly for success/growth</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <span>✕</span> Don&apos;t
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Don&apos;t use too many accent colors together</li>
                    <li>• Avoid low contrast text combinations</li>
                    <li>
                      • Don&apos;t use pure black (#000) - use navy instead
                    </li>
                    <li>• Avoid inconsistent border radius</li>
                    <li>• Don&apos;t mix serif and sans-serif fonts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StyleGuide;
