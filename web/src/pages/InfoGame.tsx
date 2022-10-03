
import { Item } from '@radix-ui/react-toggle-group';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DuoCard } from '../components/DuoCard';
import '../styles/infoGame.css';


export function InfoGame(){
  
    const [ infoGame, setInfoGame ] = useState([])
    const [discordDuoSelected, setDiscordDuoSelected ] = useState('')
    
    return(
    <div className='master'>
        <div className='cards'>
        <DuoCard
            />
        </div>
    </div>
    )
}