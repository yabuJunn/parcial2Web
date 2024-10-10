import './App.css'
import { useFetch } from './Hooks/useFetch'

function App() {
  console.log("Main")

  const { data } = useFetch('https://api.le-systeme-solaire.net/rest.php/bodies')
  console.log(data)

  return <>
    Main
  </>

}

export default App
