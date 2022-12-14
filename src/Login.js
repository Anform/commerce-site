import React from 'react';

const Login = (props) => {
    const { 
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        register,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props

    return (
        <section className = "login">
            <div className = "loginContainer">
                <label>Email</label>
                <input
                    type = "text"
                    autoFocus
                    required
                    value={email}
                    onChange = {(event) => setEmail(event.target.value)}>
                </input>
                <p className = "errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type = "password"
                    required
                    value = {password}
                    onChange = {(event) => setPassword(event.target.value)}>
                </input>
                <p className = "errorMsg">{passwordError}</p>
            <div className = "btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick = {handleLogin}>Sign in</button>
                    <p>Don't have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ) : (
                    <>
                    <button onClick = {register}>Sign up</button>
                    <p>Have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
            </div>
        </section>
    )
}

export default Login

