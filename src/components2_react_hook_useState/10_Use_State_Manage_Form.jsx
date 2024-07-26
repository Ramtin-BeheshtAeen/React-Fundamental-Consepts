import React, { useState } from "react";

function Use_State_Manage_Form() {

    let [formObj, setFormObj] = useState({ fName:" ", lName:" ", city:" ", gender:" " })

    // By using [property], you’re telling JavaScript to use the value of
    // the property variable as the key, rather than the string "property".
    
    function inputOnChange(property, value){
        setFormObj( (prevObj) => ({...prevObj, [property]:value }))
    }

    return (
        <div>
            <h1>Use_State_Manage_Form</h1>
            <form>
                <div className="row">
                    <div className="col col-md-6">
                        <input type="text" className="form-control" placeholder="First name" />
                        <br />
                        <input type="text" className="form-control" placeholder="Last name" />
                        <br />
                        
                        <select className="custom-select mr-lg-3">
                            <option>Select City</option>
                            <option>New York</option>
                            <option>Berlin</option>
                        </select>
                        <br />

                        <div class="form-check form-check-inline">
                            <input type='radio'  name="gender"  value="Male"/>Male                       
                            <input type='radio'  name="gender"  value="Female" />Female
                        </div>
                        <br />
                      

                        <button type="submit" class="btn btn-primary">Submit</button>

                    </div>

                </div>
            </form>
        </div>
    );
}

export default Use_State_Manage_Form;



