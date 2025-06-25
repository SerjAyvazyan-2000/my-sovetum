import React, { useState } from 'react'
import clsx from 'clsx'

interface FloatingInputProps {
    label: string
    required?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    classNamPlaceholder?: string

    name?: string
    type?: string
}

const FloatingInput: React.FC<FloatingInputProps> = ({
                                                         label,
                                                         required = false,
                                                         value = '',
                                                         onChange,
                                                         className = '',
                                                         classNamPlaceholder,
                                                         name,
                                                         type = 'text'
                                                     }) => {
    const [isFocused, setIsFocused] = useState(false)

    const isActive = isFocused || value.length > 0

    return (
        <div className={clsx('relative w-full transition-all duration-200', className , isActive ? 'mt-[20px]' : '') }>
            <input
                type={type}
                name={name}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={onChange}

                className={clsx(
                    'w-full px-[16px] h-[44px] text-[16px] text-[#9494A9] font-[Inter] font-normal bg-[#FFFFFF] border border-[#F4F4F8] rounded-full outline-none transition-all duration-200',
                    'placeholder-transparent focus:border-[#7D5DA7]'

                )}
                placeholder={label}
            />

            <label
                className={clsx(classNamPlaceholder,
                    'absolute left-6 text-[13px] text-[#D9D9E2] font-[Inter] font-normal  transition-all duration-200 pointer-events-none',
                    isActive ? 'top-[-22px] left-[0] ' : 'top-[12px]'
                )}
            >
                {label}
                {required && '*'}
            </label>
        </div>
    )
}

export default FloatingInput