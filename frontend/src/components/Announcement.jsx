import styled from "styled-components"
import{mobile} from "../responsive";
const Container= styled.div`
    height : 30px;
    background-color: teal;
    color:white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 14px;
    font-weight: 500px
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over 5000rs
    </Container>
  )
}

export default Announcement