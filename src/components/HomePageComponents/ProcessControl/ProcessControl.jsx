import "./ProcessControl.css";
import processControlImage from '@assets/intro-img.jpeg';


export default function ProcessControl() {
    return (
        <>  
            <section className="processControl-section">
                <div className="container">
                    <div className="processControl-title">
                        <h1>PROCESS INSTRUMENTATION</h1>
                    </div>
                    <div className="processControl-content">

                        <div className="processControl-text">
                            <p>For the past 25 years PACIFIC CONTROL has been working as a pivotal organization in design & development, Erection and commissioning of wide range of Field Instruments.
                                With a wide range of experience in instrumentation, PCIPL has worked as consultant, designer, and supplier for instruments in various industries.
                            </p>
                        </div>

                        <div className="processControl-items">

                            <div className="processControl-image">
                                <img src={processControlImage} alt="Supervision Image" />
                            </div>

                            <div className="processControl-points">
 
                                <ul>
                                    <li className="f30" >PRODUCT RANGE </li>
                                    <ul>
                                        <li>Flow Measurement</li>
                                        <li>Level Measurement</li>
                                        <li>Pressure Measurement</li>
                                        <li>Temperature Measurement</li>
                                        <li>Oxygen & Co/Co2 Analyzers.</li>
                                        <li>pH Analyzers.</li>
                                        <li>Load Cells and Weight Measurement.</li>
                                    </ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
