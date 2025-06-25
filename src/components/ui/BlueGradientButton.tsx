import React from 'react'
import clsx from 'clsx'
import {Link} from "react-router-dom";

interface BlueGradientButtonProps {
    children: React.ReactNode
    onClick?: () => void
    href?: string
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

const BlueGradientButton: React.FC<BlueGradientButtonProps> = ({
                                                                   children,
                                                                   onClick,
                                                                   href,
                                                                   className = '',
                                                                   type = 'button',
                                                                   disabled = false
                                                               }) => {
    const baseClasses = clsx(className,
        'blue-gradient w-full cursor-pointer rounded-full p-[14px] gap-[9px] flex items-center justify-center'


    )

    const content = (
        <p className="font-[Inter] font-normal leading-[100%] text-[14px] text-[#FFFFFF]">
            {children}
        </p>
    )

    if (href) {
        return (
            <Link to={href} className={baseClasses}>
                {content}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
            {content}
        </button>
    )
}

export default BlueGradientButton