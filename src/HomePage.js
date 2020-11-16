import React from "react";
import './index.css';
import TitleBar from "./TitleBar";
import BrandingBarMain from "./BrandingBarMain";
import HomeGrid from "./HomeGrid";

class HomePage extends React.Component{

    render() {

        console.log("home");

        return (
            <div className="h-full w-full">
                <TitleBar />
                <BrandingBarMain />

                <HomeGrid />
            </div>
        );
    }



}

export default HomePage;