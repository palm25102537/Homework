const Button = {
    baseStyle:{
        fontWeigth: "400"
    },
    variants:{
        primary:{
            bg: "primary.200",
            color:"white",
            ":hover":{
                bg:"white",
                color:"primary.200"
            },
            ":foucs":{
                boxShadow: "none"
            }
        }
    },
    sizes:{
        sm:{
            minWidth: "150px",
            fontSize:"sm",
            padding:"4",
        },
        md:{
            minWidth: "150px",
            fontSize:"md",
            padding:"6"
        },
        lg:{
            fontSize:"lg",
            padding:"8",
            minWidth:"150px"
        }
    },
    defaultProps:{}
}

export default Button