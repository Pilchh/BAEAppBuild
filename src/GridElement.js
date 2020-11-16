import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'


const GridElement = props => {
    return(
        <div className="w-full" style={{height: "75%"}}>
            <div className="flex bg-image h-full mx-8" style={{backgroundImage: `url('./assets/companyImages/${props.imageName}')`}}/>

            <div className="flex grid-item-text-container z-10 flex-col">
                <div className="text-box-line"/>
                <div className="flex flex-col">

                    <h1 className="bae-text-grey-1 text-box-header font-tahoma select-none">{props.title}</h1>
                    <p className="bae-text-grey-1 font-tahoma text-box-subheader px-6 select-none">{props.description}</p>

                    <div className="px-4 py-2 mx-auto">
                        <Link to={`/${props.redirectName}`}>
                            <button className="grid-button px-2 py-1 select-none">
                                Learn more
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default GridElement;