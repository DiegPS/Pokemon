import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom"
import Error from "./components/Error/Error";
import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";
function App() {
  const { pathname } = useLocation()
  return (
    <>
      {
        (pathname === "/")
          ? (<Routes><Route path="/" element={<Landing />} /></Routes>)
          : (<>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/pokemon/:id" element={<Details />} />
              <Route path="/create" element={<Form />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </>)
      }
    </>
  );
}

export default App;
