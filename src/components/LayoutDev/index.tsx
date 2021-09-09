import "./styles.css";

function LayoutDev() {
    return (
        
        <div className="dds__layoutDev">
            <div>
                <div className="dds__layoutDev-h1">
                    <h1 className="dds__h1">Coverage Download</h1>
                </div>
                <div className="dds__layoutDev-h3">
                    <h3 className="dds__h3">LOCATION INFORMATION</h3>
                </div>
                <div className="dds__layoutDev-locationInformation">
                    <div className="dds__locationInformation-info">
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Business Unit <span className="dds__lable-span">*</span></label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Country <span className="dds__lable-span">*</span></label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">State</label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                    </div>
                    <div className="dds__locationInformation-info">
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">City</label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Postcode</label>
                            <input placeholder="Enter postcode" type="text" className="dds__inputMock-postcode" />
                        </div>
                    </div>
                </div>
                <div className="dds__layoutDev-h3">
                    <h3 className="dds__h3">SERVICE INFORMATION</h3>
                </div>
                <div className="dds__layoutDev-locationInformation">
                    <div className="dds__locationInformation-info">
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Service Level <span className="dds__lable-span">*</span></label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Service Type <span className="dds__lable-span">*</span></label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Period</label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                    </div>
                    <div className="dds__locationInformation-info">
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Note Type</label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">Note Name</label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                        <div className="dds__info-labelSelect">
                            <label className="dds__mock-label">LOB</label>
                            <input type="text" className="dds__inputMock" />
                        </div>
                    </div>
                </div>
                <div className="dds__checkbox-area">
                    <div className="dds__checkbox-availableOptions">
                        <span className="dds__checkbox-available">Available</span>
                        <div className="dds__checkbox-options">
                            <div className="dds__checkbox-services">
                                <input id="availableForService" className="dds__checkbox" type="checkbox"/>
                                <label htmlFor="availableForService" className="dds__checkbox-label" >Available for services</label>
                            </div>
                            <div className="dds__checkbox-services">
                                <input id="availableForSales" className="dds__checkbox" type="checkbox"/>
                                <label htmlFor="availableForSales" className="dds__checkbox-label">Available for sales</label>
                            </div>
                        </div>
                    </div>
                    <div className="dds__checkbox-availableOptions">
                        <span className="dds__checkbox-available">Display Level</span>
                        <div className="dds__checkbox-options">
                            <div className="dds__checkbox-services">
                                <input id="displayLowerLevel" className="dds__checkbox" type="checkbox"/>
                                <label htmlFor="displayLowerLevel" className="dds__checkbox-label" >Display lower level coverage</label>
                            </div>
                            <div className="dds__checkbox-services">
                                <input id="displayUpperLevel" className="dds__checkbox" type="checkbox"/>
                                <label htmlFor="displayUpperLevel" className="dds__checkbox-label">Display upper level coverage</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutDev;
