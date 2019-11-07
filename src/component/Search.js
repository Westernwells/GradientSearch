import React,{useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'
import PlayerCard from './PlayerCard'
import {players} from '../data/seed'
import styled from 'styled-components'
import {Button,SearchInput, Landing} from './styles'

// Using styled componeents here
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;


function Search(props) {

    // Here using queryString to get Query from the url
    // it was parse to get what is in the query
    const value = queryString.parse(props.location.search)
    // search query variable
    const searchQuery= value.query;

    // The query string
    const [query,setQuery] = useState(titleCase(searchQuery))

    // query result Hooks
    const [queryResult, setResult] = useState([])

    // using the effect to run the search on component
    useEffect(()=> onSearch(),[])


    //Just setting every input to title case
    function titleCase(str) { 
        return str.toLowerCase().split(' ').map(function(word) { 
          return (word.charAt(0).toUpperCase() + word.slice(1)); 
        }).join(' '); 
      } 


      //The onchange listener for changing query value
     const onChange = async (e)=>{
     //    Am seeting the query here using hooks
             setQuery(titleCase(e.target.value))
     }

     //creating a variable which is going to be 
    //  conditionally rendered.
    let View;

    //checking if there is query
    if(queryResult ===""||searchQuery==="")return 
    // if queryResult or searchQuery is empty it renders
     View = <p>Kindly Enter a search query</p>

    //  checking if QueryResult is not empty or undefined
     if(!queryResult==="" || queryResult !==undefined){
        //  rending a our View for the search Results
        // mapping through  query result
        View =  queryResult.map(player =>{
             return(
                //  rendering the PlayerCard component
                 <PlayerCard player={player} />
             )
         })
     }
     
    //  creating the search functionality
    const onSearch =()=>{
        let px =  players.filter(function(player) {
            return player.fname == query || player.lname == query;
        });
        // setting the query result
        setResult(px)
    }
    return (
        <Container>
        <Landing>
        <h3 className="header">Search For Player Profile</h3>
        <SearchInput placeholder="Kindly enter Player Name(either first or last name)" name="searchField" value={query} onChange={onChange}/>
        <Button onClick={onSearch}>Search</Button>
        </Landing>
        {View}
        </Container>
    )
}
export default withRouter(Search)


