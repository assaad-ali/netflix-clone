import './login.scss'

export const Login = () => {


  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="logo"
                className="logo"
            />

        </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or phone number' />
                <input type="password" Placeholder='password' />
                <button>Sign In</button>
                <span>New to Netflix? <a href="">Sign up now</a></span>
                <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more</a>.
                </small>
            </form>
        </div>
    </div>
  )
}
