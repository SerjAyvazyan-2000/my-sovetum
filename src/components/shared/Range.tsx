import {FC, useState} from "react";


interface Props {
    text?: string;
}

export const Range:FC<Props> = ({text}) => {
    const [enabled, setEnabled] = useState(false);

    return <div  onClick={() => setEnabled(!enabled)} className='flex group   cursor-pointer gap-[12px] items-center '>
        <div
            className={`w-[20px] h-[20px] min-w-[20px] border   p-[10px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
                enabled ? "border-[#593983] " : "border-[#D9D9E2]"
            }`}
        >
            <div className={`w-[12px] rounded-full min-w-[12px] h-[12px] bg-[#593983] transition-all duration-300 ${enabled ? "opacity-[1]" : "opacity-[0]"
            }`}></div>

        </div>
        <p className='font-medium text-[14px] group-hover:text-[#593983]  transition duration-300 leading-[100%] text-[#1E112E]'>{text}</p>

    </div>
};