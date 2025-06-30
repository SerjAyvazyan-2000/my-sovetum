import {FC} from "react";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";


interface PopUpError  {
    open?:boolean
    onClose?: any,
}
const PopUpSuccess:FC<PopUpError> = ({open,onClose}) => {

    return <div onClick={onClose} className={`fixed left-[0] bottom-[-100%] transition-all duration-500  w-full h-full bg-[#08002A66] z-50 flex items-end justify-center opacity-[0] invisible ${open ? "opacity-[1] visible bottom-[0] " : '' }`} >
        <div  onClick={(e) => e.stopPropagation()} className="bg-white relative rounded-tl-[32px] rounded-tr-[32px] max-w-[390px] w-full px-[16px] py-[20px] flex flex-col items-center gap-[24px]">

            <button className="absolute cursor-pointer top-[16px] right-[16px] ">
                <i onClick={onClose} className=' hover:bg-[#593983] transition-all duration-500 icon icon-close text-[14px] bg-[#D9D9E2]'></i>
            </button>


            <div className=" flex items-center justify-center ">
              <i className='icon  icon-check_2_fill  text-[67px] bg-[#46CD51]'></i>
            </div>


            <h2 className="text-[20px] font-medium text-[#000000] leading-[100%] text-center">Успешно выполнено</h2>


            <div className="w-full">
                <BlueGradientButton>
                    Закрыть
                </BlueGradientButton>
            </div>

        </div>
    </div>
};

export default PopUpSuccess;