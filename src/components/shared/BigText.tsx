import React from 'react'

interface Props {
    title: string
    className?: string
}

const BigText: React.FC<Props> = ({title, className}) => {

    return <>
        <h3 className={`font-medium text-[16px] leading-[100%] text-[#000000] ${className}`}>
            {title}

        </h3>
    </>
}

export default BigText