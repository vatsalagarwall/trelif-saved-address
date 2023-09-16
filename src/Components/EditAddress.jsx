import React from "react";
import "./AddAddress.css";

function EditAddress() {
  return (
    <>
      <div style={{ width: "361px" }}>
        <div class="container mt-5">
          <h2 className="address-heading">Edit Address</h2>
          <form id="addressForm">
            <div class="form-row">
              <div class="form-group col-md-3 mb-3">
                <label for="firstName">
                  First Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Enter First Name"
                />
              </div>
              <div class="form-group col-md-3 mb-3">
                <label for="lastName">
                  Last Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div class="form-group col-md-3 mb-3">
              <label for="phoneNumber">
                Phone Number<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                class="form-control"
                id="phoneNumber"
                name="phoneNumber"
                required
                placeholder="Enter Phone Number"
              />
            </div>
            <div class="form-group col-md-3 mb-3">
              <label for="streetAddress">
                Street Address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="streetAddress"
                name="streetAddress"
                required
                placeholder="Enter Street Address"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-3 mb-3">
                <label for="city">
                  City<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  required
                  placeholder="Enter City"
                />
              </div>
              <div class="form-group col-md-3 mb-3">
                <label for="state">
                  State<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="state"
                  name="state"
                  required
                  placeholder="Enter State"
                />
              </div>
              <div class="form-group col-md-3 mb-3">
                <label for="zipCode">
                  Zip Code<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="zipCode"
                  name="zipCode"
                  required
                  placeholder="Enter Zipcode"
                />
              </div>
            </div>
            <div class="form-group col-md-3 mb-3">
              <label for="country">
                Country<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="country"
                name="country"
                required
                placeholder="Enter Country"
              />
            </div>
            <div class="form-group col-md-3 mb-3">
              <label>
                Type of Address<span style={{ color: "red" }}>*</span>
              </label>
              <div className="address-type">
                <div class="form-check">
                  <div className="component">
                    <input
                      class="form-check-input radio"
                      type="radio"
                      name="addressType"
                      id="home"
                      value="Home"
                      required
                    />
                    <label class="form-check-label type" for="home">
                      Home
                    </label>
                  </div>
                </div>
                <div class="form-check">
                  <div className="component">
                    <input
                      class="form-check-input radio"
                      type="radio"
                      name="addressType"
                      id="home"
                      value="Home"
                      required
                    />
                    <label class="form-check-label type" for="home">
                      Work
                    </label>
                  </div>
                </div>
                <div class="form-check">
                  <div className="component">
                    <input
                      class="form-check-input radio"
                      type="radio"
                      name="addressType"
                      id="home"
                      value="Home"
                      required
                    />
                    <label class="form-check-label type" for="home">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkmeout">
              <div className="checkbox">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
              </div>

              <div className="content">
                <label class="form-check-label" for="exampleCheck1">
                  Make this as My Default Address
                </label>
              </div>
            </div>

            <div className="save-btn">
              <button type="submit" class="btn mb-3 save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditAddress;
