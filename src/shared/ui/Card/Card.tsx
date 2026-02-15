import { forwardRef, type HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'rounded'
    const variants = {
      default: 'bg-white text-black',
      bordered: 'bg-none border-[1px] border-gray-200',
      elevated: 'bg-black shadow-lg hover:shadow-xl transition-all duration-200',
    }
    const paddings = {
      none: '',
      sm: 'px-4 py-3',
      md: 'px-[20px] py-4',
      lg: 'px-6 py-[20px]',
    }
    return (
      <div
        ref={ref}
        className={clsx(baseStyles, variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
