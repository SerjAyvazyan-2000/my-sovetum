import { useState } from "react";

const colors = [
    "#593983",
    "#E9489B",
    "#EA373A",
    "#E4B92B",
    "#51C951",
    "#48C9B3",
    "#53BDEA",
    "#5D54DD",
];

export const ColorPicker = () => {
    const [activeColor, setActiveColor] = useState<string | null>('#593983');

    return (
        <div className="mt-[14px] flex items-center gap-[5px] flex-wrap">
            {colors.map((color) => (
                <div
                    key={color}
                    onClick={() => setActiveColor(color)}
                    style={{
                        border: activeColor === color ? `1px solid ${color}` : "1px solid transparent",
                    }}
                    className="w-[38px] h-[38px] rounded-full border-[1px] border-white flex items-center justify-center cursor-pointer"
                >
                    <div
                        className="w-[32px]  h-[32px] rounded-full relative"
                        style={{
                            backgroundColor: color,
                        }}
                    >
                        {activeColor === color && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[16px] h-[16px] text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};