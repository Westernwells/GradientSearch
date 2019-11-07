import styled from 'styled-components'

const Button = styled.button`
width:100px;
padding:8px 16px;
margin:10px;
color:white;
border-radius:5px;
margin:0 auto;
background-color:green;
`;

const SearchInput = styled.input`
width:500px;
height:30px;
margin:0 auto;
border:2px solid green;
border-radius:5px;
color:green;
padding:5px 10px;

::placeholder{
  color:green;
}
`;
const Landing =styled.div`
height:30vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

.header{
    color:green;
    font-size:1.5rem;
    font-weight:bold;
}
.subHeader{
    color:darkgreen;
    font-size:1.25rem;
    font-weight:lighter;
}
`;
export{
    Button,
    SearchInput,
    Landing
}