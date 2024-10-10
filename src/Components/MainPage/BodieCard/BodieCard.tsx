import './BodieCard.css'

interface BodieCardProps {
    name: string,
    density: number,
    gravity: number,
    mass: number
}

export const BodieCard = ({ name, density, gravity, mass }: BodieCardProps) => {

    return <>
        <div className="BodieCardContainer">
            <h1>{name}</h1>
            <p>Density: {density}</p>
            <p>Gravity: {gravity}</p>
            <p>Mass: {mass}</p>
        </div>
    </>
}