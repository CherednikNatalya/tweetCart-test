import { Container, Header, Link} from './Novigation.styled';
import React from 'react';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from 'components/Loader/Loader'

 const Navigation = () => {
  return (
    <Container>
     <Header>
        <div>
          <Link to="">Home</Link>
          <Link to="tweets">Tweets</Link> 
        </div>
      </Header>
      <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
    </Container>
  );
};
export default  Navigation