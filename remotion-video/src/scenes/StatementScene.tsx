import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Stars } from "../components/Stars";

const FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif";

export const StatementScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleProgress = spring({ frame: frame - 0.4 * fps, fps, config: { damping: 200 } });
  const titleY = interpolate(titleProgress, [0, 1], [60, 0]);

  const subtitleOpacity = interpolate(
    frame,
    [1.2 * fps, 2.2 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const subtitleY = interpolate(
    frame,
    [1.2 * fps, 2.2 * fps],
    [30, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, #08001a 0%, #020010 60%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Stars />

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(88, 28, 180, 0.2) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 120px",
        }}
      >
        <p
          style={{
            fontFamily: FONT,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a78bfa",
            margin: "0 0 36px 0",
            opacity: labelOpacity,
          }}
        >
          Dream Technology
        </p>

        <h2
          style={{
            fontFamily: FONT,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            color: "#ffffff",
            margin: 0,
            opacity: titleProgress,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Your dreams,
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            finally understood.
          </span>
        </h2>

        <p
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 720,
            lineHeight: 1.65,
            margin: "44px 0 0 0",
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          Wake up knowing exactly what you experienced. DreamSense captures
          every scene, emotion, and symbol while you sleep — and delivers it to
          you each morning.
        </p>
      </div>
    </AbsoluteFill>
  );
};
