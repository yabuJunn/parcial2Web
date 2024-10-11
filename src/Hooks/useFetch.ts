import { useEffect, useState } from "react"
import { simplyFetch } from "../services/fetch"
import { apiBodiesType } from "../types/apiTypes"
import { orderingTypes } from "../types/orderingTypes"

export const useFetch = (url: string) => {
    const [data, setData] = useState<apiBodiesType>()
    //const [orderingData, setOrderingData] = useState<apiBodiesType>()

    //Le paso esta funcion al boton, y el parametro es de la funcion es la string del tipo de ordenamiento
    // const orderData = (orderOption: orderingTypes) => {
    //     if (data) {
    //         switch (orderOption) {
    //             case orderingTypes.mass:
    //                 const orderDataByMass = data.bodies.sort((a, b) => {
    //                     const condition = a.mass.massValue - b.mass.massValue
    //                     return condition
    //                 })
    //                 setOrderingData({ bodies: orderDataByMass })

    //                 break;

    //             default:
    //                 break;
    //         }

    //     }
    // }


    useEffect(() => {
        const wait = async () => {

            const newData = await simplyFetch(url)
            setData(newData)
        }
        wait()
    }, [url])

    return {
        data
    }
}