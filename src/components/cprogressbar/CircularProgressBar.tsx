import React from "react";

type CircularProgressBarProps = {
  progress: number;
  outline: string;
};
const CircularProgressBar = ({
  progress,
  outline,
}: CircularProgressBarProps) => {
  return (
    <div
      style={
        {
          __outline: `${outline}`,
          __progress: `${progress}`,
        } as React.CSSProperties
      }
    >
      <div>60</div>
    </div>
  );
};

export default CircularProgressBar;
