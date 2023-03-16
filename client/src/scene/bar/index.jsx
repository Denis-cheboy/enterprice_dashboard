import BarChart from "../../components/BarChart";
import Header from "../../components/Header"

import { Box } from "@mui/material";

import React from 'react'

const Bar = () => {
  return (
    <Box m="20px">
       <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
       <Box height="70vh">
         <BarChart/>
       </Box>
    </Box>
  )
}

export default Bar
