import './register.scss'

export const Register = () => {
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
            <div className="input">
                <input type="email" placeholder='Enter your e-mail address here' />
                <button className='registerButton'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
