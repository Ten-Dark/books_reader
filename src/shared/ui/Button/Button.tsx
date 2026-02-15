import { type ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'cursor-pointer'
    const variants = {
      primary:
        'bg-white text-[#303030] border-[#E8E7E7] border-1 text-md font-bold rounded-md shadow-[0px_0px_4px_rgba(0,0,0,0.25)]',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'bg-none border-2 border-[#CACACA] text-[#CACACA] rounded-xl',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    }
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3.5 text-lg',
    }

    const widthClass = fullWidth ? 'w-full' : ''
    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], widthClass, className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)
