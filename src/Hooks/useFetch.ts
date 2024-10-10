import { useEffect, useState } from "react"
import { simplyFetch } from "../services/fetch"
import { apiBodiesType } from "../types/apiTypes"

export const useFetch = (url: string) => {
    const [data, setData] = useState<apiBodiesType>()

    useEffect(() => {
        const wait = async () => {
            console.log("Wait")
            const newData = await simplyFetch(url)
            setData(newData)
        }
        wait()
    }, [url])

    return {
        data
    }
}