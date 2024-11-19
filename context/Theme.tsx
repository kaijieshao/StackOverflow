"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

// provider's job is to wrap the component and return whatever is passed into them through children
const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // Wrap entire thing with Provider -> give access to some props -> allow us to check light or dark mode
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
