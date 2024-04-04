import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aList = useLoaderData()

    
    const id = aList?.url.split("/")[4]
    return (
        <div>
            <h1>{aList.title}</h1>
            <h2>{aList.date}</h2>
            <h3>{aList.time}</h3>

            <div>
                
                <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="title">
                        Rename the Appointment
                        <input type="text" id="title" name="title" defaultValue={aList.title}/>
                    </label>
                    
                    <label htmlFor="date">
                        What day is the Appointment?
                        <input type="text" id="date" name="date" defaultValue={aList.date}/>
                    </label>
                    <label htmlFor="time">
                        What time is the Appointment?
                        <input type="text" id="time" name="time" defaultValue={aList.time}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>Update your Appointment</button>
                </Form>

                
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Delete the Appointment</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}