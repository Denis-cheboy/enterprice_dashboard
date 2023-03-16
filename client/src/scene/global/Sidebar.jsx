import React from 'react'
import { useState } from 'react'
import {Sidebar as Prosidebar ,Menu,MenuItem} from "react-pro-sidebar"
// import "react-pro-sidebar/dist/css/styles.css"

import { Box,IconButton,Typography,useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import { tokens } from '../../theme'
import BarChartOutlinedIcon from "@mui/icons-material/HomeOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalenderTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import PieCharttOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import profile from "../../photos/profile2.jpg"

const Item=({title,to,icon,selected,setSelected})=>{
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  return (
    <MenuItem 
     active={selected===title}
     style={{color:colors.grey[100]}}
     onClick={()=>setSelected(title)}
     icon={icon}
     >
      <Typography>
        <Link to={to} style={{textDecoration:"none",color:"inherit"}}>{title}</Link>
      </Typography>
      
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const [isCollapsed,setIsCollapsed]=useState(false)
  const [selected,setSelected]=useState("Dashboard")
  return (
     <Box 
      sx={{
        "& .pro-sidebar-inner":{
          background:`${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper":{
          backgroundColor:"transparent !important"
        },
        "& .pro-inner-item":{
          padding:"5px 35px 5px 20px  !important"
        },
        "& .pro-inner-item:hover":{
          color:"#868dfb !important"
        },
        "& .pro-menu-item.active":{
          color:"#6870fa !important"
        },
        position:"sticky",
        top:"0px",
      }}
     >
      <Prosidebar collapsed={isCollapsed} style={{maxHeight:"100vh",overflow:"auto"}}>
        <Menu iconShape="square">
              {/* LOGO AND MENU ICON */}
              <MenuItem
                onClick={()=>setIsCollapsed(!isCollapsed)}
                icon={isCollapsed?<MapOutlinedIcon/>:undefined}
                style={{
                  margin:"10px 0px 20px 0px",
                  color:colors.grey[100]
                }}
              >
                {!isCollapsed && (
                  <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                    <Typography variant="h3" color={colors.grey[100]}>ADMINIS</Typography>
                    <IconButton  onClick={()=>setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon/>
                    </IconButton>
                  </Box>
                )} 
              </MenuItem>
              {/* USER */}
              {!isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img 
                    width="100px"
                    height="100px"
                    style={{
                      cursor:"pointer",
                      borderRadius:"50%",
                      objectFit:"cover"
                    }}
                    src={profile} alt="profile-user" />
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h2" color={colors.grey[100]} sx={{fontWeight:"bold",m:"10px 0 0 0"}} >Deno Ch</Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                  </Box>
                </Box>
              )}
           {/* Menu items */}
          <Box paddingLeft={isCollapsed?undefined:"10%"}>
            <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Typography variant="h6" colors={colors.grey[300]} sx={{m:"15px 0px 5px 20px"}}>Data</Typography>
            <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Typography variant="h6" colors={colors.grey[300]} sx={{m:"15px 0px 5px 20px"}}>Pages</Typography>
            <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Calender"
            to="/calender"
            icon={<CalenderTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Typography variant="h6" colors={colors.grey[300]} sx={{m:"15px 0px 5px 20px"}}>Charts</Typography>
            <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieCharttOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
        </Box>
      </Menu>
    </Prosidebar> 
  </Box>
  )
}

export default Sidebar
