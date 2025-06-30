import {FC, useState} from "react";

import {Link} from "react-router-dom";
import avatar2Online from "@pages/Onboarding/img/avatar2Online.png";
import BigText from "@components/shared/BigText.tsx";
import Tabs from "@/components/shared/Tabs";
import chatImg from "@pages/Onboarding/img/chatImg.webp";
import pageDecor2 from "@pages/Onboarding/img/pageDecor2.png";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import {motion} from "framer-motion";
import PopUpShare from "@components/shared/PopUpShare.tsx";
import SendButton from "@/components/ui/SendButton";

const ChatWithExpert: FC = () => {

    const [modalShare, setModalShare] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState('finances');

    const handleShareModal = () => {
        setModalShare(!modalShare)
    }


    let [openLeftBar, setLeftBar] = useState<boolean>(false)

    const tabs = [
        {id: 'finances', label: 'Финансы'},
        {id: 'deposits', label: 'Вклады'},
        {id: 'questions', label: 'Вопросы по работе'},
        {id: 'statistics', label: 'Статистика'},


    ];
    const handleLeftBar = () => {
        setLeftBar(!openLeftBar)
    }


    return <div className='relative z-[2] overflowY-hidden  '>
        <ScrollToTop/>

        {/*Заголовок*/}
        <motion.div initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.9}}
                    className='py-[24px] sticky top-[16px] z-[10] left-[0] w-[100%] px-[16px] flex shadow-[0px 4px 20px 0px #59398329]  bg-[#FDFAFF] items-center gap-[17px] '>
            <Link className='flex' to={'/onboarding/myExperts'}>
                <i className='icon icon-arrow bg-[#9494A9] bg-[#9494A9] hover:bg-[#593983] transition duration-300 cursor-pointer text-[18px] rotate-[180deg]'></i>
            </Link>

            <div className='flex items-center w-full gap-[12px]  transition duration-300'>
                <Link to='/onboarding/expertProfile' className='flex hover:scale-[1.1] transition duration-300'>
                    <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2Online} alt=""/>
                </Link>
                <div className='w-full'>
                    <div className='flex w-full items-center gap-[10px] justify-between'>
                        <BigText title='Анна Маркетолог'/>

                    </div>

                    <div className='flex w-full mt-[4px] items-center gap-[10px] justify-between'>
                        <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                            по SMM</p>
                    </div>

                </div>
                <div className=' ml-auto '>
                    <i onClick={handleShareModal}
                       className='icon cursor-pointer icon-setting text-[15px] transition-all duration-300 bg-[#9494A9] hover:bg-[#593983]'></i>
                </div>

            </div>

        </motion.div>

        <div className={`custom-scroll sticky top-[104px]   px-[16px] transition-all duration-500 ease-in-out    overflow-x-auto overflow-y-hidden bg-[#FFFFFF] 
                 border-b-[#F3F3F4] border-t-[#F3F3F4]   ${openLeftBar ? "opacity-0 max-h-0 pointer-events-none" : "opacity-100 max-h-[200px] pointer-events-auto"}`}>
            <div className='min-w-max w-fit gap-[16px] flex items-center '>
                <Tabs onClick={handleLeftBar}/>
            </div>

        </div>


        <div className='flex items-stretch '>
            <div className={`bg-[white] relative items-start w-[150px]  transition-all duration-500 ease-in-out   z-[1]
             ${!openLeftBar ? "max-w-0 opacity-0 pointer-events-none" : "max-w-[150px] opacity-100"}`}>
                <div className='flex-col flex sticky items-center top-[110px]'>
                    <i onClick={handleLeftBar}
                       className={`icon cursor-pointer icon-layout_left_line text-[18px] bg-[#593983] transition-all duration-300 hover:bg-[#593983] `}></i>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative group cursor-pointer text-[10px] font-medium py-2 px-1 transition-all duration-300  
            ${activeTab === tab.id ? 'text-[#593983]' : 'text-[#9494A9] hover:text-[#593983]'}`}
                        >
                            {tab.label}
                            <span
                                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#593983] rounded-t-md 
              transition-transform duration-300 
              ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                            ></span>
                        </button>
                    ))}
                </div>
            </div>





            <motion.div initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.9}} className='overflow-hidden '>

                <div  className='max-h-[420px] p-[16px] no-scrollbar overflow-auto '>
                    <div>
                        <img src={chatImg} alt=""/>
                    </div>

                </div>

                <div
                            className='custom-scroll px-[16px]  mt-[24px] pb-[5px]   overflow-x-auto overflow-y-hidden   '>
                    <div className='min-w-max w-fit gap-[4px]  flex items-center '>
                        <button
                            className='p-[12px] hover:bg-[#593983] hover:text-[white] transition duration-300 cursor-pointer bg-[#FFFFFF] text-[14px] text-[#593983] font-[Inter] rounded-[16px]'>Расскажи
                            подробнее
                        </button>
                        <button
                            className='p-[12px] hover:bg-[#593983] hover:text-[white] transition duration-300 cursor-pointer bg-[#FFFFFF] text-[14px] text-[#593983] font-[Inter] rounded-[16px]'>Дай
                            конкретный план
                        </button>
                        <button
                            className='p-[12px] hover:bg-[#593983] hover:text-[white] transition duration-300 cursor-pointer bg-[#FFFFFF] text-[14px] text-[#593983] font-[Inter] rounded-[16px]'>Какие
                            есть альтернативы?
                        </button>

                    </div>


                </div>


                <div  className='mt-[10px] mb-[16px] px-[16px]'>
                    <div className='w-full shadow-[0px_28px_40px_0px_#5939834D] rounded-[20px] backdrop-blur-[200px]'>
                        <label className='w-full relative  rounded-tl-[20px] h-full rounded-tr-[20px]'>
                            <div
                                className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 peer-focus:opacity-[0]">
                                <i className='icon icon-inputLine  left-[16px] absolute left-[16px] top-1/2 transform -translate-y-1/2   text-[20px]  bg-[#593983]'></i>
                            </div>

                            <input className='w-full peer  border border-[#F4F4F8]
                    py-[20px] px-[16px] rounded-tl-[20px] pl-[28px]  rounded-tr-[20px] bg-[#F4ECFF] focus:border-[#7D5DA7] outline-none transition-all duration-200'
                                   type="text" placeholder='Сообщение для Анна Маркетолог...'/>
                        </label>

                        <div
                            className='flex items-center w-full px-[16px] rounded-bl-[20px] rounded-br-[20px]  py-[12px] bg-[#FFFFFF]    justify-between gap-[21px]'>
                            <div className='flex items-center gap-[21px]'>
                                <i className='icon icon-attachment_line hover:bg-[#A281CD] transition-all duration-300 text-[20px] cursor-pointer bg-[#593983]'></i>
                                <i className='icon icon-mic text-[20px] hover:bg-[#A281CD] transition-all duration-300 cursor-pointer bg-[#593983]'></i>
                            </div>

                            <div className='flex items-center gap-[12px] '>
                                <p>0/300</p>
                                <SendButton/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='absolute w-full  h-full left-[0] top-[0] z-[-1]'>
                    <img className='w-full h-full' src={pageDecor2} alt=""/>
                </div>
            </motion.div>
        </div>


        <PopUpShare onClose={handleShareModal} open={modalShare}/>


    </div>
};

export default ChatWithExpert;