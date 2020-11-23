import React from "react";
import '../index.css';



const BrandingBarMain = () =>{
    return (
        <header>

            <div className="w-screen h-20 bae-header-grey header-bar" id={"header-bar"}>

                <div className="flex flex-row p-5 header-bar-container">
                    <img alt="BAE Systems Logo" className="w-auto h-10 select-none" src={"./assets/companyImages/logo_baesystems_borderless.svg"}/>
                    <h1 className="bae-slogan-text pl-5 select-none">Trusted, Innovative, Bold</h1>
                    <h1 className="absolute bae-header-text-2 right-0 pr-5 select-none">Software Engineering Degree Apprenticeship</h1>
                </div>

            </div>
        </header>
    );
}

export default BrandingBarMain;