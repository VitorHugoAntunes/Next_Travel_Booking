import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
    width: '100%',
    maxWidth: '90vw',
    padding: '3rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '4rem',
    height: '100%',

    '& > div': {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',

        div: {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            height: '2.4rem',
            width: '50rem',
            padding: '0 0 0 1.5rem',
            borderRadius: '100px',
            border: 'none',
            background: '$gray50',

            svg: {
                color: "$gray500",
            },

            input: {
                flex: 1,
                height: "100%",
                border: "none",
                background: "none",

                "&::placeholder": {
                    fontWeight: "bold",
                    color: "$gray500",
                }
            }
        }
    },

    a: {
        color: '$gray900',
        textDecoration: 'none'
    }
})