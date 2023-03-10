import React from "react"
// import { Routes, Route } from "react-router-dom"
import Navbar from "./navbar/navbar"
import SignUp from "./component/signUp"
import UserList from "./component/userList"
import { Route, Routes } from "react-router-dom"

function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/SignUP" element={<SignUp/>} />
        <Route path="/List" element={<UserList/>} />
      </Routes>
    </div>
  )
}

export default App