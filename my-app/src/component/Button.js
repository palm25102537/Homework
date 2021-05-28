import styled from "@emotion/styled"


let StyledButton = styled.button`
border-radius : 5px;
background-color: khaki;
height: 30px;
width: 100px;
color: ${function(props){if(props.primary){
  return "crimson";
}else {
   return "cornflowerblue";
}}};
margin: 5px;
`;

function Button(props){
    return <StyledButton onClick = {props.onClick} {...props}>{props.children}</StyledButton> 
}

export default Button