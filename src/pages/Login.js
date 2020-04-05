import React, {Component} from 'react';
import InputForm from "../component/InputForm/InputForm";
import styles from "./style.css"


function LoginWindow(props) {
    return (
        <InputForm password login/>
    );
}

class Login extends Component {
    render() {
        return (
            <LoginWindow/>
        );
    }
}

export default Login;