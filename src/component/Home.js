import React, {useState} from 'react';
import Search from './Search'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import {Button,SearchInput,Landing} from './styles'

const Container =styled.div`
width:700px;
height:100vh;
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;

.bottom{
  align-self:flex-end;
  color:green;
}
`;

function Home(props) {
  // using hooks for taking the query value
    const [query,setQuery] = useState("")
  return (
   <Container>
    <Landing>
    <h2 className="header">Player Bio</h2>
    <p className="subHeader">Get The Details of Your Favourite Player.</p>
<SearchInput value={query} placeholder="Kindly enter Player Name(either first or last name)"onChange={(e) =>{setQuery(e.target.value)}}/>
 <Button onClick={() =>{
  //  Here the query is been passed to the url.
  // it is passed as query string
  // with a key of query
         props.history.push(`/search?query=${query}`)
 }}> 
 Search
 </Button>
    </Landing> 
    <p className="bottom">Available Players in the db: Cristiano Ronaldo,Lionel Messi, Paul Pogba,Marcus Rashford</p>
   </Container>
  );
}

export default withRouter(Home);
