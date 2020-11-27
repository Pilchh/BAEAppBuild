import React from "react";
import '../index.css';
import '../overview.css'

const PageContent = props => {
    return(
        <section className="body-max-size">
            <div className="flex flex-row">
                <div className="bae-style-square mt-auto mb-auto"/>
                <h1 className="bae-text-grey-1 font-tahoma select-none responsive-title mt-auto mb-auto pl-3">{props.title}</h1>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col pt-3 w-1/3">
                    <h1 className="bae-text-grey-1 font-tahoma select-none responsive-header">HEADER 1</h1>
                    <p className="bae-text-grey-1 font-tahoma select-none pb-4 responsive-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero quis dui consectetur gravida. Aliquam ultricies nunc vitae dui sollicitudin, sed pellentesque tortor consequat. Quisque viverra nisl urna, id faucibus metus eleifend sed. Morbi molestie, metus id rutrum condimentum, velit ex posuere turpis, laoreet pellentesque nulla justo in erat. Morbi hendrerit tortor eu egestas rutrum. Phasellus vel orci purus. Vivamus cursus viverra hendrerit.
                    </p>
                    <p className="bae-text-grey-1 font-tahoma select-none responsive-body">
                        Proin cursus felis eros, id vehicula tellus fringilla id. Ut at tempus neque. Etiam nec lorem vitae eros dapibus ullamcorper vel quis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>

                <div className="flex flex-col w-2/3">
                    <div className="flex flex-row">
                        <img className="page-image select-none" src={`./assets/companyImages/${props.imageOne}`}/>
                        <img className="page-image select-none" src={`./assets/companyImages/${props.imageTwo}`}/>
                    </div>
                    <div className="flex flex-col pl-12">
                        <h1 className="bae-text-grey-1 font-tahoma select-none responsive-header">HEADER 1</h1>
                        <p className="bae-text-grey-1 font-tahoma select-none pb-4 responsive-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel libero quis dui consectetur gravida. Aliquam ultricies nunc vitae dui sollicitudin, sed pellentesque tortor consequat. Quisque viverra nisl urna, id faucibus metus eleifend sed. Morbi molestie, metus id rutrum condimentum, velit ex posuere turpis, laoreet pellentesque nulla justo in erat. Morbi hendrerit tortor eu egestas rutrum. Phasellus vel orci purus. Vivamus cursus viverra hendrerit.
                        </p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default PageContent;