import React from "react";
import './index.css';
import TitleBar from "./TitleBar";
import BrandingBarPages from "./BrandingBarPages";

class OverviewPage extends React.Component{


    render() {
        return (
            <div className="h-full w-full">

                <TitleBar />
                <BrandingBarPages />

            </div>
        );
    }



}

export default OverviewPage;