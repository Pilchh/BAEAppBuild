import React from "react";
import '../index.css';
import TitleBar from "../components/TitleBar";
import BrandingBarPages from "../components/BrandingBarPages";

class UniversityPage extends React.Component{

    render() {
        return (
            <div className="h-full w-full">

                <TitleBar />
                <BrandingBarPages />

            </div>
        );
    }



}

export default UniversityPage;