import { Link } from "react-router-dom"

export default function List({ list }) {

    const id = list.url.split('/')[4]
    
    return (
        <div>
            <Link to={`/list/${list.id}`}>
                <h1>{list.title}</h1>
            </Link>
        </div>
    )
}