import { Link, useLoaderData, Form, useParams } from "react-router-dom";

export default function Show(props) {
  const aList = useLoaderData();
  const { id } = useParams(); 

  return (
    <div>
      <h1>{aList.title}</h1>
      <h2>{aList.date}</h2>
      <h3>{aList.time}</h3>

      <div>
        <Form action={`/update/${id}/`} method="POST">
        </Form>

        <Form action={`/delete/${id}/`} method="POST">
        </Form>
      </div>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
