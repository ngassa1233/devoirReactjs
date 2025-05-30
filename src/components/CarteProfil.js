import React from "react";
import './CarteProfil.css'
const CarteProfil = () => {
    return(
        <div className="carte-profil">
            <img src="vanou.jpg" alt="profil" className="photo-profil"></img>
            <h2>VANELLE</h2>
            <p className="track">DESIGN TRACK</p>
            <p className="description"> i cose the Product Design Track because i aspire to be a UX Designer- the psychology behind every Product
                that makes that product a success 
            </p>
            <div className="icones">
                <img src="linkedin.png" alt="Linkedin"></img>
                <img src="instagram.png" alt="Instagram"></img>
                <img src="twitter.png" alt="Twitter"></img>
            </div>
        </div>
    );
};
export default CarteProfil;