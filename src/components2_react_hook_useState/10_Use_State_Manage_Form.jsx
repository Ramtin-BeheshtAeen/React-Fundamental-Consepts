import React, { useState } from "react";

function Use_State_Manage_Form() {
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  // By using [property], you’re telling JavaScript to use the value of
  // the property variable as the key, rather than the string "property".

  function inputOnChange(property, value) {
    setFormObj((prevObj) => ({ ...prevObj, [property]: value }));
  }

  function formSubmit(event){
    event.preventDefault()
    console.log(formObj)
  }

  return (
    <div>
      <h1>Use_State_Manage_Form</h1>
      <form onSubmit={formSubmit}>
        <div className="row">
          <div className="col col-md-6">
            <input
              placeholder="First name"
              value={formObj.fName}
              type="text"
              onChange={(e) => inputOnChange("fName", e.target.value)}
              className="form-control"
            />
            <br />
            <input
              placeholder="Last name"
              value={formObj.lName}
              type="text"
              onChange={(e) => inputOnChange("lName", e.target.value)}
              className="form-control"
            />
            <br />

            <select
              value={formObj.city}
              onChange={(e) => inputOnChange("city", e.target.value)}
              className="custom-select mr-lg-3">
              <option value="">Select City</option>
              <option value="New york">New York</option>
              <option value="Berlin">Berlin</option>
            </select>
            <br />

            <div class="form-check form-check-inline">
              <input
                type="radio"
                checked={formObj.gender === "male"}
                onChange={() => inputOnChange("gender", "male")}
                name="gender"
                value="male"
              />
              Male
              <input
                type="radio"
                checked={formObj.gender === "female"}
                onChange={() => inputOnChange("gender", "female")}
                name="gender"
                value="female"
              />
              Female
            </div>
            <br />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Use_State_Manage_Form;
