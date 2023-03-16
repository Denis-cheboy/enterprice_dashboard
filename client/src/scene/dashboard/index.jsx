import { Box,Button,IconButton,Typography,useTheme } from '@mui/material'
import { tokens } from '../../theme'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import {transactionData as transactions} from "../../data/mockData"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"

import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import GeographyChart from "../../components/GeographyChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from '../../components/ProgressCircle'

import Header from '../../components/Header'

const Dashboard = () => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  return (
    <Box m="20px" overflow="auto">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
        
        <Box>
          <Button sx={{backgroundColor:colors.blueAccent[700],color:colors.grey[100], fontSize:"14px", fontWeight:"bold",padding:"10px 20px"}}>
            <DownloadOutlinedIcon sx={{ mr:"10px"}}/>
            Download reports
          </Button>
        </Box>
      </Box>
      {/* Grid and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box  gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="12,361" subtitle="Emails sent" progress="0.75" increase="+14%" icon={<EmailIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}/>
        </Box>
        <Box   gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="143,361" subtitle="Sales Obtained" progress="0.5" increase="+21%" icon={<PointOfSaleIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}/>
        </Box>
        <Box  gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="32,441" subtitle="New Clients" progress="0.30" increase="+5%" icon={<PersonAddIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}/>
        </Box>
        <Box  gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox title="32,441" subtitle="Traffic Inbound" progress="0.30" increase="+5%" icon={<TrafficIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}/>
        </Box>

      {/* ROW 2 */}
       <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Revenue Generated</Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>$59,342,325</Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{fontSize:"26px",color:colors.greenAccent[500]}}/>
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true}/>
          </Box>
       </Box>

          {/* TRANSACTIONS */}
          <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
             <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p="15px">
               <Typography color={colors.grey[100]} variant="h5" fontWeight="500">Recent Transactions</Typography>
             </Box>
             {
              transactions.map((transaction,idx)=>(
                <Box
                key={idx}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                padding="15px"
                >
                  <Box>
                    <Typography color={colors.greenAccent[100]} variant="h5" fontWeight="500">{transaction.ttext}</Typography>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="500">{transaction.username}</Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">{transaction.cost}</Box>
                </Box>
              ))
             }
          </Box>
          
          {/* ROW 3 */}
          <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
            <Typography variant="h5" fontWeight="600">Campaign</Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size="125"/>
              <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt:"15px"}}>$48,352 revenue generated</Typography>
              <Typography>Includes extra misc expenditure and costs</Typography>
            </Box>

          </Box>
          <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} >
            <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0px 30px"}}>Sales Quantity</Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true}/>
            </Box>

          </Box>
          <Box gridColumn="span 4" p="30px" gridRow="span 2" backgroundColor={colors.primary[400]} >
            <Typography variant="h5" fontWeight="600" sx={{mb:"15px"}}>Geography Based Traffic</Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true}/>
            </Box>

          </Box>
          {/*  */}
      </Box>
      
    </Box>
  )
}

export default Dashboard
