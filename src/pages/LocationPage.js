import React from "react";
import '../index.css';
import TitleBar from "../components/TitleBar";
import BrandingBarPages from "../components/BrandingBarPages";
import PageContent from "../components/PageContent";

class LocationPage extends React.Component{

    render() {
        return (
            <div className="h-full w-full">

                <TitleBar />
                <BrandingBarPages />

                <PageContent title={"Locations"} imageOne={"glasses.jpg"} imageTwo={"glasses.jpg"}/>
            </div>
        );
    }



}

export default LocationPage;