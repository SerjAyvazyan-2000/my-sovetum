import React from 'react'

interface Props {
    title: string
    className?: string
}

const BlockTitle: React.FC<Props> = ({title, className}) => {

    return <>
        <h2 className={`font-normal text-[24px] leading-[100%] text-[#1E112E] ${className}`}>
            {title}
        </h2>
    </>
}

export default BlockTitle