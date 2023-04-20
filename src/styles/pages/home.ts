import { styled } from "..";

export const HomeContainer = styled('div', {
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    position: "relative",
})

export const CategoriesContainer = styled('div', {
    position: "sticky",
    zIndex: 5,
    top: "0px",
    flex: 1,
    display: "flex",
    padding: "1rem 0",
    gap: "2rem",
    borderBottom: "3px solid $gray50",
    background: "$white",

    a: {
        textDecoration: "none",
        color: "$gray500",
    }
})

export const RoomCardContainer = styled('div', {
    marginTop: "2rem",
    marginBottom: "2rem",

    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",
    columnGap: "0.5rem",
    rowGap: "3rem",
    borderRadius: "16px",
})

export const RoomCard = styled('div', {
    width: "21rem",
    height: "25rem",
    padding: "0.5rem",
    background: "$gray50",
    border: "2px solid $gray100",
    borderRadius: "16px",
    transition: "0.2s",

    "&:hover": {
        border: "2px solid $blue",
        cursor: "pointer",
    }
})

export const ImageContainer = styled('div', {
    display: "flex",
    position: "relative",
    flex: 1,

    img: {
        width: "100%",
        borderRadius: "10px"
    },

    "> div": {
        position: "absolute",
        flex: 1,
        width: "100%",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        div: {
            display: "flex",
            padding: "0.5rem",
            background: "$location",
            opacity: "90%",
            borderRadius: "64px",

            gap: "0.5rem",
        }
    }
})

export const RoomCardDetails = styled('div', {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    gap: "0.8rem",

    "> div:first-child": {
        display: "flex",
        justifyContent: "space-between",

        span: {
            fontSize: "1.2rem",
        }
    },

    "> div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "> span, > div": {
            display: "flex",
            alignItems: "center",
            gap: "0.3rem"
        }
    },

    "> div:last-child": {
        "> div": {
            background: "$gray50",
            padding: "0.4rem",
            borderRadius: "4px"
        },

        "> div span": {
            fontSize: "0.9rem"
        }
    },

    "> span": {
        fontSize: "1.2rem",
        color: "$blue",
        fontWeight: "bold"
    }
})