import React, {useState} from "react";


function ThemeToggle() {


const [isDarkTheme, setIsDarkTheme] = useState(false)

const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
}
return(
    <button onClick={toggleTheme}>
        {isDarkTheme ? 'Dark' : ' light'}
</button>
)
}

export {ThemeToggle}