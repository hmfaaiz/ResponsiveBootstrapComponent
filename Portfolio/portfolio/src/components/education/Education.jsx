import React from "react";
import "./style.css";

import uni2 from "./logo/uni2.svg";
const Education = () => {
  return (
    <>
      <div className="container-fluid education">
        <h2>
          My Education <span> Journey!</span>
        </h2>
        <div className="row parentEducCont">
          <div className="childEducCont col-lg-5">
            <p className="parentPara">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eius iusto corporis, saepe velit labore? Sapiente praesentium ea
              ratione consectetur.
            </p>

            <div className="educationContent">
              <div className="eduimg">
                <img
                  src={uni2}
                  alt="uni Logo"
               
                />
              </div>
              <div className="eduyear">
                <h6>2019 - 2023</h6>
                <p>CGPA : 3.07</p>
              </div>
            </div>
          </div>
          <div className="childEducCont col-lg-5">
            <p className="parentPara">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eius iusto corporis, 
            </p>

            <div className="educationContent">
              <div className="eduimg">
                <img
                  src={uni2}
                  alt="uni Logo"
               
                />
              </div>
              <div className="eduyear">
                <h6>2019 - 2023</h6>
                <p>CGPA : 3.07</p>
              </div>
            </div>
          </div>
          <div className="childEducCont col-lg-5">
            <p className="parentPara">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eius iusto corporis, saepe velit labore? Sapiente praesentium ea
              ratione consectetur.Lorem.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              eius iusto corporis, saepe velit labore? Sapiente praesentium ea
              ratione consectetur.Lorem
            </p>

            <div className="educationContent">
              <div className="eduimg">
                <img
                  src={uni2}
                  alt="uni Logo"
               
                />
              </div>
              <div className="eduyear">
                <h6>2019 - 2023</h6>
                <p>CGPA : 3.07</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
