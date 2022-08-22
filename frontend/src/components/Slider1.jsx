import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    width :100%;
    height : 100vh;
    display : flex;
    position : relative;
    overflow : hidden;
    
`
const Arrow = styled.div`
    width : 50px;
    height : 50px;
    background-color: #fff7f7;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute;
    top : 0;
    bottom : 0;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor : pointer;
    opacity : 0.5;
`  
const Slide   = styled.div`
width : 100vw;
height : 80vh;
display : flex;
align-items : center;
justify-content : center;
flex : 1;
background-color : #fbf0f4;
// background-color : {props=>props.bg};
`;

const Wrapper = styled.div`
height : 100%;
display : flex;
transition : all 1.5s ease;
transform : translateX(${(props)=>props.slideIndex *-100}vw);

`


const ImageContainer    = styled.div`
    flex : 1;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    `

const Image = styled.img`
height :80%;

`
const InfoContainer   = styled.div`
flex : 1;`

const Title = styled.h1`
`
const Desc = styled.p`
    margin : 50px 0px;
    font-size : 20px;
    font-weight : 500;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding : 10px;
    font-size : 20px;
    background-color : transparent;
    cursor : pointer;

`
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === "right"){
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
        else {
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }
    };
  return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <Slide bg = "f5faf3">
            <ImageContainer>
            <Image src="/images/fiction2.jpg" alt= "no image"/>
            
            </ImageContainer>
            <InfoContainer>
                <Title>SUMMER SALE1 </Title>
                <Desc> DON'T COMPRIMISE ON STYLE ! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                <Button> Shop Now </Button>

            </InfoContainer>
            </Slide>
            <Slide bg = "fcf1ed">
            <ImageContainer>
            <Image src="/images/fiction2.jpg" alt= "no image"/>
            
            </ImageContainer>
            <InfoContainer>
                <Title>SUMMER SALE2 </Title>
                <Desc> DON'T COMPRIMISE ON STYLE ! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                <Button> Shop Now </Button>

            </InfoContainer>
            </Slide>
            <Slide bg = "fbf0f4">
            <ImageContainer>
            <Image src="/images/fiction2.jpg" alt= "no image"/>
            
            </ImageContainer>
            <InfoContainer>
                <Title>SUMMER SALE3 </Title>
                <Desc> DON'T COMPRIMISE ON STYLE ! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                <Button> Shop Now </Button>

            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider