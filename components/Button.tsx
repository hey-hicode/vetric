import { cn } from '@/lib/utils'
import React from 'react'

const Button = ({className,children}:any) => {
  return (
    <div className={cn('border border-white/50 rounded-lg',className)}>
{children}
    </div>
  )
}

export default Button
