import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import { CustomContext } from "./utils/customContext";
import { Box, Container, ThemeProvider } from "@mui/material";
import {
  orangeTheme,
  blueTheme,
  lightTheme,
  yellowTheme,
  greenTheme,
} from "./utils/cutomTheme";

function App() {
  const [theme, setTheme] = useState(greenTheme);
  return (
    <ThemeProvider theme={theme}>
      <CustomContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Box
            sx={{
              backgroundColor: "background.default",
              height: "100%",
            }}
          >
            <Navbar />
            <Routes>
              <Route exact path="/editor" element={<Editor />} />
            </Routes>
          </Box>
        </Router>
      </CustomContext.Provider>
    </ThemeProvider>
  );
}

export default App;
