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

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const glowOpacity = interpolate(frame, [0, 1.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleProgress = spring({ frame: frame - 0.3 * fps, fps, config: { damping: 200 } });
  const titleY = interpolate(titleProgress, [0, 1], [60, 0]);

  const subtitleOpacity = interpolate(
    frame,
    [0.8 * fps, 1.8 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const subtitleY = interpolate(
    frame,
    [0.8 * fps, 1.8 * fps],
    [30, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const ctaProgress = spring({ frame: frame - 1.5 * fps, fps, config: { damping: 200 } });
  const ctaScale = interpolate(ctaProgress, [0, 1], [0.85, 1]);

  // Pulsing glow on the button
  const glowPulse =
    0.6 + 0.4 * Math.sin((frame / fps) * Math.PI * 1.2);

  // Logo fade
  const logoOpacity = interpolate(frame, [2.5 * fps, 3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Stars />

      {/* Large violet glow */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(88, 28, 180, ${0.3 * glowOpacity}) 0%, rgba(167, 139, 250, ${0.08 * glowOpacity}) 40%, transparent 70%)`,
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
        <h2
          style={{
            fontFamily: FONT,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#ffffff",
            margin: "0 0 40px 0",
            opacity: titleProgress,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Start your dream
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #a78bfa 0%, #c084fc 40%, #e879f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            journey today.
          </span>
        </h2>

        <p
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 680,
            lineHeight: 1.6,
            margin: "0 0 56px 0",
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          Join millions of dreamers who wake up with clarity, insight, and
          wonder every single morning.
        </p>

        <div
          style={{
            opacity: ctaProgress,
            transform: `scale(${ctaScale})`,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 24,
              fontWeight: 600,
              color: "#000",
              background: "linear-gradient(135deg, #a78bfa, #c084fc, #e879f9)",
              padding: "22px 72px",
              borderRadius: 980,
              letterSpacing: "-0.01em",
              boxShadow: `0 0 ${60 * glowPulse}px rgba(167, 139, 250, ${0.6 * glowPulse}), 0 0 ${120 * glowPulse}px rgba(192, 132, 252, ${0.25 * glowPulse})`,
            }}
          >
            Start Dreaming
          </div>
        </div>

        {/* DreamSense wordmark */}
        <div
          style={{
            marginTop: 80,
            opacity: logoOpacity,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            DreamSense
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
