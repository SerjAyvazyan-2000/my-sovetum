import { FC } from "react";

const SendButton:FC = () => {
    return <div className='h-[44px] min-w-[44px] group cursor-pointer w-[44px] rounded-full blue-gradient flex items-center justify-center'>
        <i className={'icon icon-send_fill text-[14px] group-hover:bg-[#593983] transition duration-300 bg-[#FFFFFF]'}></i>
    </div>
};

export default SendButton;