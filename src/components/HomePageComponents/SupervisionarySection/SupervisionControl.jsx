import "./SupervisionControl.css"
import supervisionImage from '@assets/intro-img.jpeg';

export default function SupervisionControl() {

 
    return (
        <> 
            <section className="supervision-section">
                <div className="container">
                    <div className="supervision-title">
                        <h1>SUPERVISORY CONTROL <span className="hide_sm" >& DATA ACCUSITION SYSTEM</span></h1>
                    </div>
                    <div className="supervision-content">

                        <div className="supervision-image">
                            <img src={supervisionImage} alt="Supervision Image" />
                        </div>

                        <div className="supervision-text">

                        {/* <h1>SUPERVISORY CONTROL & DATA ACCUSITION SYSTEM</h1> */}
                            <p>We have developed standard SCADA applications for a range of processes mentioned above. The detailed reporting and data handling solutions provided by us, which allows the process engineers to optimize the process.
                                PCIPL has designed wide range of projects with SCADA system placed in a single facility or different locations sometimes over a wide geographical area. Maintaining efficiencies, identifying problems as soon as they occur, improved productivity, quality and profitability while keeping costs at a minimum.Our team has versatile experience of working with different platforms of PLC hardware and SCADA software, ranging from Siemens, Allen-Bradley, Delta and Mitsubishi.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
 

        </>
    )
}
