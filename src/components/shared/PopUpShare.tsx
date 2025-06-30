import {FC} from "react";


interface PopUpError {
    open?: boolean
    onClose?: any,
}

const PopUpShare: FC<PopUpError> = ({open, onClose}) => {

    return <div onClick={onClose}
                className={`fixed left-[0] bottom-[-100%] transition-all duration-500  w-full h-full bg-[#08002A66] z-50 flex items-end justify-center opacity-[0] invisible ${open ? "opacity-[1] visible bottom-[0] " : ''}`}>
        <div onClick={(e) => e.stopPropagation()}
             className="bg-white relative rounded-tl-[32px] rounded-tr-[32px] max-w-[390px] w-full px-[14px] pt-[35px] pb-[20px]  gap-[24px]">

            <div className='absolute top-[8px] left-[170px] w-[50px] rounded-[4px] bg-[#CBD5E1] h-[3px]'></div>

            <div className='cursor-pointer flex flex-col gap-[26px]'>
                <div className="flex items-center group gap-[14px] ">
                    <i className='icon  icon-share_forward_line group-hover:bg-[#593983] transition duration-300  text-[19px] bg-[#1E112E]'></i>
                    <p className='text-[#1E112E] font-[Inter] group-hover:text-[#593983] transition duration-300  text-[14px] loading-[100%] font-semibold'>Поделиться
                        экспертом</p>
                </div>

                <div className="cursor-pointer flex items-center group gap-[14px] ">
                    <i className='icon  icon-copy_2_line group-hover:bg-[#593983] transition duration-300   text-[19px] bg-[#1E112E]'></i>
                    <p className='text-[#1E112E] font-[Inter] group-hover:text-[#593983] transition duration-300  text-[14px] loading-[100%] font-semibold'>Дублировать
                        эксперта</p>
                </div>

                <div className="cursor-pointer flex items-center group gap-[14px] ">
                    <i className='icon  icon-edit_3_line group-hover:bg-[#593983] transition duration-300  text-[19px] bg-[#1E112E]'></i>
                    <p className='text-[#1E112E] font-[Inter] group-hover:text-[#593983] transition duration-300  text-[14px] loading-[100%] font-semibold'>Редактировать
                        эксперта</p>
                </div>

                <div className="cursor-pointer flex items-center group gap-[14px] ">
                    <i className='icon  icon-delete_3_line group-hover:bg-[#593983] transition duration-300   text-[19px] bg-[#F43F5E]'></i>
                    <p className='text-[#F43F5E] font-[Inter] group-hover:text-[#593983] transition duration-300 text-[14px] loading-[100%] font-semibold'>Удалить эксперта</p>
                </div>



            </div>


        </div>
    </div>
};

export default PopUpShare;