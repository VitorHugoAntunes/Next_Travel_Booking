import { styled } from "@stitches/react";

export const FooterContainer = styled('div', {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "3px solid $gray50",

    padding: "2rem 0",

    "> a": {
        textDecoration: "none",
        color: "$gray900",

        "> div": {
            display: "flex",
            alignItems: "center",
            gap: "1rem"
        }
    }
})