"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react"

import {
  translations,
  Language,
  TranslationKeys,
} from "./translations"


type LanguageContextType = {
  language: Language
  setLanguageWithAnimation: (lang: Language) => void
  t: TranslationKeys
}


const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined)



export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {

  const [language, setLanguage] = useState<Language>("pt")


  function setLanguageWithAnimation(lang: Language) {

    if (lang === language) return

    setLanguage(lang)
  }



  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguageWithAnimation,

        // Corrige o erro de tipagem
        t: translations[language] as TranslationKeys,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}



export function useLanguage() {

  const context = useContext(LanguageContext)


  if (!context) {
    throw new Error(
      "useLanguage deve ser usado dentro de um LanguageProvider"
    )
  }


  return context
}