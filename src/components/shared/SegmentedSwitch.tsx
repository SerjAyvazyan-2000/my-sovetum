import { useState } from "react";

interface SegmentedSwitchProps {
    title?: string;
    options: string[];
    onChange?: (value: string) => void;
}

export const SegmentedSwitch = ({ title, options, onChange }: SegmentedSwitchProps) => {
    const [active, setActive] = useState(options[0]);

    const handleClick = (value: string) => {
        setActive(value);
        onChange?.(value);
    };

    return (
        <div>
            <p className="font-[Inter] text-[12px] font-normal leading-[100%]">{title}</p>
            <div className="flex w-fit rounded-[64px] mt-[8px] items-center bg-[#E1D7EF] w-fit">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleClick(option)}
                        className={`py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px] flex-1/1 cursor-pointer rounded-[64px] text-[14px] leading-[100%] font-[Inter] font-normal border transition-all duration-300
              ${
                            active === option
                                ? "bg-[#FFFFFF] border-[#A281CD52] text-[#593983]"
                                : "bg-transparent border-transparent text-[#593983] hover:bg-[#FFFFFF] hover:border-[#A281CD52]"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};