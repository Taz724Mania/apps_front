import { Link, useLoaderData } from "react-router-dom"

export default function Show(props) {

    const aList = useLoaderData()
    return (
        <div>
            <h1>{aList.tile}</h1>
            <h2>{aList.date}</h2>
            <h3>{aList.time}</h3>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}