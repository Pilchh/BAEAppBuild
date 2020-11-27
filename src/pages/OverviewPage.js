import React from "react";
import '../index.css';
import TitleBar from "../components/TitleBar";
import BrandingBarPages from "../components/BrandingBarPages";
import PageContent from "../components/PageContent";

class OverviewPage extends React.Component{


    render() {
        return (
            <div>

                <TitleBar />
                <BrandingBarPages />

                <PageContent title={"Overview"} imageOne={"glasses.jpg"} imageTwo={"glasses.jpg"}/>
            </div>

        );
    }



}

export default OverviewPage;