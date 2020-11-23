import React from "react";
import '../index.css';
import TitleBar from "../components/TitleBar";
import BrandingBarMain from "../components/BrandingBarMain";
import HomeGrid from "../components/HomeGrid";

class HomePage extends React.Component{

    render() {

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