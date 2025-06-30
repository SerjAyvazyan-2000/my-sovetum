import {FC} from "react";


interface PopUpError  {
    open?:boolean
    onClose?: any,
}
const PopUpError:FC<PopUpError> = ({open,onClose}) => {

    return <div onClick={onClose} className={`fixed left-[0] bottom-[-100%] transition-all duration-500  w-full h-full bg-[#08002A66] z-50 flex items-end justify-center opacity-[0] invisible ${open ? "opacity-[1] visible bottom-[0] " : '' }`} >
        <div  onClick={(e) => e.stopPropagation()} className="bg-white relative rounded-tl-[32px] rounded-tr-[32px] max-w-[390px] w-full px-[16px] py-[20px] flex flex-col items-center gap-[24px]">

            <button className="absolute cursor-pointer top-[16px] right-[16px] ">
                <i onClick={onClose} className=' hover:bg-[#593983] transition-all duration-500 icon icon-close text-[14px] bg-[#D9D9E2]'></i>
            </button>


            <div className=" flex items-center justify-center ">
              <i className='icon  icon-alert_fill  text-[67px] bg-[#F43F5E]'></i>
            </div>


            <h2 className="text-[20px] font-medium text-[#000000] leading-[100%] text-center">Вы уверены, что хотите</h2>


            <div className="flex gap-[8px] w-full">
                <button className="flex-1  transition-all duration-500 cursor-pointer rounded-[99px] h-[44px] bg-[#F43F5E]
                 text-[#FFFFFF] font-medium font-[Inter] font-normal text-[14px] loading-[100%] hover:bg-[#593983]">Да</button>
                <button onClick={onClose}
                    className="flex-1 py-[12px] transition-all duration-500 hover:bg-[#593983] hover:text-[#FFFFFF] cursor-pointer rounded-[99px] border border-[#A281CD52] text-[#593983] font-medium font-[Inter] font-normal text-[14px] loading-[100%]">Нет
                </button>
            </div>

        </div>
    </div>
};

export default PopUpError;