"use client";

import React, { useState, useRef } from "react";

export const DirectionAwareHover = ({
  imageUrl,
  alt = "Background Image",
  children,
  className,
  imageClassName,
}) => {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState("top");

  const getDirection = (event, rect) => {
    const { clientX, clientY } = event;
    const { width, height, top, left } = rect;
    const x = (clientX - left - width / 2) * (width > height ? height / width : 1);
    const y = (clientY - top - height / 2) * (height > width ? width / height : 1);
    const angle = Math.atan2(y, x);
    const degrees = (angle * 180) / Math.PI + 180;

    if (degrees >= 45 && degrees < 135) return "top";
    if (degrees >= 135 && degrees < 225) return "right";
    if (degrees >= 225 && degrees < 315) return "bottom";
    return "left";
  };
  
  const handleMouseEnter = (event) => {
    if (!ref.current) return;
    const newDirection = getDirection(event, ref.current.getBoundingClientRect());
    setDirection(newDirection);
    setIsHovering(true);
  };

  const handleMouseLeave = (event) => {
    if (!ref.current) return;
    const newDirection = getDirection(event, ref.current.getBoundingClientRect());
    setDirection(newDirection);
    setIsHovering(false);
  };

  const getTransformClasses = () => {
    if (isHovering) {
      return 'translate-x-0 translate-y-0';
    }
    switch (direction) {
      case 'top': return '-translate-y-full';
      case 'bottom': return 'translate-y-full';
      case 'left': return '-translate-x-full';
      case 'right': return 'translate-x-full';
      default: return '-translate-y-full';
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      className={`group relative h-full w-full overflow-hidden ${className || ''}`}
    >
      <img
        src={imageUrl}
        alt={alt}
        className={`h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus:scale-105 ${imageClassName || ''}`}
        onError={(e) => {
          e.currentTarget.onerror = null; 
          e.currentTarget.src=`https://placehold.co/600x400/171717/FFF?text=Image+Not+Found`;
        }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/70 p-4 transition-transform duration-300 ease-out 
                   ${getTransformClasses()}`}
      >
        <div className="text-white">
            {children}
        </div>
      </div>
    </div>
  );
};
