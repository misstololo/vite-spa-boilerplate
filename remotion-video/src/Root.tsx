import React from "react";
import { Composition } from "remotion";
import { DreamSenseVideo } from "./DreamSenseVideo";

// Total: 150 + 120 + 180 + 180 + 150 - (4 * 20) = 700 frames at 30fps = ~23.3 seconds
const TOTAL_FRAMES = 700;

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
