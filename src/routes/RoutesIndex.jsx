import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

const RoutesIndex = () => {
    const location = useLocation();
    const { handleRoutesLoading } = useLoading();

    useEffect(() => {
      handleRoutesLoading();
    }, [location]);
  
    return (
      <Routes>
        <Route path='/' element={<div className='mt-[4.5rem]'>
          <Home/>
        </div>} />
        <Route path='/catalog/:category?' element={
          <div className='mt-[4.5rem]'>
          <Catalog/>
        </div>} />
      </Routes>
    );
  };

export default RoutesIndex;