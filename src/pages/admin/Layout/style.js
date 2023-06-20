import {createStyles, getStylesRef, px, rem} from '@mantine/core';
const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
    },

    version: {
        backgroundColor: theme.fn.lighten(
            theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
            0.1,
        ),
        color: theme.white,
        fontWeight: 700,
    },

    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.fn.lighten(
            theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
            0.1,
        )}`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.fn.lighten(
            theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
            0.1,
        )}`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        marginBottom: 12,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
                0.1,
            ),
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.white,
        margin: 'auto',
        opacity: 0.8,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
                0.15,
            ),
            [`& .${getStylesRef('icon')}`]: {
                opacity: 0.9,
            },
        },
    },
}));
export default useStyles;
