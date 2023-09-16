import React from "react";
import "./Main.css";
import { data } from "./AddressData.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddAddress from "./AddAddress";

function Main() {
  const [showAddAddressPopup, setShowAddAddressPopup] = useState(false);

  const openAddAddressPopup = () => {
    setShowAddAddressPopup(true);
  };

  const closeAddAddressPopup = () => {
    debugger;
    setShowAddAddressPopup(false);
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          background: showAddAddressPopup
            ? "rgba(65, 65, 65, 0.50)"
            : "transparent",
          filter: showAddAddressPopup ? "blur(2px)" : "none",
        }}
      >
        {/* button */}
        <div>
          {/* <Link to="/address"> */}
          <button className="button" onClick={openAddAddressPopup}>
            <div className="button-content">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M5.66667 8.99988H11.3333M8.5 6.16654V11.8332M14.875 8.99988C14.875 12.5207 12.0208 15.3749 8.5 15.3749C4.97918 15.3749 2.125 12.5207 2.125 8.99988C2.125 5.47906 4.97918 2.62488 8.5 2.62488C12.0208 2.62488 14.875 5.47906 14.875 8.99988Z"
                    stroke="#E9E9E9"
                    stroke-width="0.859949"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="button-address">Add New Address</span>
            </div>
          </button>
          {/* </Link> */}
        </div>

        {/* default addresses */}
        <div className="default-heading">
          <div className="default-address ">Default Address </div>
          <div class="card default-address-card address-card">
            <div
              class="card-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "none",
                backgroundColor: "#E9E9E9",
                padding: "2px 0px 2px 5px",
                marginBottom: "-10px",
              }}
            >
              <span className="tag">Office</span>
              {/* buttons */}
              <div style={{ display: "flex", gap: "13px" }}>
                <button className="icons">
                  <svg
                    className="pen-line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      d="M12.2498 12.7498H7.58316M8.16649 3.99983L10.4998 6.33316M2.43623 12.6125L3.55808 12.3882C3.97007 12.3058 4.17606 12.2646 4.36815 12.1892C4.53865 12.1224 4.70068 12.0356 4.8509 11.9309C5.02014 11.8128 5.16869 11.6643 5.46578 11.3672L11.5899 5.24313C11.8209 5.01212 11.9364 4.89662 11.9796 4.76342C12.0177 4.64626 12.0177 4.52006 11.9796 4.4029C11.9364 4.26971 11.8209 4.15421 11.5899 3.9232L10.5765 2.9098C10.3454 2.67879 10.2299 2.56328 10.0968 2.52001C9.97959 2.48194 9.85339 2.48194 9.73623 2.52001C9.60304 2.56328 9.48753 2.67879 9.25652 2.9098L3.13245 9.03388C2.83536 9.33097 2.68681 9.47951 2.56878 9.64875C2.46401 9.79897 2.37729 9.961 2.31042 10.1315C2.23507 10.3236 2.19387 10.5296 2.11148 10.9416L1.88711 12.0634C1.84121 12.2929 1.81826 12.4077 1.85212 12.4895C1.88172 12.5611 1.93857 12.6179 2.01013 12.6475C2.09197 12.6814 2.20673 12.6584 2.43623 12.6125Z"
                      stroke="#3E3636"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button className="icons">
                  <svg
                    className="cross"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      d="M3.5 3.99988L10.5 10.9999M10.5 3.99988L3.5 10.9999"
                      stroke="#3E3636"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <hr />
            <div class="card-body">
              <h5 class="card-title">Sanya</h5>
              <p class="card-text">
                VATIKA BUSINESS PARK, Badshahpur Sohna Rd Hwy, Block W, Sector
                49
              </p>
              <p>Gurgaon</p>
              <p>Gurugram - 122018</p>
              <p>Haryana</p>
              <p>Mobile: 9878434718</p>
            </div>
          </div>
        </div>

        {/* other address */}
        <div className="other-heading">
          <div className="other-address">Other Address </div>
          {data.map((item) => (
            <div
              class="card address-card"
              style={{
                margin: "10px",
                border: "none",
                backgroundColor: "#E9E9E9",
              }}
            >
              <div
                class="card-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "none",
                  backgroundColor: "#E9E9E9",
                  padding: "2px 0px 2px 5px",
                  marginBottom: "-10px",
                }}
              >
                <span className="tag">{item.type}</span>

                <div style={{ display: "flex", gap: "13px" }}>
                  <Link to="/editaddress">
                    <button className="icons">
                      <svg
                        className="pen-line"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        // style={{ marginRight: "13px" }}
                      >
                        <path
                          d="M12.2498 12.7498H7.58316M8.16649 3.99983L10.4998 6.33316M2.43623 12.6125L3.55808 12.3882C3.97007 12.3058 4.17606 12.2646 4.36815 12.1892C4.53865 12.1224 4.70068 12.0356 4.8509 11.9309C5.02014 11.8128 5.16869 11.6643 5.46578 11.3672L11.5899 5.24313C11.8209 5.01212 11.9364 4.89662 11.9796 4.76342C12.0177 4.64626 12.0177 4.52006 11.9796 4.4029C11.9364 4.26971 11.8209 4.15421 11.5899 3.9232L10.5765 2.9098C10.3454 2.67879 10.2299 2.56328 10.0968 2.52001C9.97959 2.48194 9.85339 2.48194 9.73623 2.52001C9.60304 2.56328 9.48753 2.67879 9.25652 2.9098L3.13245 9.03388C2.83536 9.33097 2.68681 9.47951 2.56878 9.64875C2.46401 9.79897 2.37729 9.961 2.31042 10.1315C2.23507 10.3236 2.19387 10.5296 2.11148 10.9416L1.88711 12.0634C1.84121 12.2929 1.81826 12.4077 1.85212 12.4895C1.88172 12.5611 1.93857 12.6179 2.01013 12.6475C2.09197 12.6814 2.20673 12.6584 2.43623 12.6125Z"
                          stroke="#3E3636"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </Link>
                  <button className="icons">
                    <svg
                      className="cross"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <path
                        d="M3.5 3.99988L10.5 10.9999M10.5 3.99988L3.5 10.9999"
                        stroke="#3E3636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <hr />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.address}</p>
                <p>{item.city}</p>
                <p>{item.postalcode}</p>
                <p>{item.state}</p>
                <p>Mobile: {item.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAddAddressPopup && (
        <div className="popup" style={{}}>
          <div onClick={closeAddAddressPopup}>
            <button className="close-button">
              <svg
                onClick={console.log("hi")}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 22 21"
                fill="none"
              >
                <path
                  d="M4.4043 3.66187L18.0806 17.3382M18.0806 3.66187L4.4043 17.3382"
                  stroke="#3E3636"
                  strokeWidth={1.70954}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <AddAddress closebtn={closeAddAddressPopup} />
        </div>
      )}
    </>
  );
}

export default Main;
