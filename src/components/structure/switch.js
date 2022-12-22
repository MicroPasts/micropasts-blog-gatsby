import React, { useState } from 'react'

const ThemeSwitch = () => {
  const localStorageItem = localStorage.getItem('dark-theme-enabled')
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorageItem))

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('dark-theme-enabled', JSON.stringify(newDarkMode))

    if (newDarkMode) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', '')
    }
  }

  document.body.setAttribute('data-theme', darkMode ? 'dark' : '')

  return (
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input" id="darkSwitch" onClick={() => toggleDarkMode()}/>
      <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
    </div>
  )
}

export default ThemeSwitch