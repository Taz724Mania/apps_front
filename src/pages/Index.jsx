import List from "../components/List"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allLists = useLoaderData()

    return (
        <>
            <h1>Add an Appointment</h1>
            <Form>
                <label htmlFor="title">
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="date">
                    <input type="text" name="date" id="date" />
                </label>
                <label htmlFor="time">
                    <input type="text" name="time" id="time" />
                </label>
                <button>Add a New Appointment</button>
            </Form>
            <hr />
            {allLists.map((list, i) => <List list={list} key={i}/>)}
        </>
    )
}