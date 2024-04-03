import List from "../components/List"
import { useLoaderData } from "react-router-dom"


export default function Index(props) {
    const allLists = useLoaderData()
    return (
        <>
            <h1>Index</h1>
            {allLists.map((list, i) => <List list={list} key={i}/>)}
        </>
    )
}