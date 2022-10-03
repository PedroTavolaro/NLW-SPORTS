import { DuoInfo } from "./DuoInfo";
import '../styles/components/DuoCard.css';
import { useEffect, useState } from "react";
import axios from "axios";


interface InfoGame {
  id: string;
  hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number,
}


export function DuoCard() {
  const [infoGame, setInfoGame] = useState<InfoGame[]>([])


  useEffect(() => {
    fetch(`http://192.168.1.10:3333/games/4c187e2c-ee7a-47c9-a59e-dfca0a07cd16/ads`)
    .then(response => response.json())
    .then(data => setInfoGame(data))
  }, []);

    return(
      <>
        <div className="flex">
         {infoGame.map(info => {
            return(

          <div className="container">
              <div className="info">
              <strong className="titleInfo">Nome</strong>
              <span className="infoCard">{`${info.name}`}</span>
          </div>
            
            <div className="info">
            <strong className="titleInfo">Tempo de jogo</strong>
              <span className="infoCard">{`${info.yearsPlaying}`}</span>
            </div>
           
           <div className="info">
              <strong className="titleInfo">Disponibilidade</strong>
              <span className="infoCard">{`${info.weekDays} dias º ${info.hourStart} ás ${info.hourEnd}`}</span>
           </div>
           
           <div className="info">
              <strong className="titleInfo">Chamada de aúdio ?</strong>
              <span className="infoCard">{`${info.useVoiceChannel}`}</span>
           </div>

           <button className="buttonCard justify-center w-full"> <a>Conectar</a></button>
           </div>

            )
         })}         
       </div>

       
       </>

    )
}