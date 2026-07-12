
import React from 'react'
import LanguageContext from './LanguageContext'
import { useState } from 'react'
import { Greeting } from './Greeting'


export const App = () => {

  const [ language , setLanguage ] = useState("en")

  const toggleChange = () => {
    setLanguage((prevLang) => prevLang === "en" ? "es" : "en")
  }

  return (

    <LanguageContext.Provider value={language}>
      <button onClick={toggleChange}>
        Transalte to { language === "en" ? "Spanish" : "English"}
      </button>
      < Greeting />
    </LanguageContext.Provider>
  )
}
