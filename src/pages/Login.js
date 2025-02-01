import { Button, Container } from "react-bootstrap";
import { auth, provider, firebaseConfig } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useEffect } from "react";
import GoogleButton from "react-google-button";

export default function Login({setIsAuth, setAuthUser}) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) =>{
            localStorage.setItem("isAuth", true);
            localStorage.setItem("authUser", auth.currentUser.uid);
            setIsAuth(true);
            setAuthUser(auth.currentUser.uid);
            navigate('/');
        });
    }

    return(
    <Container fluid>
        <h1 className="border-bottom">Login</h1>
        <br></br>
        <GoogleButton style={{backgroundColor:"black"}} onClick={signInWithGoogle} type="dark" />
    </Container>);
}