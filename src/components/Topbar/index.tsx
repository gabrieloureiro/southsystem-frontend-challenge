import React, { useState } from 'react'

import { TopbarInterface } from './types'

import { StyledBar, CollapseTrigger } from './styles'
import { FiChevronLeft, FiMenu } from 'react-icons/fi'

const Topbar: React.FC<TopbarInterface> = ({ collapsed, handleCollapsed }) => {
  const stored = localStorage.getItem('isDarkMode')
  const [isDarkMode, setIsDarkMode] = useState(stored === 'true')

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('isDarkMode', String(!!isDarkMode))
  }
  return (
    <StyledBar>
      <CollapseTrigger onClick={handleCollapsed}>
        {collapsed ? <FiChevronLeft size={24} /> : <FiMenu size={24} />}
      </CollapseTrigger>
    </StyledBar>
  )
}

export default Topbar
