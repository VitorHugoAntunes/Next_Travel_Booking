import { styled } from "..";

export const DetailsContainer = styled('div', {
    maxWidth: "81rem",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2rem",

    position: "relative",

    "> .calendar": {
        position: "sticky",
        bottom: 20,
        display: "flex",
        justifyContent: "center",

        zIndex: 1000,
    }
})

export const RoomHeader = styled('div', {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    div: {
        display: "flex",

        h1: {
            fontSize: "3rem",
        },

        button: {
            display: "flex",
            alignItems: "center",
            JustifyContent: "center",
            padding: "0.5rem",
            borderRadius: "50%",
            background: "$gray50",
            color: "$gray500",
            transition: "0.2s",

            "&:hover": {
                opacity: 0.8
            }
        }
    },

    "> div": {
        gap: "0.8rem"
    },

    "> div:first-child": {
        flexDirection: "column"
    },

    "> div > div": {
        gap: "1rem",

        "> div": {
            alignItems: "center",
            justifyContent: "center",

            gap: "0.3rem",

            span: {
                color: "$gray500"
            },

            strong: {
                color: "$gray800"
            },

            svg: {
                color: "$gray500"
            }
        }
    }
})

export const RoomImagesContainer = styled('section', {
    width: "100%",
    height: "100%",
    display: "grid",
    gridGap: "1rem",

    marginTop: "2rem",

    gridTemplateAreas: `
    "mainImage mainImage otherImage1 otherImage2"
    "mainImage mainImage otherImage3 otherImage4"`,

    gridTemplateRows: "12rem 12rem",

    "> div": {
        borderRadius: "16px",
        width: "300px",
    },

    "> div img": {
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        objectFit: "cover"
    },

    "> div:first-child": {
        gridArea: "mainImage",
        width: "650px",
    },

    "> div:nth-child(2)": {
        gridArea: "otherImage1"
    },

    "> div:nth-child(3)": {
        gridArea: "otherImage2"
    },

    "> div:nth-child(4)": {
        gridArea: "otherImage3"
    },

    "> div:last-child": {
        gridArea: "otherImage4",
        position: "relative",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        button: {
            position: "absolute",

            padding: "1.5rem",
            borderRadius: "32px",
            background: "$gray300",
            color: "$white",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "0.2s",

            "&:hover": {
                background: "$gray100",
            }
        }
    },
})

export const RoomDetails = styled('section', {
    width: "100%",
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "2.1fr 1fr",
    gap: "4rem",

    "> section": {
        display: "flex",
        flexDirection: "column",

        "> div.roomFeatures": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",

            margin: "1rem 0",

            div: {
                background: "$gray50",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem"
            }
        },

        p: {
            color: "$gray500",
            lineHeight: "1.6"
        },

        h3: {
            marginTop: "2rem",
            marginBottom: "1rem",
        },

        ".mapLayer": {
            borderRadius: "16px",
            zIndex: 0
        }
    }
})