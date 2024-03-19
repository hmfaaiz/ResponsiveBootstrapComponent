import React from "react";
import "./style.css";
import css from "./images/css.png"
import django from "./images/django.png"
import expressjs from "./images/express.png"
import html from "./images/html.jpg"
import js from "./images/js.png"
import mongodb from "./images/mongodb.jpg"
import mysql from "./images/mysql.jpg"
import nest from "./images/nest.png"
import node from "./images/node.png"
import python from "./images/python.png"
import react from "./images/react.png"
import ts from "./images/ts.png"
import bootstrap from "./images/bootstrap.png"

const Skill = () => {
  return (
    <>
      <div className="container-fluid skill">
        <h2>
          My <span> Skills</span>
        
        </h2>

        <div className="parentSkillCont">
          <div className="container childSkillCont ">
            
{/* to move */}
          <div className="skillImg col-lg-3 col-md-4 col-sm-6 col-8">
          <img src={css} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={django} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={expressjs} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={html} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={js} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={mongodb} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={mysql} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={nest} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={node} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          
          <div className="skillImg col-lg-3 col-md-4 col-sm-5">
          <img src={python} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={react} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={ts} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="skillImg col-lg-3 col-md-4 col-sm-5 col-8">
          <img src={bootstrap} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
          

        
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
