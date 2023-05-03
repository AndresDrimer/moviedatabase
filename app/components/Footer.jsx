import React from 'react'

function Footer({ darkMode}) {
    const date = new Date().toLocaleDateString()

  return (
    <footer className={darkMode ? "text-black bg-gray-100" : "text-white bg-gray-900"}>
    <div className= 'flex justify-center mt-10 shadow-lg p-4'>
    <p>© <a href="https://portfolio-andresdrimer-2023.vercel.app/" target="_blank" >Andrés Drimer {date.substring(4)}</a></p></div>
    </footer>
  )
}

export default Footer