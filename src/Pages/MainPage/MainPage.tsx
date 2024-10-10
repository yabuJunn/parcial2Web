import './MainPage.css'
import { useFetch } from '../../Hooks/useFetch'

export const MainPage = () => {
    console.log("Main")

    const { data } = useFetch('https://api.le-systeme-solaire.net/rest.php/bodies')
    console.log(data)

    return <>
        Main
    </>

}
