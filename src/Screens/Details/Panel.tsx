import React, { ReactNode } from "react";
import { Box, Text, useTheme, Theme } from "../../Helpers";

interface PanelProps {
  title: string;
  children: ReactNode;
  marginTop?: keyof Theme['spacing'];
  textAlign?: string;
  hasBorder?: boolean;
}

const Panel = ({ title, children, marginTop, hasBorder }: PanelProps) => {
  const theme = useTheme();
  const style = hasBorder ? {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors["divider"],
  } : {}
  return (
    <Box {...{marginTop}}>
      <Text
        variant="subtitles"
        {...{style}}
      >
        {title}
      </Text>
      {children}
    </Box>
  );
};

export default Panel;
