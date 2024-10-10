import { useEffect, useState } from "react"
import { simplyFetch } from "../services/fetch"

export const useFetch = (url: string) => {
    const [data, setData] = useState({})

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