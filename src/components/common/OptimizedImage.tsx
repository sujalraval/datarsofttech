"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "loading" | "placeholder"> {
  loading?: "lazy" | "eager";
  showSkeleton?: boolean;
  skeletonClassName?: string;
}

export default function OptimizedImage({
  loading,
  showSkeleton = true,
  skeletonClassName = "bg-gray-200 animate-pulse",
  className = "",
  priority,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Show skeleton loader for lazy-loaded images (but not for priority images)
  if (showSkeleton && isLoading && !priority && loading === "lazy") {
    return (
      <div className={`${className} ${skeletonClassName} rounded-lg`} />
    );
  }

  // Show fallback for images that failed to load
  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      {...props}
      loading={priority ? undefined : loading}
      className={className}
      priority={priority}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}