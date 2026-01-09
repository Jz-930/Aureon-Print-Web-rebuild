"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const updateStyles = () => {
    if (refElement.current) {
      const { rotate } = state.current;
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
    }
  };

  return (
    <div
      style={{
        "--r-x": "0deg",
        "--r-y": "0deg",
        perspective: "600px",
      } as React.CSSProperties}
      className={cn("relative", className)}
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { rotate } = state.current;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current?.style.setProperty("--r-x", `0deg`);
          refElement.current?.style.setProperty("--r-y", `0deg`);
        }
      }}
    >
      <div
        className="w-full h-full transition-transform duration-300 ease-out will-change-transform origin-center"
        style={{
          transform: "rotateY(var(--r-x)) rotateX(var(--r-y))",
        }}
      >
        {children}
      </div>
    </div>
  );
};
