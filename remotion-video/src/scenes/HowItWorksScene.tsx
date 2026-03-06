import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif";

const steps = [
  {
    n: "01",
    title: "Place & Connect",
    desc: "Place the DreamSense device on your nightstand before you sleep. It pairs wirelessly with your phone in seconds.",
  },
  {
    n: "02",
    title: "Sleep Naturally",
    desc: "Our sensors detect your REM sleep stages and begin capturing dream signals — no effort required from you.",
  },
  {
    n: "03",
    title: "Wake & Discover",
    desc: "Open the app each morning to read your detailed, AI-interpreted dream report. Relive it like it just happened.",
  },
];

const Step: React.FC<{ step: (typeof steps)[0]; index: number }> = ({
  step,
  index,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = 0.9 * fps + index * 0.4 * fps;
  const progress = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const x = interpolate(progress, [0, 1], [60, 0]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        opacity: progress,
        transform: `translateX(${x}px)`,
      }}
    >
      {/* Step number */}
      <div
        style={{
          fontFamily: FONT,
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          background: "linear-gradient(135deg, #a78bfa 0%, rgba(167,139,250,0.2) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {step.n}
      </div>

      {/* Connector line */}
      <div
        style={{
          width: 40,
          height: 3,
          background: "linear-gradient(90deg, #a78bfa, rgba(167,139,250,0.3))",
          borderRadius: 2,
        }}
      />

      <h3
        style={{
          fontFamily: FONT,
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#1a1a1a",
          margin: 0,
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 19,
          fontWeight: 400,
          color: "rgba(0,0,0,0.55)",
          margin: 0,
          lineHeight: 1.65,
        }}
      >
        {step.desc}
      </p>
    </div>
  );
};

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleProgress = spring({ frame: frame - 0.2 * fps, fps, config: { damping: 200 } });
  const titleY = interpolate(titleProgress, [0, 1], [40, 0]);
  const subtitleOpacity = interpolate(frame, [0.5 * fps, 1.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#f5f5f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 120px",
        overflow: "hidden",
      }}
    >
      {/* Subtle violet top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 4,
          background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
        }}
      />

      <div style={{ width: "100%", maxWidth: 1400 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p
            style={{
              fontFamily: FONT,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7c3aed",
              margin: "0 0 20px 0",
              opacity: labelOpacity,
            }}
          >
            How it Works
          </p>

          <h2
            style={{
              fontFamily: FONT,
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: "#1a1a1a",
              margin: "0 0 20px 0",
              opacity: titleProgress,
              transform: `translateY(${titleY}px)`,
            }}
          >
            Three steps to understanding.
          </h2>

          <p
            style={{
              fontFamily: FONT,
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(0,0,0,0.5)",
              margin: 0,
              opacity: subtitleOpacity,
            }}
          >
            DreamSense is remarkably simple. You sleep — we listen — you discover.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 60,
          }}
        >
          {steps.map((s, i) => (
            <Step key={s.n} step={s} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
