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

export const HeroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const eyebrowOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const line1Scale = spring({ frame: frame - 0.5 * fps, fps, config: { damping: 200 } });
  const line2Scale = spring({ frame: frame - 1 * fps, fps, config: { damping: 200 } });
  const line3Scale = spring({ frame: frame - 1.5 * fps, fps, config: { damping: 200 } });

  const subtitleOpacity = interpolate(
    frame,
    [2 * fps, 3 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const subtitleY = interpolate(
    frame,
    [2 * fps, 3 * fps],
    [20, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const ctaOpacity = interpolate(
    frame,
    [3 * fps, 4 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% 30%, #0d0020 0%, #050010 50%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Stars />

      {/* Violet glow behind title */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(100, 58, 200, 0.25) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a78bfa",
            opacity: eyebrowOpacity,
            margin: "0 0 40px 0",
          }}
        >
          Introducing DreamSense
        </p>

        {/* Title lines */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          <div style={{ opacity: line1Scale, transform: `translateY(${interpolate(line1Scale, [0, 1], [40, 0])}px)` }}>
            Sleep.
          </div>
          <div style={{ opacity: line2Scale, transform: `translateY(${interpolate(line2Scale, [0, 1], [40, 0])}px)` }}>
            Dream.
          </div>
          <div
            style={{
              opacity: line3Scale,
              transform: `translateY(${interpolate(line3Scale, [0, 1], [40, 0])}px)`,
              fontStyle: "italic",
              background: "linear-gradient(90deg, #a78bfa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover.
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.6,
            margin: "48px 0 0 0",
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          DreamSense connects to your mind while you sleep, capturing and
          interpreting your dreams with the power of AI.
        </p>

        {/* CTA */}
        <div
          style={{
            marginTop: 52,
            opacity: ctaOpacity,
            display: "flex",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 20,
              fontWeight: 600,
              color: "#000",
              background: "linear-gradient(135deg, #a78bfa, #c084fc)",
              padding: "18px 48px",
              borderRadius: 980,
              letterSpacing: "-0.01em",
            }}
          >
            Start Dreaming
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 20,
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              padding: "18px 48px",
              borderRadius: 980,
              letterSpacing: "-0.01em",
            }}
          >
            Learn More
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
