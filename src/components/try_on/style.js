import { Link } from "react-router-dom";
import styled from "styled-components";

export const TryOnButtonDiv = styled(Link)`

border:none;
outline:none;
font-size:2rem;
padding:1rem 2rem;
flex:1;
background-color:${props => props.theme.header_footer};
color:${props => props.theme.text};
border:1px solid ${props => props.theme.text};
display: flex;
gap:1rem;
align-items:center;
justify-content:center;
&:hover{
  color:${props => props.theme.hover};
  border:1px solid ${props => props.theme.hover};
}
cursor: pointer;
transition:all .4s ease;
text-decoration:none;
font-weight:500;
`


//ClotheImage

export const ClotheImageDiv = styled.div`
  border: 1px solid #ddd;
  height:27rem;
  display: flex;
    justify-content: center;
    align-items: center;


`


export const ClotheImg = styled.img``


//YourImage

export const YourImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  border: 1px solid #ddd;
  height:27rem;
  justify-content: center;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageBox = styled.label`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    border-color: #888;
  }
`;

export const UploadIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #888;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;

`;

export const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  color: #555;
  font-size: 1.5rem;
  z-index: 10;
  border-radius: 10px;
`;

//Result Image

export const ResultImageDiv = styled.div`
  border: 1px solid #ddd;

  height: 54rem;
  display: flex;
  align-items: center;
  justify-content: center;

`


export const ResultImg = styled.img`
width:100%;
height:100%;
object-fit:contain;
`


export const ConfirmButtonDiv = styled.div`
width:100%;
margin-top:1rem;
`

export const ConfirmButton = styled.button`
width:100%;
font-size:2rem;
background-color:transparent;
border:1px solid ${props => props.theme.text};
padding:1rem;
color:${props => props.theme.text}; 
cursor:pointer;
`