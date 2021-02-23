import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Container from '@/components/Container'
import { LayoutInterface } from './types'

const Layout: React.FC<LayoutInterface> = ({
  title,
  description,
  children
}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [width, setWidth] = useState(
    window !== undefined ? window.innerWidth : 0
  )

  const handleWindowSize = () => {
    if (typeof window.innerWidth === 'number') {
      setWidth(window.innerWidth)
    } else {
      if (document.documentElement && document.documentElement.clientWidth) {
        setWidth(document.documentElement.clientWidth)
      } else {
        if (document.body && document.body.clientWidth) {
          setWidth(document.body.clientWidth)
        }
      }
    }
  }

  useEffect(() => {
    if (width <= 767) {
      setCollapsed(false)
    } else {
      setCollapsed(true)
    }
  }, [width])

  useEffect(() => {
    handleWindowSize()
  }, [])

  window.addEventListener('resize', handleWindowSize)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Sidebar collapsed={collapsed} />
      <Topbar
        collapsed={collapsed}
        handleCollapsed={() => setCollapsed(!collapsed)}
      />
      <Container sideBarCollapsed={collapsed}>{children}</Container>
    </>
  )
}

export default Layout
