const URL = import.meta.env.VITE_BASE_URL
console.log(URL)

export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allLists = await response.json()
    return allLists
}

export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}/${params.id}/`)
    const aList = await response.json()
    return aList
}