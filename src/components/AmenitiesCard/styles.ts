import { styled } from "@stitches/react";

export const AmenitiesContainer = styled('div', {
    border: "2px solid $gray50",
    borderRadius: "16px",
    padding: "2rem",
    marginTop: "1.5rem",

    "> div:first-child": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",

        "> div": {
            display: "flex",
            alignItems: "center",
            gap: "1rem",

            "span, svg": {
                color: "$gray500"
            }
        }
    },

    "> div:last-child": {
        display: "flex",
        marginTop: "1.5rem",
        justifyContent: "center",
        alignItems: "center",

        a: {
            textDecoration: "none",
            color: "$blue",
            transition: "0.2s",

            "&:hover": {
                opacity: 0.8
            }
        }
    }
})