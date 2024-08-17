import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children,className}:any) => {
  return (
    <div className={cn('container w-full md:max-w-[1140px] mx-auto',className)}>
      {children}
    </div>
  )
}

export default Container
