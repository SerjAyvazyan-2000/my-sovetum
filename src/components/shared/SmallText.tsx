import React from 'react'

interface Props {
    text: string
    className?: string
}

const SmallText: React.FC<Props> = ({text, className}) => {

    return <>
        <p className={`font-normal font-[Inter] text-[12px] leading-[140%] opacity-[.6] text-[#1E112E] ${className}`}>
            {text}
        </p>

    </>
}

export default SmallText