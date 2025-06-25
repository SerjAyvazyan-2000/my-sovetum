// ToggleSwitch.tsx
import { useState } from "react";

export const ToggleSwitch = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div
            onClick={() => setEnabled(!enabled)}
            className={`w-[44px] h-[24px] min-w-[44px] rounded-full cursor-pointer flex items-center px-[2px] transition-all duration-300 ${
                enabled ? "bg-[#593983]" : "bg-gray-300"
            }`}
        >
            <div
                className={`w-[16px] h-[16px] bg-white rounded-full shadow-md transform transition-all duration-300 ${
                    enabled ? "translate-x-[21px]" : "translate-x-[2px]"
                }`}
            ></div>
        </div>
    );
};