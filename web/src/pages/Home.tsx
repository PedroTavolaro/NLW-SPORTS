import { GameBanner } from '../components/GameBanner';
import { CreateAdBanner } from '../components/CreateAdBanner';
import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdModal } from '../components/CreateAdModal';

import axios from 'axios';

export interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

export function Home() {

    const [ games, setGames ] = useState<Game[]>([])
    
    
    useEffect(() => {
        axios('http://localhost:3333/games')
        .then(response => {
            setGames(response.data)
        })
    }, [])
   
    // useEffect(() => {
    //     axios(`http://localhost:3333/games/${games.id}/ads`)
    //     .then(response => {
    //         console.log(response.data)
    //     })
    // }, [])
    // useEffect(() => {
    //     fetch(`http://192.168.1.10:3333/games/${games.id}/ads`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //   }, []);


    return(
        
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        

        <h1 className='text-6xl text-white font-black mt-20'>
            Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
        </h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>

            {games.map(game => {
                return(
                    <GameBanner 
                    key={game.id}
                    id={game.id}
                    title={game.title} 
                     bannerUrl={game.bannerUrl}
                     adsCount={game._count.ads} 
                     />
                )
            })}

           
           
        </div>

            <Dialog.Root>
            <CreateAdBanner />

            <CreateAdModal />
            </Dialog.Root>
        
    </div>
    )

}
