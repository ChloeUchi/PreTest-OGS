import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1'
import HeaderPage from './components/HeaderPage'
import VisaCard from './components/VisaCard'
import Details from './components/Detail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container w-[390px] place-content-center bg-slate-50">
      <HeaderPage/>
      <div className='ml-[1.5em] mr-[1.5em] border-2 rounded-full'><VisaCard/></div>
      <div className='m-[2em] border-2 border-white shadow-lg'><Section1/></div>
      <div className='p-[2em]'><Details/></div>
    </div>


  )
}

export default App
