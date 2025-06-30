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
             white-gradient
             rounded-full text-[#593983]  font-medium uppercase
              leading-[100%] cursor-pointer
             transition-all duration-300 ease-in-out  hover:text-[#3e2767] `}

    >
        {children}

    </Link>
);