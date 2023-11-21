


import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import Dropdown from "react-bootstrap/Dropdown";


function Header() {
  return (
    <div>
        <div>
            <Navbar  className=" bg-body-tertiary d-flex justify-content-between align-item-center w-100 me-3">
                <div  className="d-flex justify-content-between">
                    <Form>
                        <img
                            className="w-100  "
                            style={{ height: "40px", marginLeft: "15px" }}
                            src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG.jpg"
                            alt=""
                        />
                    </Form>
                </div>
                <div className="d-flex justify-content-between">
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="rgb(255, 255, 255);"
                            className="d-flex justify-content-start align-items-center p-3"
                            style={{
                                width: "300px",
                                height: "50px",
                                border: "1px solid black",
                                backgroundColor: "rgb(255, 255, 255);",
                                outline: "  aquamarine",
                            }}
                        >
                            <i class="fa-solid fa-magnifying-glass me-3  "></i> India
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: "300px", height: "100px" }}>
                            <Dropdown.Item value="1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="d-flex justify-content-between">
                    <Form inline>
                        <div className="d-flex ">
                            <div className="d-flex justify-content-between">
                                <Form.Control
                                    style={{
                                        width: "550px",
                                        height: "50px",
                                        border: "1px solid black",
                                        outline: "none",
                                    }}
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </div>

                            <div className="bg-dark text-white d-flex justify-content-between">
                                <button
                                    className="bg-dark text-white"
                                    style={{ height: "50px", width: '50px' }}
                                >
                                    <i class="fa-solid fa-magnifying-glass bg-dark text-white "></i>
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>

                <div className="d-flex justify-content-between">
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="white"
                            id="dropdown-basic"
                            style={{ fontSize: "15px", fontWeight: " bold" }}
                        >
                            English
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="d-flex justify-content-between">
                    <h6
                        style={{
                            fontSize: "15px",
                            fontWeight: " bold",
                            textDecoration: "underline",
                        }}
                    >
                        Login
                    </h6>
                </div>
                <div className="d-flex justify-content-between me-5">
                    <button
                        className="border-3 border-3 border-warning"
                        style={{
                            borderRadius: "5px",
                            padding: "5px",
                            fontSize: "15px",
                            fontWeight: " bold",
                        }}
                    >
                        +SELL
                    </button>
                </div>


            </Navbar>
            <div className='d-flex align-items-center justify-content-center border w-100 p-3 text-dark' style={{ height: '50px',fontSize:'13PX', }}>
                        
                {/* <select ><span>ALL CATEGORIES</span></select> */}
                <span className="fw-bold">ALL CATEGORIES<select style={{border: 'none'}}>
                  <option ></option>
                  <option value="car">car</option>
                  <option value="Job">Job</option>
                  <option value="Bike">Bike</option>
                  <option value=""></option>
                  </select></span>
                <span className="ms-4"> Cars </span>
                <span className="ms-4">  Motorcycles</span>
                <span className="ms-4">Mobile Phones </span>
                <span className="ms-4">For Sale House Apartments</span>
                <span className="ms-4">Scooters</span>
                <span className="ms-4">Commercial & Other Vehicles</span>
                <span className="ms-4">For Rent Houses & Apartments
                </span>
            </div>

        </div>





    </div>
)
}

export default Header;
