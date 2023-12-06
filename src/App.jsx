import Header from "./layout/Header"
import Footer from "./layout/Footer"
import { Outlet } from "react-router-dom"

function App() {
 

  return (
    <div className='min-h-screen flex flex-wrap content-between'>
    <div className='w-full block'>
      <Header/>
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  )
}

export default App