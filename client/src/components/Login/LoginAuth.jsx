import { Link } from "react-router-dom";

export default function LoginAuth() {
    return (
        <>
        <h1>Login comp</h1>
        <Link to="/register">
            <h1>Register</h1>
        </Link>
        </>
    )
}