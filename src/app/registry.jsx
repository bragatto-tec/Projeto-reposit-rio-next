'use client'

import React, { useState } from 'react'
import { ServerStyleSheet } from 'styled-components'

export function StyledComponentsRegistry({ children }) {
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
