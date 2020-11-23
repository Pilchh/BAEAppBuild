import React from "react";
import '../index.css';
import GridElement from './GridElement';

class HomeGrid extends React.Component{

    render() {
        return (
            <section className="max-size p-8">
                <div className="h-auto w-auto centre-div">

                    <div className="flex justify-between">
                        <div className={"w-1/5 grid-item-height flex flex-col relative"}>
                            <GridElement title="Overview" description="Find out about the apprenticeship scheme." imageName="tempest.jpg" redirectName="overview"/>
                        </div>
                        <div className={"w-1/5 grid-item-height flex flex-col relative"}>
                            <GridElement title="Locations" description="The apprenticeship is hosted at a number of locations." imageName="glasses.jpg" redirectName="locations"/>
                        </div>
                        <div className={"w-1/5 grid-item-height flex flex-col relative"}>
                            <GridElement title="University" description="You will obtain a degree in Software Engineering." imageName="aircraft.jpg" redirectName="university"/>
                        </div>
                        <div className={"w-1/5 grid-item-height flex flex-col relative"}>
                            <GridElement title="Qualifications" description="You will need certain qualifications in order to apply." imageName="australia.jpg" redirectName="qualifications"/>
                        </div>
                    </div>

                    <div className="flex justify-between pt-8">
                        <div className={"w-1/5 grid-item-height flex flex-col relative"} />
                        <div className={"w-1/5 grid-item-height flex flex-col relative"} />
                        <div className={"w-1/5 grid-item-height flex flex-col relative"} />
                        <div className={"w-1/5 grid-item-height flex flex-col relative"} />
                    </div>
                </div>
            </section>
        );
    }



}

export default HomeGrid;