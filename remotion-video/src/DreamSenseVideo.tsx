import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { HeroScene } from "./scenes/HeroScene";
import { StatementScene } from "./scenes/StatementScene";
import { FeaturesScene } from "./scenes/FeaturesScene";
import { HowItWorksScene } from "./scenes/HowItWorksScene";
import { CTAScene } from "./scenes/CTAScene";

// Scene durations at 30fps
// Hero:       5s = 150f
// Statement:  4s = 120f
// Features:   6s = 180f
// HowItWorks: 6s = 180f
// CTA:        5s = 150f
// Total:      780 frames = 26s

export const DreamSenseVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence durationInFrames={150} premountFor={30}>
          <HeroScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120} premountFor={30}>
          <StatementScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180} premountFor={30}>
          <FeaturesScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180} premountFor={30}>
          <HowItWorksScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={150} premountFor={30}>
          <CTAScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
