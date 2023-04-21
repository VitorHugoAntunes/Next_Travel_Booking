import { styled } from "@stitches/react";

export const CalendarContainer = styled('div', {
    ".PopoverArrow": {
        fill: "$white"
    },

    ".calendarMenuButton": {
        borderRadius: "32px",
        background: "$white",
        border: "2px solid $gray100",
        transition: "0.2s",

        ".calendarMenu": {
            padding: "0.5rem 0.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",

            span: {
                color: "$blue",
                fontSize: "1rem",
                fontWeight: "bold",
            },

            ".calendarIcon": {
                background: "$blue",
                padding: "0.5rem",
                borderRadius: "50%",

                svg: {
                    color: "$white"
                }
            },
        },

        "&:hover": {
            filter: "brightness(0.9)",
        }
    },
})

export const CalendarDiv = styled('div', {
    maxWidth: "45rem",
    height: "30rem",
    padding: "0.5rem",
    border: "2px solid $gray100",
    borderRadius: "16px",
    background: "$gray50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 100,

    ".calendarContent": {
        width: "100%",
        height: "100%",
        padding: "1rem",
        position: "relative",
        borderRadius: "16px",
        background: "$white",

        "> div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",

            "> div": {
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem"
            }
        },

        "> div .reactCalendar": {
            width: "100%",
            height: "100%",
            borderRadius: "16px",

            "button": {
                borderRadius: "16px",
            }
        }
    },

    ".PopoverClose": {
        position: "absolute",
        right: "1rem",
        top: "1rem",
        background: "none"
    }
})