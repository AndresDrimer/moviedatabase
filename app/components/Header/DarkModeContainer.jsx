import { HiSun, HiMoon } from "react-icons/hi"

function DarkModeContainer({darkMode, setDarkMode, setShowHamburguer}) {
  function handleDarkMode(){
    setDarkMode(prev=>!prev)
    //setShowHamburguer(prev=>!prev)
  }
  return (
    <div className="w-full flex justify-center mx-4 ">
    <button onClick={()=>handleDarkMode()}>
    {darkMode ? <HiMoon className="w-[35px] h-[35px] hover:scale-110"/> : <HiSun className="w-[35px] h-[35px] hover:scale-110"/>}</button>
    </div>
  )
}

export default DarkModeContainer