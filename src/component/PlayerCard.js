import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

width:70%;
margin:0 auto;
padding:20px;
box-shadow:3px 3px #ababab;

p{
    font-size:1.3rem;
    font-weight:600;
}

`
const Name = styled.h3`
font-size:2rem;
font-weight:bold;`

const Details = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);

`;

const Label = styled.span`
font-weight:500;
font-size:1rem;
`;
export default function PlayerCard(props) {
    // destructuring the props
   const {fname,lname,country,club,shirtNo,assist,yellow,red,starts,goals,age,} = props.player
    return (
        <Container>
            
        <Name className="name"><Label>Name: </Label>{`${fname} ${lname}`}</Name>
            <Details>
                <p className="country"><Label>Country: </Label>{country}</p>
                <p className="club"><Label>Club: </Label>{club}</p>
                <p className="age"><Label>Age: </Label>{age}</p>
                <p className="goals"><Label>Goals: </Label>{goals}</p>
                <p className="assist"><Label>Assists: </Label>{assist}</p>
                <p className="starts"><Label>Starts: </Label>{starts}</p>
                <p className="shirt"><Label>Shirt No: </Label>{shirtNo}</p>
                <p className="yellow"><Label>Yellow Recieved: </Label>{yellow}</p>
                <p className="red"><Label>Red Recieved: </Label>{red}</p>
            </Details>
        </Container>
    )
}
