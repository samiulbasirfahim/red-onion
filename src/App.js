import logo from "./logo.svg"
import "./App.css"
import Header from "./Shared/Header/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./Shared/Home/Home"

function App() {
	return (
		<div>
			<Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
		</div>
	)
}

export default App
