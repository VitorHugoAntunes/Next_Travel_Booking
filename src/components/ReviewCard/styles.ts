import { styled } from "@stitches/react";

export const ReviewCardContainer = styled('div', {
    flex: 1,
    display: "flex",
    flexDirection: "column",

    border: "2px solid $gray50",
    borderRadius: "16px",
    padding: "2rem",
    gap: "1.5rem",

    "> div:first-child": {
        display: "flex",
        alignItems: "center",
        gap: "1rem",

        strong: {
            fontSize: "1.5rem",
            color: "$gray900"
        },

        span: {
            fontSize: "1.5rem",
            color: "$gray500"
        }
    },

    "> div:not(.rating)": {
        display: "flex",
        justifyContent: "space-between",

        span: {
            color: "$gray500"
        },

        "> div": {
            display: "flex",
            alignItems: "center",
            gap: "1rem",

            "> div": {
                width: "8rem",
                height: "0.4rem",
                background: "$gray500",
                borderRadius: "8px",

                "> div": {
                    width: "7.4rem",
                    height: "0.4rem",
                    background: "$gray900",
                    borderRadius: "8px",
                }
            }
        }
    }
})