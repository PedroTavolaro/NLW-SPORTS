import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { InfoGame } from './pages/InfoGame';

export function Router() {

       
    return(
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path={`/games/:id/ads`} element={<InfoGame />} />
            {/* /games/:id/ads */}
        </Routes>
        </>
    )
}