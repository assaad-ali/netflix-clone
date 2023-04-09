import { useRef, useState} from 'react'
import './register.scss'

export const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleRegister = ()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish = ()=>{
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="logo"
                className="logo"
            />
            <button className="loginButton">Sign In</button>
        </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create new account or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                <input type="email" placeholder='Enter your e-mail address here' ref={emailRef}/>
                <button className='registerButton' onClick={handleRegister}>Get Started</button>
            </div>
            ) : (
            <div className="input">
            <input type="password" placeholder='Enter your password here' ref={passwordRef}/>
            <button className='registerButton' onClick={handleFinish}>Start Membership</button>
        </div>
        )}
            
        </div>
    </div>
  )
}
