import {FC, useState} from "react";

import {Link} from "react-router-dom";
import BigText from "@components/shared/BigText.tsx";
import chatImg2 from "@pages/Onboarding/img/chatImg2.png";
import pageDecor2 from "@pages/Onboarding/img/pageDecor2.png";
import SendButton from "@components/ui/SendButton.tsx";
import {SegmentedSwitch} from "@components/shared/SegmentedSwitch.tsx";
import PopUpMenu from "@/components/shared/PopUpMenu";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";

const ChatWithExpert: FC = () => {
    const  options = ["Обсуждение","Повестка" ,"Материалы", "Выводы"]

    const [modalMenu, setModalMenu] = useState<boolean>(false)

    const handleMenuModal =()=>{
        setModalMenu(!modalMenu)
    }

    return <div className='relative z-[3]   '>
        <ScrollToTop />


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='py-[24px] sticky top-[10px] z-[2]  px-[16px] shadow-[0px 4px 20px 0px #59398329] bg-[#FDFAFF]   '>
            <div className='flex items-center gap-[17px]'>
                <Link className='flex' to={'/onboarding/improveFinancial'}>
                    <i className='icon icon-arrow hover:bg-[#593983] transition duration-300 icon-arrow bg-[#9494A9] bg-[#9494A9] cursor-pointer text-[18px] rotate-[180deg]'></i>
                </Link>

                <div className='flex items-center w-full gap-[12px]'>
                    <div className='w-full'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Улучшить финансовое планиро'/>
                        </div>

                        <div className='flex items-center  mt-[6px] gap-[8px]'>
                            <i className='icon icon-time_fill text-[16px] bg-[#D9D9E2]'></i>
                            <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Идет 23 минуты</p>
                        </div>

                    </div>
                    <div className=' ml-auto flex items-center gap-[10px]'>
                        <i className='icon icon-group cursor-pointer  text-[23px] transition-all duration-300 bg-[#9494A9] hover:bg-[#593983]'></i>
                        <i onClick={handleMenuModal} className='icon cursor-pointer icon-setting text-[15px] transition-all duration-300 bg-[#9494A9] hover:bg-[#593983]'></i>
                    </div>
                </div>
            </div>


            <div className='custom-scroll mt-[12px]      overflow-x-auto overflow-y-hidden bg-[#FFFFFF]  border-b-[#F3F3F4] border-t-[#F3F3F4]'>
                <SegmentedSwitch options={options}/>
            </div>


        </motion.div>



      <div className='relative  overflow-hidden'>
          <motion.div initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.9 }} className='max-h-[420px] p-[16px] no-scrollbar overflow-auto '>
              <div>
                  <img src={chatImg2} alt=""/>
              </div>

          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.9 }} className='custom-scroll px-[16px]  mt-[24px] pb-[5px]   overflow-x-auto overflow-y-hidden   '>
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


          </motion.div>


          <motion.div initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.9 }} className='mt-[10px] mb-[16px] px-[16px]'>
              <div className='w-full shadow-[0px_28px_40px_0px_#5939834D] rounded-[20px] backdrop-blur-[200px]'>
                  <label className='w-full relative  rounded-tl-[20px] h-full rounded-tr-[20px]'>
                      <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 peer-focus:opacity-[0]">
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
                          <i className='icon icon-classify text-[20px] hover:bg-[#A281CD] transition-all duration-300 cursor-pointer bg-[#593983]'></i>
                          <i className='icon icon-close_circle text-[20px] hover:bg-[#A281CD] transition-all duration-300 cursor-pointer bg-[#9494A9]'></i>



                      </div>

                      <div className='flex items-center gap-[12px] '>
                          <p className='text-[#1E112E] font-[inter] text-[12px] opacity-[.4] loading-[140%] font-normal'>0/300</p>
                          <SendButton/>
                      </div>
                  </div>
              </div>
          </motion.div>


          <div className='absolute w-full  h-full left-[0] top-[0] z-[-1]'>
              <img className='w-full h-full' src={pageDecor2} alt=""/>
          </div>

      </div>
        <PopUpMenu onClose={handleMenuModal} open={modalMenu}/>
    </div>
};

export default ChatWithExpert;