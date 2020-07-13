import { createMuiTheme } from '@material-ui/core/styles';

const darkPurple = "#3A0B42";
const lightPurple = "#BBA0CC";
const purpleGrey = "#2F2730";

export default createMuiTheme({
    palette: {
        common: {
            darkP: `${darkPurple}`,
            lightP: `${lightPurple}`,
        },
        primary: {
            main: `${darkPurple}`
        },
        secondary: {
            main: `${lightPurple}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Merienda One",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        h2: {
            fontFamily: "Merienda One",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: darkPurple,
            lineHeight: 1.5
        },
        h4: {
            fontFamily: "Merienda One",
            fontWeight: 700,
            fontSize: "2rem",
            color: darkPurple
        },
        h5: {
            fontFamily: "Didact Gothic",
            fontSize: "1.75rem",
            color: darkPurple,
            fontWeight: 700
        },
        body1: {
            fontSize: "1.25rem",
            color: purpleGrey,
            fontWeight: 300
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: purpleGrey
        },
        subtitle2: {
            color: purpleGrey,
            fontSize: "1.25rem",
            fontWeight: 300
        },
        button: {
            borderColor: darkPurple,
            borderWidth: 2,
            textTransform: "none",
            backgroundColor: darkPurple,
            borderRadius: 3,
            fontFamily: "Didact Gothic",
            fontWeight: "bold",
            color: "white"
        }
    }
});