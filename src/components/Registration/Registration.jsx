import '../../App.css';
function Registration() {
    return (
        <div className="Registration">
            <div className="App-register">
                <div className="reg-container">
                    <div className="content-div">
                        <div className="reg-title">
                            <span><b>Sign in</b></span>
                        </div>
                        <div className="reg-email">
                            <span><b>Email</b></span>
                            <input/>
                        </div>
                        <div className="reg-password">
                            <span><b>Password</b></span>
                            <input/>
                        </div>
                        <div className="reg-help-buttons">
                            <div className="remember-me">
                                <input type={"checkbox"}/>
                                <span>Remember me</span>
                            </div>
                            <div className="forgot-password">
                                <span>Forgot Password ?</span>
                            </div>
                        </div>
                        <div className="reg-sign-in-button">
                            <h3>Sign in</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;