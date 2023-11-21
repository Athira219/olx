

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    {/* front section footer */}
    <div >
    <div className="row">
      <div
        style={{ height: "200px", backgroundColor: "rgb(248, 240, 240)" }}
        className="d-flex justify-content-center align-items-center w-100 flex-column "
      >
        <div className="d-flex justify-content-evenly align-items-center w-100 ">
          <div className="websites" style={{ width: "400px" }}>
            <img
              src="https://statics.olx.in/external/base/img/phone-app.webp"
              style={{ margin: "0" }}
              alt=""
            />
          </div>
          <div className="websites" style={{ width: "400px",  }}>
            <div className="border-3 border-end">
            <h2 style={{ fontWeight: " bold" }}>TRY THE OLX APP</h2>
            <h6>
              Buy, sell and find just about anything using the app on your
              mobile.
            </h6>
            </div>
            
          </div>
          <div className="websites" style={{ width: "400px", border: "end" }}>
            <h6 style={{ fontWeight: " bold" }}>GET YOUR APP TODAY</h6>
            <div className="d-flex mt-4" style={{ fontSize: "9px" }}>
              <button
                className="rounded text-white bg-black me-2"
                style={{ width: "130px", height: "40px", fontSize: "14px" }}
              >
                <i class="fa-solid fa-apple-whole me-2"></i>
                <span style={{ fontSize: "10px" }}>Download on the</span>{" "}
                <br></br>APP Store
              </button>
              <button
                className="rounded text-white bg-black"
                style={{ width: "130px", height: "40px", fontSize: "14px" }}
              >
                <span style={{ fontSize: "10px" }}>
                  <i class="fa-solid fa-play text-warning me-2"></i>Get it on
                </span>{" "}
                <br />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* footer section */}

      <div
        style={{ height: "300px", backgroundColor: "whitesmoke" }}
        className="d-flex justify-content-center align-items-center w-100 flex-column "
      >
        <div className="d-flex justify-content-evenly align-items-center w-100">
          <div className="websites">
            <h6
              className="mb-3"
              style={{ fontWeight: "bold", fontSize: "13px", margin: "0" }}
            >
              POPULAR LOCATIONS
            </h6>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
              <li style={{ fontSize: "11px" }}>Mumbai</li>
              <li style={{ fontSize: "11px" }}>Tamil Nadu</li>
              <li style={{ fontSize: "11px" }}>Kerala</li>
              <li style={{ fontSize: "11px" }}>Kolkkatha</li>
            </ul>
          </div>

          <div className="links d-flex flex-column">
            <h6
              className="mb-3"
              style={{ fontWeight: "bold", fontSize: "13px", margin: "0" }}
            >
              TRENDING LOCATIONS
            </h6>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
              <li style={{ fontSize: "11px" }}>Mumbai</li>
              <li style={{ fontSize: "11px" }}>Tamil Nadu</li>
              <li style={{ fontSize: "11px" }}>Kerala</li>
              <li style={{ fontSize: "11px" }}>Kolkkatha</li>
            </ul>
          </div>
          <div className="guides d-flex flex-column">
            <h6
              className="mb-3"
              style={{ fontWeight: "bold", fontSize: "13px", margin: "0" }}
            >
              ABOUT US
            </h6>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
              <li style={{ fontSize: "11px" }}>About OLX Group</li>
              <li style={{ fontSize: "11px" }}>Careers</li>
              <li style={{ fontSize: "11px" }}>Contact Us</li>
              <li style={{ fontSize: "11px" }}>OLX people</li>
              <li style={{ fontSize: "11px" }}>Waah Jobs</li>
            </ul>
          </div>
          <div className="guides d-flex flex-column">
            <h6
              className="mb-3"
              style={{ fontWeight: "bold", fontSize: "13px", margin: "0" }}
            >
              OLX
            </h6>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
              <li style={{ fontSize: "11px" }}>Help</li>
              <li style={{ fontSize: "11px" }}>Sitemp</li>
              <li style={{ fontSize: "11px" }}>Legal & Privacy Information</li>
              <li style={{ fontSize: "11px" }}>Blog</li>
              <li style={{ fontSize: "11px" }}>OLX Auto Sell Car</li>
              <li style={{ fontSize: "11px" }}>
                Vulnerability Disclosure Program
              </li>
            </ul>
          </div>
          <div className="contact d-flex flex-column">
            <h6
              className="  mb-3"
              style={{ fontWeight: "bold", fontSize: "16px", margin: "0" }}
            >
              FOLLOW US
            </h6>

            <div className="d-flex justify-content-evenly ">
              <Link
                to={
                  "https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%7C&placement=&creative=550525804791&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9040212%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmL6cR9nvG9Qawzkmk5PJ_uJ11hrpB9YL9wStSDVick1KApw_cuPEEoaAonREALw_wcB"
                }
                style={{
                  textDecoration: "none",
                  color: "#013220",
                }}
              >
                <i class="fa-brands fa-facebook-f fa-1x "></i>
              </Link>
              <Link
                to={
                  "https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127631%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9040212%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmLNttBUdhaHcOVSQNlUNCvDvVtdqjIs5wuBh9mf12vgsLyI6b0noAAaAjbWEALw_wcB"
                }
                style={{
                  textDecoration: "none",
                  color: "#013220",
                }}
              >
                <i class="fa-brands fa-instagram  fa-1x  "></i>
              </Link>
              <Link
                to={"https://twitter.com/i/flow/login"}
                style={{
                  textDecoration: "none",
                  color: "#013220",
                }}
              >
                <i class="fa-brands fa-twitter fa-1x  "></i>
              </Link>
              <Link
                to={"https://in.linkedin.com/"}
                style={{
                  textDecoration: "none",
                  color: "#013220",
                }}
              >
                <i class="fa-solid fa-circle-play fa-1x "></i>
              </Link>
            </div>
            <div className="d-flex mt-4" style={{ fontSize: "9px" }}>
              <button
                className="rounded text-white bg-black me-2"
                style={{ width: "100px", height: "40px" }}
              >
                <i class="fa-solid fa-apple-whole me-2"></i>
                <span style={{ fontSize: "10px" }}>Download on the</span> APP
                Store
              </button>
              <button
                className="rounded text-white bg-black"
                style={{ width: "100px", height: "40px" }}
              >
                <i class="fa-solid fa-play text-warning me-2"></i>
                <span style={{ fontSize: "10px" }}>Get it on</span>
                <br /> Google Play
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-100  "
          style={{ height: "100px", backgroundColor: "#013220" }}
        >
          <p
            style={{
              marginLeft: "1050px",
              color: "white",
              fontSize: "11px",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            All rights reserved © 2006-2023 OLX
          </p>
          <p
            style={{
              marginLeft: "50px",
              color: "white",
              fontSize: "11px",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            Help-sitemap
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
