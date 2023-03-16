import { Accordion,Box,useTheme,AccordionDetails,AccordionSummary,Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">An Important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, minima.
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">Another Important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, minima.
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">Your favorite question</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, minima.
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">Some random Questions</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, minima.
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">An Important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, minima.
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">An Important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, minima.
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ
