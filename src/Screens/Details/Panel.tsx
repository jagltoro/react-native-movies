import React, { ReactNode } from "react";
import { Box, Text } from "../../Helpers";

interface PanelProps {
  title: string;
  children: ReactNode;
  borderStyle: {
    width: number;
    color: string;
  };
}

const Panel = ({ title, children, borderStyle }: PanelProps) => {
  return (
    <Box marginTop="m">
      <Text
        variant="subtitles"
        style={{
          borderBottomWidth: borderStyle.width,
          borderBottomColor: borderStyle.color,
        }}
      >
        {title}
      </Text>
      {children}
    </Box>
  );
};

export default Panel;
