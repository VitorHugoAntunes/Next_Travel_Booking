import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        outline: 'none',
    },

    body: {
        backgroundColor: '$white',
        color: '$gray800',
        '-webkit-font-smoothing': 'antialiased',
        maxWidth: "90rem",
        marginLeft: "auto",
        marginRight: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent"
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },

    'button': {
        padding: 0,
        border: "none",
        margin: 0,
        cursor: "pointer",
        lineHeight: 0
    },

    "body::-webkit-scrollbar": {
        color: "$gray900",
        scrollbarWidth: "thin",
    },

    "body::-webkit-scrollbar-thumb": {
        backgroundColor: "$gray500",
        borderRadius: "20px",
    },

    "body::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#a9a9a9",
    }
})