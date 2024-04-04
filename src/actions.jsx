import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL


export const createAction = async ({request}) => {
    
    const formData = await request.formData()

    
    const newList = {
        title: formData.get("title"),
        date: formData.get("date"),
        time: formData.get("time"),
    }

    
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newList)
    })

    
    return redirect("/")
}


export const deleteAction = async ({params}) => {
    
    const id = params.id
    
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    
    return redirect("/")
}


export const updateAction = async ({request, params}) => {
    
    const formData = await request.formData()
    
    const id = params.id
    
    const updatedList = {
        title: formData.get("title"),
        date: formData.get("date"),
        time: formData.get("time"),
    }
    
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedList)
    })
    
    return redirect(`/list/${id}`)
}