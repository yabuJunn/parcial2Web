import './MainPage.css'
import { useFetch } from '../../Hooks/useFetch'

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
                        return bodie.englishName

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
