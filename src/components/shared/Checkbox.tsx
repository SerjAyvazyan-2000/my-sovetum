// ToggleSwitch.tsx
import { useState } from "react";

export const Checkbox = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div
            onClick={() => setEnabled(!enabled)}
            className={`w-[24px] h-[24px] min-w-[24px] border border-[#D9D9E2] rounded-[8px] cursor-pointer flex items-center justify-center transition-all duration-300 ${
                enabled ? "bg-[#593983]" : "bg-[#FFFFFF]"
            }`}
        >
            <i className={`icon icon-check_fill transition-all duration-300 text-[10px] bg-[#FFFFFF] ${enabled ? "opacity-[1]" : "opacity-[0]"} `}></i>

        </div>
    );
};