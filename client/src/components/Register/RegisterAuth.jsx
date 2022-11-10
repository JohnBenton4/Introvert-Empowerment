import { Link } from "react-router-dom";

export default function RegisterAuth() {
  return (
    <>
      <h1>Register page</h1>
      <Link to="/login">
        <h1>login</h1>
      </Link>
    </>
  );
}
