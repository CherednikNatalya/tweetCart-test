import {Title, Container } from './Home.styled'
import { NavLink } from 'react-router-dom';

const Home = () =>{

return (
   <Container>
   
   <Title>
     Let's go to <NavLink to='/tweets'>Tweets</NavLink> 
   </Title>
 </Container>
)
}

export default Home