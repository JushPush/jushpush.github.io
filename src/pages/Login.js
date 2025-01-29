import { Button, Container } from "react-bootstrap";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function Login({setIsAuth, setAuthUser}) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) =>{
            localStorage.setItem("isAuth", true);
            localStorage.setItem("authUser", auth.currentUser.uid);
            setIsAuth(true);
            setAuthUser(auth.currentUser.uid);
            window.location.pathname = "/";
        });
    }

    return(
    <Container fluid>
        <h1>Login</h1>
        <Button onClick={signInWithGoogle}>Login With Google</Button>
    </Container>);
}