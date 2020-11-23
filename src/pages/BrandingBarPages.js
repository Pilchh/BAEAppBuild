import React from "react";
import '../index.css';
import {Link} from "react-router-dom";

const BrandingBarPages = () =>{
    return (
        <header>

            <div className="w-screen h-20 bae-header-grey header-bar" id={"header-bar"}>

                <div className="flex flex-row p-5 header-bar-container justify-center">
                    <div className="px-4 left-0 absolute h-10 w-auto">
                        <Link to={`/`}>
                            <button className="back-button px-2 py-1 select-none max-w-full">
                                    Go Back
                            </button>
                        </Link>
                    </div>
                    <img alt="BAE Systems Logo" className="w-auto h-10 select-none" src={"./assets/companyImages/logo_baesystems_borderless.svg"}/>
                </div>

            </div>
        </header>
    );
}

export default BrandingBarPages;