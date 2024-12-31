import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "./Admin.css";
import Staffdetails from "./Staffdetails";
import Dashboard from "./Dashboard";
import Userdetails from "./Userdetails";
import Galleryupload from "./Galleryupload";
import Imagevideoupload from "./Imagevideoupload";
import Addcourse from "./Addcourse";
import Addstaff from "./Addstaff";
import Paymentdetails from "./Paymentdetails";
import Transactiondetails from "./Transactiondetails";
import { LuLayoutDashboard,LuGalleryHorizontalEnd } from "react-icons/lu";
import { FaRegUser,FaSortAmountUp} from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaFileAudio } from "react-icons/fa";
import { RiGalleryView } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa";
import Audiofile from "./Audiofile";
import Registeredcourse from "./Registeredcourse";
import AddFeeStructure from "./Addfeestructure";

const Adminlayout = () => {
  const [menuItems] = useState([
    {
      icon:<LuLayoutDashboard/>,
      title: "Dashboard",
      path: "dashboard",      
      icon2:<FaAngleRight/>
    },
    {
      icon:<FaRegUser/>,
      title: "User Details",
      path: "userdetails",    
      icon2:<FaAngleRight/>
    },
    {
      title: "All Details",
      submenu: [
        { icon:<MdPayments/>,title: "Payment Details", path: "paymentdetails" ,icon2:<FaAngleRight/>},
        { icon:<GrTransaction/>,title: "Transaction Details", path: "tansactiondetails",icon2:<FaAngleRight/>},
        { icon:<FaFileAudio/>,title: "Audio File", path: "audiofile",icon2:<FaAngleRight/> },
        { title: "Register Course", path: "registercourse" },
      ],
    },

    {
      title: "Upload",
      submenu: [
        {icon:<LuGalleryHorizontalEnd/>, title: "Gallery Upload", path: "galleryupload",icon2:<FaAngleRight/> },
        {icon:<RiGalleryView/>, title: "Image/Video Upload", path: "imageupload",icon2:<FaAngleRight/> },
      ],
    },
    {
      title: "Add Course",
      path: "addcourse",
    },
    {icon:<FaSortAmountUp/>,
      title: "Add Fee structure for Course",
      path: "addfeecourse",
      icon2:<FaAngleRight/>
    },
    {
      title: "Student Registered Course Details",
      path: "couse details",
    },
    {
      icon:<PiStudent/>,
      title: "Staff Details",
      path: "staffdetails",
      icon2:<FaAngleRight/>
    },
    {
      title: "Contact us enquiy Details",
      path: "enquiery",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="admin-layout">
      <Topbar />
      <div className="dashboard-container">
        <Sidebar menuItems={menuItems || []} />
        <div className="main-content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userdetails" element={<Userdetails />} />
            <Route path="staffdetails" element={<Staffdetails />} />
            <Route path="galleryupload" element={<Galleryupload />} />
            <Route path="imageupload" element={<Imagevideoupload />} />
            <Route path="addcourse" element={<Addcourse/>} />
            <Route path="staffdetails" element={<Staffdetails/>} />
            <Route path="staffdetails/addstaff" element={<Addstaff/>} />
            <Route path="editstaff:id" element={<Addstaff/>} />
            <Route path="paymentdetails" element={<Paymentdetails/>} />
            <Route path="tansactiondetails" element={<Transactiondetails/>} />
            <Route path="audiofile" element={<Audiofile/>} />
            <Route path="registercourse" element={<Registeredcourse/>} />
            <Route path="addfeecourse" element={<AddFeeStructure/>} />
            <Route path="userdetails" element={<Userdetails/>} />



          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;