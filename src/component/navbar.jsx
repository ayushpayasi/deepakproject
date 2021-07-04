import React,{useState} from 'react'
import BookIcon from '@material-ui/icons/Book';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from "../data/logo.png"

export default function NavBar() {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div className="side-navbar">
          <div className="navbar-brand">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <PersonOutlineIcon/>
              <h6>students</h6>
            </div>
            <div className="nav-item">
            <BookIcon/>
              <h6>lesson plan</h6>
            </div>
            <div className="nav-item">
            <SettingsIcon/>
              <h6>settings</h6>
            </div>
          </div>

        </div>
    )
}
