
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiBook2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import "./index.css";

function KanbasNavigation() {

  const links = [ "Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const CustomImage = () => (
    <img src=".././images/log.png" className="wd-icon" style={{ width: "130px" }}/>
  );

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <AiOutlineDashboard className="wd-icon" />,
    Courses: <RiBook2Line className="wd-icon" />,
    Calendar: <BsCalendarWeek className="wd-icon" />,
    Inbox: <FiInbox className="wd-icon" />,
    History: <IoMdTime className="wd-icon" />,
    Studio: <HiOutlineDesktopComputer className="wd-icon" />,
    Commons: <FaArrowRight className="wd-icon" />,
    Help: <BsQuestionCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  

  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 130 }}>
      <div>
        <CustomImage /> 
      </div>
      {links.map((link, index) => (

        <Link
          key={index}
          to={link === "Courses" ? "/Kanbas/Courses/RS101/Home" : `/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]} 
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}

// 导出 KanbasNavigation 组件，以便在其他地方使用
export default KanbasNavigation;
