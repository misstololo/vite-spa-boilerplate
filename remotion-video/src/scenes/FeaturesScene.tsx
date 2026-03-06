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

const features = [
  {
    icon: "◎",
    title: "Dream Recording",
    desc: "Capture every detail of your dreams automatically while you sleep. Nothing is lost to the fog of morning.",
    color: "#a78bfa",
  },
  {
    icon: "✦",
    title: "AI Interpretation",
    desc: "Advanced AI analyzes thousands of dream symbols, emotions, and patterns to give you deeply personal insights.",
    color: "#c084fc",
  },
  {
    icon: "⊹",
    title: "Pattern Recognition",
    desc: "Track recurring themes, symbols, and feelings across weeks to reveal what your subconscious is trying to say.",
    color: "#e879f9",
  },
  {
    icon: "⊘",
    title: "Sleep Analysis",
    desc: "Monitor your REM cycles and correlate sleep stages with dream intensity and clarity for deeper understanding.",
    color: "#60a5fa",
  },
  {
    icon: "◈",
    title: "Dream Journal",
    desc: "A beautiful, searchable journal that organizes all your dream experiences with AI-generated summaries.",
    color: "#34d399",
  },
  {
    icon: "◉",
    title: "Dream Community",
    desc: "Explore shared dreams from around the world. Find comfort and wonder in the collective human dreamscape.",
    color: "#f472b6",
  },
];

const FeatureCard: React.FC<{
  feature: (typeof features)[0];
  index: number;
}> = ({ feature, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = 0.8 * fps + index * 0.18 * fps;
  const progress = spring({ frame: frame - delay, fps, config: { damping: 180 } });
  const y = interpolate(progress, [0, 1], [50, 0]);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        opacity: progress,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          fontSize: 32,
          color: feature.color,
          lineHeight: 1,
        }}
      >
        {feature.icon}
      </div>
      <h3
        style={{
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 600,
          color: "#ffffff",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 17,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {feature.desc}
      </p>
    </div>
  );
};

export const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleProgress = spring({ frame: frame - 0.2 * fps, fps, config: { damping: 200 } });
  const titleY = interpolate(titleProgress, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 100px",
        overflow: "hidden",
      }}
    >
      {/* Subtle top gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 300,
          background: "linear-gradient(180deg, rgba(88,28,180,0.12) 0%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: FONT,
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a78bfa",
            margin: "0 0 20px 0",
            opacity: labelOpacity,
          }}
        >
          Features
        </p>

        <h2
          style={{
            fontFamily: FONT,
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            textAlign: "center",
            margin: "0 0 56px 0",
            opacity: titleProgress,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Everything your dreams deserve.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            width: "100%",
          }}
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
