
import React  , { useContext } from 'react'
import LanguageContext from './LanguageContext'


export const Greeting = () => {

    const language = useContext(LanguageContext)

    const Messages = {
        en: "Hello",
        es: "iHola!",
    }

  return (

    <div>
        <h1>{Messages[language]}</h1>
    </div>

  )
}
