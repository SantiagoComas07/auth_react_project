import {createTheme} from '@mui/material/styles';

// This is the config to create the global style of the aplication
export const theme = createTheme({
    palette:{
        primary:{
            main:'#065B70',
        },
        secondary:{
            main: '#3EABDE',
        }
    },
    typography:{
        fontFamily:`"Quicksand", sans-serif`,
    }

})

