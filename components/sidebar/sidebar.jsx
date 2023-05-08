import { Form } from "react-router-dom";

export default Sidebar => {
    return (
        <div id="sidebar">
            <h1>Featurephile</h1>
            <Form>
                <button type="submit">New Feature!</button>
            </Form>
            <ul>
                <li><a>Link!</a></li>
            </ul>
        </div>
    )
}