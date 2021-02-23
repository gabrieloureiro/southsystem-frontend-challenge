import React, { createContext, useContext, useState } from 'react'
import { lightTheme, darkTheme } from '@/styles/theme'

export interface ThemeProps {
  title: string
  body: string
  text: string
  background: string
  primary: string
}

interface ThemeContextData {
  theme: ThemeProps
  changeTheme(theme: ThemeProps): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps)

  const changeTheme = (theme: ThemeProps) => {
    if (theme === lightTheme) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }

  return context
}

export { CustomThemeProvider, useTheme }
