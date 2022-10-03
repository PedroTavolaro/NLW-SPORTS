
import '../styles/components/DuoInfo.css';


export interface Props {
    label: string,
    value: string, 
}

export function DuoInfo({label, value} : Props){
    return(
        <div className="infoCard">
            <strong className="label">
                {label}
            </strong>
            <span className='value'>
                {value}
            </span>

        </div>
    )
}