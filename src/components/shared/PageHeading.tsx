import React from "react";

interface PageHeadingProps {
    title?: string
    subtitle?: string
    reverse?: boolean
    classNameSubtitle?: string
}

const PageHeading: React.FC<PageHeadingProps> = ({
                                                     title,
                                                     subtitle,
                                                     reverse = false,
                                                     classNameSubtitle = '',

                                                 }) => {
    const content: React.ReactNode[] = []

    if (subtitle) {
        content.push(
            <p key="subtitle" className={`font-[Inter] font-normal text-[14px] leading-[140%] opacity-[.6] text-[#1E112E] ${classNameSubtitle}`}>
                {subtitle}
            </p>
        )
    }

    if (title) {
        content.push(
            <h2 key="title" className={`font-normal text-[32px] leading-[100%] text-[#1E112E] `}>
                {title}
            </h2>
        )
    }

    return (
        <div >
            {reverse ? [...content].reverse() : content}
        </div>
    )
}

export default PageHeading