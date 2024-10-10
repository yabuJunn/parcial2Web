import { useNavigate } from 'react-router-dom'
import './BodieCard.css'
import { bodieType } from '../../../types/apiTypes'

interface BodieCardProps {
    name: string,
    density: number,
    gravity: number,
    mass: number,
    allData: bodieType
}

export const BodieCard = ({ name, density, gravity, mass, allData }: BodieCardProps) => {

    const navigation = useNavigate()

    return <>
        <div className="BodieCardContainer" onClick={() => {
            navigation('/detail', {
                state: allData
            })
        }}>
            <h1>{name}</h1>
            <p>Density: {density}</p>
            <p>Gravity: {gravity}</p>
            <p>Mass: {mass}</p>
        </div>
    </>
}