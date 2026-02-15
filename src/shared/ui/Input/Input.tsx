import {forwardRef, type InputHTMLAttributes} from "react";
import clsx from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string,
    helperText?: string,
    fullWidth?: boolean,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({
         label,
         error,
         helperText,
         fullWidth = false,
         className,
         id,
         ...props
     }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
        const widthClass = fullWidth ? 'w-full' : ''

        return (
            <div className={widthClass}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={clsx('block text-sm font-medium text-gray-700 mb-1')}
                    >
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={clsx(`
                        px-4 py-2 border-2 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-offset-1
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200`,
                        error
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
                        className,
                    )}{...props}/>

                {error && (
                    <p className={'mt-1 text-sm text-gray-500'}>
                        {error}
                    </p>
                )}

                {helperText && !error && (
                    <p className={'mt-1 text-sm text-gray-500'}>
                        {helperText}
                    </p>
                )}

            </div>
        );
    });
