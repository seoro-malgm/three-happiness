import CssBaseline from "@mui/material/CssBaseline";
import LayoutDefault from "./layout/Default";
import { Routes, Route } from "react-router-dom";

// import { createTheme } from "@mui/material/styles";
// import { green, purple } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/*" element={<LayoutDefault />} />
      </Routes>
    </div>
  );
}

export default App;
