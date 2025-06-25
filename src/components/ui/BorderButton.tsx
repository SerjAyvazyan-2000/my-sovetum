import React from 'react'
import clsx from 'clsx'
import {Link} from "react-router-dom";

interface Props {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    as?: 'button' | 'a' | 'file'
    href: string
    onClick?: () => void
    accept?: string
    onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BorderButton: React.FC<Props> = ({
                                                           children,
                                                           className = '',
                                                           disabled = false,
                                                           as = 'button',
                                                           href,
                                                           onClick,
                                                           accept = 'image/*',
                                                           onFileChange,
                                                       }) => {
    const commonClasses = clsx(
        ' leading-[100%] hover-gradient group w-full z-10  relative  cursor-pointer text-[#593983] border border-[#A281CD52] text-[14px] font-normal font-[Inter] rounded-full transition-all duration-300',
        'bg-[#FFFFFF] flex items-center  gap-[7px] px-[27px]  justify-center hover:text-white',

        className
    )


    if (as === 'a') {
        return (
            <Link to={href} className={commonClasses}>
                <span>{children}</span>
            </Link>
        )
    }

    if (as === 'file') {
        return (
            <label className={commonClasses + ' cursor-pointer'}>
                {children}
                <input
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={onFileChange}
                />
            </label>
        )
    }

    return (
        <button onClick={onClick} disabled={disabled} className={clsx(commonClasses)}>
            {children}
        </button>
    )
}

export default BorderButton