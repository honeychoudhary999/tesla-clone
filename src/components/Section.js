import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
         <Fade bottom>
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </ItemText>
          
          <Buttons>
          <ButtonGroup>
              <LeftButton>
             {props.leftBtnText}
              </LeftButton>
              {
                props.rightBtnText && <RightButton>
                {props.rightBtnText} 
                </RightButton>
              }
              
          </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
        </Fade>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
display:flex;
flex-direction:column;
width:100vw;
height:100vh;
align-items:center;
justify-content:space-between;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/tesla1.webp');
background-image:${props =>`url("/images/${props.bgImage}")`}
`
const ItemText=styled.div`
padding-top:5vh;
text-align: center;


`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:20px;
@media (max-width:786px){
  flex-direction:column;
}

`
const LeftButton=styled.div`
background-color:rgba(23,36,32,0.8);
height:30px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items: center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`
margin-top:10px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;

`
const Buttons=styled.div``