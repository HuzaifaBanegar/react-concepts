import "../../index.css"
export const Footer=()=>{
    return(
        <div className="footer">
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="subscription">
                <h5>Subscibe to our News Letter</h5>
                <input type="email"></input>
                <button>Subscibe</button>
            </div>
            <div className="copyright">
                <h5>© CopyRights by Huzaifa 😉</h5>
                <p>Contact: banegarhuzzi1010@gmail.com</p>
            </div>
        </div>
    )
}