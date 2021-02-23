import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BannerProvider } from '@/hooks/useBanner'
import { CustomThemeProvider, useTheme } from '@/hooks/useTheme'

import store from '@/store'

const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme()

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BannerProvider>{children}</BannerProvider>
        </Provider>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}

export default AppProvider
