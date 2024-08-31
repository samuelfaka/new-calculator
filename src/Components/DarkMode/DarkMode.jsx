import React from 'react'
import LightButton from '../../assets/Images/template-1.jpg';
import DarkButton from '../../assets/Images/template-3.jpg'

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    
    const element = document.documentElement;

    React.useEffect(() => {
        if(theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    } , [theme]);



  return (
    <div className='relative'>
        <img src={LightButton} 
        alt="" 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-sm-
        [1px_1px_1px_ rgba(0,0,0,0.1)] transition-all 
        duration-700 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        />

        <img src={DarkButton} 
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='w-12 cursor-pointer drop-shadow-sm-
        [1px_1px_1px_ rgba(0,0,0,0.1)] transition-all 
        duration-700'
         />
    </div>
  )
}

export default DarkMode