import { BrowserRouter,Route,Routes } from "react-router";
import Home from "./routes/home";
import Prueba from "./routes/Prueba";


function Test(){
  return(
    <Routes>
      <Route index element={<Prueba/>} ></Route>
      <Route path="Prueba"  element={<Prueba/>}></Route>
    </Routes>
  )
}