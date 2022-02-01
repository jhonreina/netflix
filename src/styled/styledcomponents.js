import styled from "styled-components";
import {InputBase} from "@material-ui/core";

export const NetflixInput = styled(InputBase)`
    z-index:30;
    background:#fff;
    height:30px;
    padding: 23px;
    border-radius:5px;
    border:none;
`
const  handelWidth = wide =>{
    switch (wide) {
        case "fullWidth":return"100%";  
        case "medium": return"260px";
        default: return "160px";

    }
}

export const NetflixButton = styled .button`
    z-index: 15;
    background-color: ${({color})=> color === "gray" ? "lightgray":"red" };
    color: #fff;
    border-radius:${({radius})=> (radius ? "5px": null)};
    text-transform:inherit; 
    padding:15px;
    font-size:0.8rem;  
    border:none;
    outline: none; 
    cursor:pointer;
    width:${({wide})=>handelWidth(wide)}
`