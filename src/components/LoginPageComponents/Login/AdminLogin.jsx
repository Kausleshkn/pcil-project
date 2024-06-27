import './AdminLogin.css'

export default function AdminLogin() {

    return (
        <div className="login-container">
            <form className="login-form">

                <h2>Welcome to PACIFIC! 👋</h2>
                <p>Please sign-in to your account and start the adventure</p>

                <div className="form-control">
                    <label>Email or Username</label>
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        required
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                         placeholder='Enter Your Password'
                        required
                    />
                </div>
                <div className="form-control form-checkbox">
                    <input
                        type="checkbox"
                        id="rememberMe"   
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
