import React, {useState} from 'react'
import clsx from 'clsx'

interface FloatingTextAreaProps {
    label?: string
    required?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    className?: string
    classNameLabel?: string

    name?: string
}

const FloatingTextarea: React.FC<FloatingTextAreaProps> = ({
                                                               label,
                                                               required = false,
                                                               value = '',
                                                               onChange,
                                                               className = '',
                                                               name,
                                                               classNameLabel
                                                           }) => {
    const [isFocused, setIsFocused] = useState(false)

    const isActive = isFocused || value.length > 0

    return (
        <div className={clsx('relative w-full transition-all duration-200', isActive ? 'mt-[20px]' : '')}>

            <textarea
                name={name}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={onChange}
                className={clsx(
                    'w-full px-[16px] py-[10px] h-[133px] resize-none text-[16px] text-[#9494A9] font-[Inter] font-normal bg-white border border-[#F4F4F8] rounded-[20px] outline-none transition-all duration-200',
                    'placeholder-transparent focus:border-[#7D5DA7]', className
                )}
                placeholder={label}
            >

            </textarea>

            <label
                className={clsx(classNameLabel,
                    'absolute left-6 text-[13px]  font-[Inter] font-normal  transition-all duration-200 pointer-events-none',
                    isActive ? 'top-[-22px] left-[0] ' : 'top-[12px]'
                )}
            >
                {label}
                {required && '*'}
            </label>
        </div>
    )
}

export default FloatingTextarea