import React from "react";
import {Link} from "react-router-dom";


type Props = {
    children: React.ReactNode;
    hrefTo?: string;
    className?: string;
};

export const WhiteLink = ({children, hrefTo, className = ''}: Props) => (
    <Link
        to={`${hrefTo}`}
        className={  `${className} flex items-center justify-center gap-2  h-[50px]
             [background:linear-gradient(180deg,_#FFFFFF_0%,_#A281CD_196.87%)]
             [border:2.4px_solid]
             [border-image-source:linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.3)_100%)]
             rounded-full text-[#593983]  font-medium uppercase
             [box-shadow:0px_28px_40px_0px_#5939834D] leading-[100%] cursor-pointer
             transition-all duration-300 ease-in-out hover:brightness-75 hover:shadow-[0px_32px_50px_0px_#59398370] hover:text-[#3e2767] `}

    >
        {children}

    </Link>
);