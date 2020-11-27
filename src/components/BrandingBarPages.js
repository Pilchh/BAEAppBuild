import React from "react";
import '../index.css';
import {Link} from "react-router-dom";

const BrandingBarPages = props =>{
    return (
        <header>

            <div className="w-screen h-24 bae-header-grey header-bar" id={"header-bar"}>
                <div className="flex flex-row p-5 header-bar-container">
                    <div className="flex px-6 left-0 absolute h-10">
                        <Link to={`/`}>
                            <button className="back-button px-2 py-1 select-none max-w-full">
                                    Go Back
                            </button>
                        </Link>
                    </div>
                    <img alt="BAE Systems Logo" className="flex h-10 select-none ml-32" src={"./assets/companyImages/logo_baesystems_borderless.svg"}/>
                </div>

            </div>
        </header>
    );
}

export default BrandingBarPages;