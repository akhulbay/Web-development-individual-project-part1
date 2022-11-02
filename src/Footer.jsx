import './App.css';
function Footer() {
    return (
        <div className="Footer">
            <div className="App-footer">
                <div className="logo">
                    <img src={"logo2.png"}/>
                </div>
                <div className="title">
                    <p>All rights are reserved. &copy; <span>Kino+</span></p>
                </div>
                <div className="social-media">
                    <span>Social media</span>
                    <ul className={"social-media-list"}>
                        <li><img src={"twitter.png"}/></li>
                        <li><img src={"inst.png"}/></li>
                        <li><img src={"vk.png"}/></li>
                        <li><img src={"facebook.png"}/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;