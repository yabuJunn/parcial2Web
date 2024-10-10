export const simplyFetch = async (url: string) => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        return json
    } catch (error) {
        console.log(error)
    }
}