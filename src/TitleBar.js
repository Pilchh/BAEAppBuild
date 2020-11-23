import React from "react";
import './index.css';
const { remote } = window.require('electron');
const { BrowserWindow } = remote;

class TitleBar extends React.Component{

    componentDidMount() {
        document.getElementById('min-button').addEventListener("click", event => {
            BrowserWindow.getFocusedWindow().minimize();
        });

        document.getElementById('max-button').addEventListener("click", event => {
            BrowserWindow.getFocusedWindow().maximize();
            toggleMaxRestoreButtons();
        });

        document.getElementById('restore-button').addEventListener("click", event => {
            BrowserWindow.getFocusedWindow().restore();
            toggleMaxRestoreButtons();
        });

        document.getElementById('close-button').addEventListener("click", event => {
            BrowserWindow.getFocusedWindow().close();
        });

        function toggleMaxRestoreButtons() {
            if (BrowserWindow.getFocusedWindow().isMaximized()) {
                document.body.classList.add('maximized');
            } else {
                document.body.classList.remove('maximized');
            }
        }

        function checkResizeButton(){

            if (document.readyState === "complete"){
                if (!BrowserWindow.getFocusedWindow().isMaximized()){
                    document.body.classList.remove('maximized');
                } else if (BrowserWindow.getFocusedWindow().isMaximized()){
                    document.body.classList.add('maximized');
                }
            }


        }

        window.addEventListener("resize", checkResizeButton);

        document.addEventListener("keypress", event => {


            if (event.key === "f" && event.repeat === false) {
                if (remote.getCurrentWindow().fullScreen === true){
                    remote.getCurrentWindow().fullScreen = false;
                    document.body.classList.remove('maximized');

                }
                else {
                    remote.getCurrentWindow().fullScreen = true;
                    document.body.classList.add('maximized');
                }

            }

        });
    }

    render() {


        return (
            <header id="titlebar" className={"visible"}>
                <div id="drag-region">
                    <div id="window-controls">

                        {/* <!-- Minimise Button --> */}

                        <div className="button cursor-pointer" id="min-button">
                            <img className="icon"
                                 draggable="false"
                                 srcSet={"./assets/menuIcons/min-w-10.png 1x, ./assets/menuIcons/min-w-12.png 1.25x, ./assets/menuIcons/min-w-15.png 1.5x, ./assets/menuIcons/min-w-15.png 1.75x, ./assets/menuIcons/min-w-20.png 2x, ./assets/menuIcons/min-w-20.png 2.25x, ./assets/menuIcons/min-w-24.png 2.5x, ./assets/menuIcons/min-w-30.png 3x, ./assets/menuIcons/min-w-30.png 3.5x"}
                                 alt="Minimise Button"/>
                        </div>

                        {/* <!-- Maximise Button --> */}

                        <div className="button cursor-pointer" id="max-button">
                            <img className="icon"
                                 draggable="false"
                                 srcSet={"./assets/menuIcons/max-w-10.png 1x, ./assets/menuIcons/max-w-12.png 1.25x, ./assets/menuIcons/max-w-15.png 1.5x, ./assets/menuIcons/max-w-15.png 1.75x, ./assets/menuIcons/max-w-20.png 2x, ./assets/menuIcons/max-w-20.png 2.25x, ./assets/menuIcons/max-w-24.png 2.5x, ./assets/menuIcons/max-w-30.png 3x, ./assets/menuIcons/max-w-30.png 3.5x"}
                                 alt="Maximise Button"/>
                        </div>

                        {/* <!-- Restore Button --> */}

                        <div className="button cursor-pointer" id="restore-button">
                            <img className="icon"
                                 draggable="false"
                                 srcSet={"./assets/menuIcons/restore-w-10.png 1x, ./assets/menuIcons/restore-w-12.png 1.25x, ./assets/menuIcons/restore-w-15.png 1.5x, ./assets/menuIcons/restore-w-15.png 1.75x, ./assets/menuIcons/restore-w-20.png 2x, ./assets/menuIcons/restore-w-20.png 2.25x, ./assets/menuIcons/restore-w-24.png 2.5x, ./assets/menuIcons/restore-w-30.png 3x, ./assets/menuIcons/restore-w-30.png 3.5x"}
                                 alt="Restore Button"/>
                        </div>

                        {/* <!-- Close Button --> */}
                        <div className="button cursor-pointer" id="close-button">
                            <img className="icon"
                                 draggable="false"
                                 srcSet={"./assets/menuIcons/close-w-10.png 1x, ./assets/menuIcons/close-w-12.png 1.25x, ./assets/menuIcons/close-w-15.png 1.5x, ./assets/menuIcons/close-w-15.png 1.75x, ./assets/menuIcons/close-w-20.png 2x, ./assets/menuIcons/close-w-20.png 2.25x, ./assets/menuIcons/close-w-24.png 2.5x, ./assets/menuIcons/close-w-30.png 3x, ./assets/menuIcons/close-w-30.png 3.5x"}
                                 alt="Close Button"/>
                        </div>

                    </div>

                </div>
            </header>
        );
    }



}

export default TitleBar;