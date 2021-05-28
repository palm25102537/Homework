import {extendTheme} from '@chakra-ui/react'
import Button from "./button"

export const theme = extendTheme({
    style:{
        global:{
            padding:0,
            margin:0,
            fontSize: "40px",
            color:"primary.100"
        }
    },
    "*":{
        boxSizing:"border-box"
    },
    colors:{
        primary:{
            200:"#424642",
            100:"#536162"
        },
        secondary:"#C06014",
        highlight:{
            100:"#F27B19"
        },
        muted:{
            300:"#F3F4Ed",
            200:"#FCFCFC",
            100:"#FFFFF"
        },
        
    },
    fonts:{
        heading:"Amatic SC",
        body:"Amatic SC",
    },
    components:{
        Button,
    }
})

export default theme