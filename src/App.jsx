import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"


function App() {
  const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}/>
    </>
  )
}

export default App