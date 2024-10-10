import { useLocation } from 'react-router-dom'
import './DetailPage.css'
import { bodieType } from '../../types/apiTypes'

export const DetailPage = () => {
    const location = useLocation()
    const data: bodieType = location.state

    return <>
        <main className='page' id='DetailPage'>
            <h1>{data.englishName}</h1>
            <p>Density: {data.density}</p>
            <p>Gravity: {data.gravity}</p>
            <p>Mass: {data.mass.massValue || 0}</p>
        </main>
    </>
}