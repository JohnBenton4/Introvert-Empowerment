// import { useState } from 'react';
import { Link } from "react-router-dom";
// import userServuce from '.../.../services/userService';



// function Login({ onSetLoggedIn, onSetUserId }) {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setCredentials({ ...credentials, [name]: value });
//     };

//     const submit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await userService.logIn(credentials);
//             const { message, token, userId } = await response.json();

//             if (message === 'success') {
//                 localStorage.setItem('token', token);
//                 onSetIsLoggedIn(true);
//                 onSetUserId(userId);
//                 navigate(`/`);
//             }
//         } catch {
//         }
//     };
// }

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