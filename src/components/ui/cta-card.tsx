import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ctaCardVariants = cva(
  "rounded-2xl p-8 transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
        secondary: "bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-300 hover:shadow-lg",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        subtle: "bg-slate-50 hover:bg-slate-100 border border-slate-200",
      },
      size: {
        sm: "px-6 py-4",
        md: "px-8 py-6",
        lg: "px-10 py-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface CTACardProps
  extends ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ctaCardVariants> {
  title: string;
  description: string;
  actionText?: string;
  href?: string;
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
}

export function CTACard({
  title,
  description,
  actionText = "Learn More",
  href,
  variant,
  size,
  icon,
  showArrow = true,
  className,
  ...props
}: CTACardProps) {
  const content = (
    <div
      className={cn(ctaCardVariants({ variant, size, className }))}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        {icon && (
          <div className="mb-4">
            {icon}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
        </div>
        
        {/* Action */}
        <div className="inline-flex items-center gap-2 font-semibold">
          {actionText}
          {showArrow && <ArrowRight className="w-4 h-4" />}
        </div>
      </div>
    </div>
  );

  // If href is provided, wrap in anchor tag
  if (href) {
    return (
      <a href={href} className="block group">
        {content}
      </a>
    );
  }

  return content;
}