import './MainPage.css'
import { useFetch } from '../../Hooks/useFetch'
import { BodieCard } from '../../Components/MainPage/BodieCard/BodieCard'

export const MainPage = () => {
    console.log("Main")

    const { data } = useFetch('https://api.le-systeme-solaire.net/rest.php/bodies')
    console.log(data)


    if (data) {
        return <>
            <main className='page' id='MainPage'>
                <h1>Celestial Bodies</h1>
                <div id='BodiesContainer'>
                    {data.bodies.map((bodie) => {
                        return <BodieCard name={bodie.englishName} key={bodie.englishName} density={bodie.density} gravity={bodie.gravity} mass={bodie.mass?.massValue || 0} allData={bodie}></BodieCard>

                    })}
                </div>
            </main>
        </>
    }

    return <>
        <main className='page' id='MainPage'>
            <h1>Celestial Bodies</h1>
            <div id='BodiesContainer'>
                Cargando cuerpos celestes...
            </div>
        </main>
    </>

}
