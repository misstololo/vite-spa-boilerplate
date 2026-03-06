import React from "react";
import { Composition } from "remotion";
import { DreamSenseVideo } from "./DreamSenseVideo";

// Total: 150 + 120 + 180 + 180 + 150 = 780 frames at 30fps = 26s
const TOTAL_FRAMES = 780;

export const Root: React.FC = () => {
  return (
    <Composition
      id="DreamSense"
      component={DreamSenseVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
