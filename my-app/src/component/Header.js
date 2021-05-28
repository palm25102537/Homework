import styled from "@emotion/styled"

let Header = styled.h1`
color: ${function(props){if(props.primary2){
    return "lightcyan";
  }else {
     return "cornflowerblue";
  }}};
fontSize: 7rem;
`;

function Head(props) {
    return <Header props = {props.primary}>{props.children}</Header>
}

export default Head