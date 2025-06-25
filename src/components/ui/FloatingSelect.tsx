import React, { useState } from 'react'
import clsx from 'clsx'

interface Option {
    label: string
    value: string
}

interface FloatingSelectProps {
    label: string
    required?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    options: Option[]
    className?: string
    name?: string
}

const FloatingSelect: React.FC<FloatingSelectProps> = ({
                                                           label,
                                                           required = false,
                                                           value = '',
                                                           onChange,
                                                           options,
                                                           className = '',
                                                           name
                                                       }) => {
    const [isFocused, setIsFocused] = useState(false)

    const isActive = isFocused || !!value

    return (
        <div className={clsx('relative w-full transition-all duration-200', className , isActive ? 'mt-[20px] ' : '')}>
            <select
                name={name}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={onChange}
                className={clsx(
                    'w-full px-[16px] h-[44px] text-[16px]  text-[#1E112E] bg-white font-[Inter] font-normal border border-[#F4F4F8] rounded-full appearance-none outline-none transition-all duration-200',
                    'placeholder-transparent pr-10 focus:border-[#7D5DA7]'
                )}
            >
                <option value="" disabled hidden></option>
                {options.map((opt,index) => (
                    <option key={index} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <label
                className={clsx(
                    'absolute left-6 text-[13px] text-[#D9D9E2] font-[Inter] font-normal  transition-all duration-200 pointer-events-none',
                    isActive ? 'top-[-20px] left-[0] text-[12px]' : 'top-[12px]'
                )}
            >
                {label}
                {required && ' *'}
            </label>

            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">

              <i className={clsx('icon icon-arrow bg-[#9494A9] text-[11px] rotate-[90deg] transition-all duration-200',isActive ? 'rotate-[270deg] ' : '')}></i>
            </div>
        </div>
    )
}

export default FloatingSelect