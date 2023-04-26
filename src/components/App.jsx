import { Routes, Route, Navigate} from 'react-router-dom';
import {Suspense } from 'react';
import { lazy } from 'react';

import Loader  from 'components/Loader/Loader'
import Navigation from 'components/Navigation/Navigation'

const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));


export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
<Routes>

<Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="tweets"  element={<Tweets/>}/>
  </Route>
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

</Suspense>
  );
};








