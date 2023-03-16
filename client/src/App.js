import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ProSidebarProvider } from "react-pro-sidebar";

import Topbar from "./scene/global/Topbar";
import Dashboard from "./scene/dashboard";
import Sidebar from "./scene/global/Sidebar";
import Team from "./scene/team"
import Invoices from "./scene/invoices"
import Contacts from "./scene/contacts"
import Bar  from "./scene/bar"
import Line from "./scene/line"
import Form from "./scene/form"
import Pie from "./scene/pie"
import FAQ  from "./scene/faq"
import Geography from "./scene/geo"
import Calender from "./scene/calender"
function App() {
  const [theme,colorMode]=useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ProSidebarProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
              <Sidebar/>
                <main className="content">
                  <Topbar/>
                  <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/invoices" element={<Invoices/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/bar" element={<Bar/>}/>
                    <Route path="/pie" element={<Pie/>}/>
                    <Route path="/line" element={<Line/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/geography" element={<Geography/>}/>
                    <Route path="/calender" element={<Calender/>}/>
                  </Routes>
                </main>
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </ProSidebarProvider>
      
    </ColorModeContext.Provider>
    
  );
}

export default App;
