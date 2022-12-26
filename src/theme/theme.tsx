import { theme, Theme } from "@chakra-ui/react";
import React from "react";

export default {
    ...theme,
    fonts: {
        body: "'Rubik', sans-serif;",
        heading: "'Rubik', sans-serif;",
        mono: "'Rubik', sans-serif;",
    },
    colors: {
        ...theme.colors,
        black: "#1b1b1b",
        red: {
            100: "#ffa2a2",
            200: "#ffa2a2",
            300: "#ff8888",
            400: "#ff6f6f",
            500: "#ff5555",
            600: "#ff3c3c",
            700: "#ff2222",
            800: "#ff0808",
        },
    },
} as Theme;
