import {FC} from "react";


interface PopUpError {
    open?: boolean
    onClose?: any,
}

const PopUpMenu: FC<PopUpError> = ({open, onClose}) => {

    return <div onClick={onClose}
                className={`fixed left-[0] bottom-[-100%] transition-all duration-500  w-full h-full bg-[#08002A66] z-50 flex items-end justify-center opacity-[0] invisible ${open ? "opacity-[1] visible bottom-[0] " : ''}`}>
        <div onClick={(e) => e.stopPropagation()}
             className="bg-white relative rounded-tl-[32px] rounded-tr-[32px] max-w-[390px] w-full px-[12px] pt-[35px] pb-[20px]  gap-[24px]">

            <div className='absolute top-[8px] left-[170px] w-[50px] rounded-[4px] bg-[#CBD5E1] h-[3px]'></div>

            <div className='cursor-pointer flex flex-col gap-[26px]'>
                <p className='text-[#1E112E] hover:text-[#A281CD] transition duration-300 font-[Inter] text-[14px] loading-[100%] font-semibold'>Пункт меню 1</p>

                <p className='text-[#1E112E] hover:text-[#A281CD] transition duration-300 font-[Inter] text-[14px] loading-[100%] font-semibold'>Пункт меню 2</p>
                <p className='text-[#1E112E] hover:text-[#A281CD] transition duration-300 font-[Inter] text-[14px] loading-[100%] font-semibold'>Пункт меню 3</p>
                <p className='text-[#1E112E] hover:text-[#A281CD] transition duration-300 font-[Inter] text-[14px] loading-[100%] font-semibold'>Пункт меню 4</p>




            </div>


        </div>
    </div>
};

export default PopUpMenu;