import './styles/main.css'
import logoImg from './assets/Logo.svg';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdModal } from './components/CreateAdModal';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

function App() {

    // const [ games, setGames ] = useState<Game[]>([])
    
    // useEffect(() => {
    //     axios('http://localhost:3333/games')
    //     .then(response => {
    //         setGames(response.data)
    //     })
        
    // }, [])
    

 return (
    <div>
    <BrowserRouter>
    <Router />  
  </BrowserRouter> 
  </div>
 )
}

export default App
