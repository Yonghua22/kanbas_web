// 导入 React Router 的 Link 和 useLocation 组件
import { Link, useLocation } from "react-router-dom";

// 导入 React 图标组件
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiBook2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

// 导入样式表文件
import "./index.css";

// 创建名为 KanbasNavigation 的函数组件
function KanbasNavigation() {
  // 定义导航链接的文本
  const links = [ "Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  // 定义一个自定义图片组件 CustomImage
  const CustomImage = () => (
    <img src=".././images/log.png" alt="图片描述" className="wd-icon" style={{ width: "130px" }}/>
  );

  // 将导航链接和对应的图标映射关系定义在对象 linkToIconMap 中
  const linkToIconMap = {
    // CustomImage: <CustomImage />, // 添加你的自定义图片
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

  // 获取当前页面的路径
  const { pathname } = useLocation();
  

  return (
    // 渲染一个侧边导航菜单
    <div className="list-group wd-kanbas-navigation" style={{ width: 130 }}>
      <div>
        <CustomImage /> {/* 将 CustomImage 放在这里以显示 Logo */}
      </div>
      {links.map((link, index) => (

        <Link
          key={index}
          //如果是点击了courses 就导到rs101界面
          to={link === "Courses" ? "/Kanbas/Courses/RS101/Home" : `/Kanbas/${link}`}
          // 根据当前路径是否包含链接文本来设置链接是否处于活动状态
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]} {/* 显示链接对应的图标 */}
          <br/>
          {link} {/* 显示链接文本 */}
        </Link>
      ))}
    </div>
  );
}

// 导出 KanbasNavigation 组件，以便在其他地方使用
export default KanbasNavigation;
