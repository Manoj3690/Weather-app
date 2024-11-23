import React from "react"
import Date from "./services/Date"
const Footer = ()=>{
    return (
        <div className="footer-section">
            <p className="copyright-text">Copyright @ {Date}</p>
        </div>
    )
}
export default Footer;