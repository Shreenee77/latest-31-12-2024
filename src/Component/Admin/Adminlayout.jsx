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
import { FaRegUser,FaSortAmountUp,FaChalkboardTeacher} from "react-icons/fa"
import { GiArchiveRegister } from "react-icons/gi";
import { MdPayments } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaFileAudio,FaExternalLinkAlt  } from "react-icons/fa";
import { RiGalleryView } from "react-icons/ri";
import { PiStudentDuotone  } from "react-icons/pi";
import { FaAngleRight,FaFileUpload  } from "react-icons/fa";
import { MdLibraryAddCheck,MdContacts  } from "react-icons/md";
import Audiofile from "./Audiofile";
import Registeredcourse from "./Registeredcourse";
import AddFeeStructure from "./Addfeestructure";
import { IoIosHome } from "react-icons/io";
import Studentcourse from "./Studentcourse";
import Studentdetails from "../Studentdetails";
import Enquierydetails from "./Enquierydetails";

const Adminlayout = () => {
  const [menuItems] = useState([
    {
      icon:<IoIosHome/>,
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
      icon:<FaExternalLinkAlt/>,
      title: "All Details",
      icon2:<FaAngleRight/>,
      submenu: [
        { icon:<MdPayments/>,title: "Payment Details", path: "paymentdetails" },
        { icon:<GrTransaction/>,title: "Transaction Details", path: "tansactiondetails"},        
        { icon:<GiArchiveRegister/>,title: "Register Course", path: "registercourse" },
      ],
    },

    {
      icon:<FaFileUpload/>,
      title: "Upload",
      icon2:<FaAngleRight/>, 
      submenu: [
        {icon:<LuGalleryHorizontalEnd/>, title: "Gallery Upload", path: "galleryupload" },
        {icon:<RiGalleryView/>, title: "Image/Video Upload", path: "imageupload" },
        { icon:<FaFileAudio/>,title: "Audio File", path: "audiofile" },
      ],
    },
    {
      icon:<MdLibraryAddCheck/>,
      title: "Add Course",
      path: "addcourse",
      icon2:<FaAngleRight/>
    },
    {icon:<FaSortAmountUp/>,
      title: "Fee Management",
      path: "addfeecourse",
      icon2:<FaAngleRight/>
    },
    {
      icon:<PiStudentDuotone/>,
      title: "Course Registration",
      path: "couse details",
      icon2:<FaAngleRight/>
    },
    {
      icon:<FaChalkboardTeacher/>, 
      title: "Staff Details",
      path: "staffdetails",
      icon2:<FaAngleRight/>
    },
    {
      icon:<MdContacts/>,
      title: "Contact us enquiy Details", 
      path: "enquiery",
      icon2:<FaAngleRight/>
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
            <Route path="couse details" element={<Studentcourse/>}/>
            <Route path="enquiery" element={<Enquierydetails/>}/>
            <Route path="/student-details" element={<Studentdetails/>}/>



          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;