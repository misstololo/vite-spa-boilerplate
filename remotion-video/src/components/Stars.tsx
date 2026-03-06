import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const STAR_COUNT = 70;

export const Stars: React.FC = () => {
  const frame = useCurrentFrame();

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        x: (i * 137.508) % 100,
        y: (i * 61.803) % 100,
        size: 0.8 + (i % 4) * 0.6,
        phase: (i * 0.9) % (Math.PI * 2),
        speed: 0.025 + (i % 7) * 0.006,
        bright: i % 7 === 0,
      })),
    []
  );

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {stars.map((s, i) => {
        const alpha =
          0.15 + 0.85 * (0.5 + 0.5 * Math.sin(s.phase + frame * s.speed));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              backgroundColor: s.bright
                ? `rgba(220, 200, 255, ${alpha})`
                : `rgba(255, 255, 255, ${alpha * 0.7})`,
              boxShadow: s.bright
                ? `0 0 ${s.size * 4}px rgba(167, 139, 250, ${alpha * 0.8})`
                : "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
