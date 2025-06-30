import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";

import avatar from './img/avatar.png'



import BlockTitle from "@components/shared/BlockTitle.tsx";

import Menu from "@components/shared/Menu.tsx";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import MeetingList from "@/components/shared/MeetingList";
import ExpertMessageList from "@/components/shared/ExpertMessageList";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";

const Home: FC = () => {
    return <div className='min-h-[725px] relative  overflow-hidden  bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px]  pb-[20px]'>
        <ScrollToTop />


        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.4 }} className=' px-[16px] flex  justify-between items-center'>

            <div>
                <PageHeading subtitle="Добро пожаловать," title="Степан!"/>
            </div>

            <div className='gap-[8px]  flex items-center '>
                <div className='w-[44px] h-[44px] rose-gradient cursor-pointer rounded-full  flex items-center justify-center relative'>
                    <i className='icon transition duration-300 icon-notification text-[16px] bg-[#593983]'></i>
                    <div
                        className='absolute right-[7px] top-[7px] w-[14px] h-[14px] bg-[#FF5757] text-[10px] text-[#FFFFFF] font-[Inter] font-semibold rounded-full flex items-center justify-center'>1
                    </div>
                </div>
                <div className='flex hover:scale-[1.1] transition duration-300 w-[44px] h-[44px] cursor-pointer '>
                    <img className='rounded-full' src={avatar} alt=""/>
                </div>
            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 ,delay:.5 }} className='mt-[24px] pl-[16px]   custom-scroll   overflow-x-auto overflow-y-hidden'>
            <div className='flex gap-[8px] min-w-max w-fit'>
                <Link to={'/onboarding/createExpert'}
                    className='w-[44px] min-w-[44px] border-hover h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full border flex justify-center items-center border-[#A281CD52]'>
                    <i className='icon icon-plus text-[14px] bg-[#9494A9] transition duration-300'></i>
                </Link>

                <button className='flex h-[44px] items-center gap-[10px] cursor-pointer  bg-[linear-gradient(0deg,_#493E56,_#493E56)] py-[14px] px-[13px] rounded-full text-white min-w-max'>
                    <i className='icon icon-calendar text-[15px] bg-[gray]'></i>
                    <p className='font-[Inter] font-normal text-[14px] text-[#FFFFFF]'>Планирование дня</p>
                </button>

                <button
                    className='flex h-[44px] items-center gap-[10px] border-hover cursor-pointer bg-[#FFFFFF] rounded-full border  border-[#A281CD52] py-[12px] px-[12px] '>
                    <i className='icon icon-cashFill opacity-[.6] transition duration-300 text-[15px] bg-[#593983]'></i>
                    <p className='font-[Inter] font-normal text-[14px] text-[#593983]'>Финансовый вопрос</p>


                </button>


            </div>
        </motion.div>


        <div className='mt-[35px] px-[16px]'>
            <BlockTitle title='Эксперты'/>


            <ExpertMessageList />

        </div>


        <div className='mt-[28px] px-[16px]'>
            <BlockTitle title='Идут совещания'/>




            <MeetingList />



            <Menu/>
        </div>




    </div>
};

export default Home;