import {useState,React} from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faBook,
  faHandHoldingHand,
  faRightFromBracket,
  faClockRotateLeft,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Userform from "../Userform/Userform";

const Sidebar = () => {
  const [updateProfile, setUpdateProfile] = useState(false);

  const OpenUpdateProfile=()=>{
    setUpdateProfile(true)

}


  return (
    <>
      <div className="dashboard">
        <div className="sidebar col-8 col-sm-4 col-md-3 col-lg-2 ml-0">
          <div className="header mt-3">
            <h2>LMS</h2>
          </div>
          <hr className="custom-hr " />
          <div className="menuCont">
            <ul className="list-unstyled ">
              <li className="menuList" onClick={OpenUpdateProfile}>
                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <span className="icon-text"> My Profile</span>
              </li>
              <li className="menuList">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <span className="icon-text">Members</span>
              </li>

              <li className="menuList">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <span className="icon-text">Books</span>
              </li>
              <li
                className="menuList"
                data-bs-target="#more"
                data-bs-toggle="collapse"
                aria-expanded="false"
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faHandHoldingHand} />
                </div>
                <div>
                  <span className="icon-text">Borrowing System</span>
                  <ul
                    className="childUl
            
                 list-unstyled collapse"
                    id="more"
                  >
                    <li className="childMenuList">
                      <FontAwesomeIcon icon={faClockRotateLeft} />{" "}
                      <span className="icon-text"> My history</span>{" "}
                    </li>
                    <li className="childMenuList">
                      <FontAwesomeIcon icon={faList} />{" "}
                      <span className="icon-text">List Borrowed</span>{" "}
                    </li>
                    <li className="childMenuList">
                      <FontAwesomeIcon icon={faList} />{" "}
                      <span className="icon-text">Current</span>{" "}
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menuList">
                <div className="icon">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </div>

                <span className="icon-text">Logout</span>
              </li>
            </ul>
          </div>
        </div>

 
        {updateProfile && <Userform OpenUpdateProfile={OpenUpdateProfile} />} 
      </div>
    </>
  );
};

export default Sidebar;
