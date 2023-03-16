import React,{useContext} from 'react'
import {Box,IconButton,useTheme,InputBase}from "@mui/material"

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
import { ColorModeContext,tokens } from '../../theme'


const Topbar = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const colorMode=useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2} position="sticky" top="0px">
        {/* SEARCH BAR */}
        <Box 
        display="flex" 
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
            <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
            <IconButton type="button" sx={{p:1}}>
                <SearchIcon/>
            </IconButton>
           
        </Box>
        <Box display="flex" >
            <IconButton  onClick={colorMode.toggleColorMode}>
                {theme.palette.mode==="dark"?<DarkModeOutlinedIcon/>: <LightModeOutlinedIcon/> }
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton>
               <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon/>
            </IconButton>
            
        </Box>
    </Box>
    
  )
}

export default Topbar