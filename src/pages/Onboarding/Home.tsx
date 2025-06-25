import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";

import avatar from './img/avatar.png'
import avatarOnline from './img/avatarOnline.png'
import  meeting from './img/meeting.png'
import  meeting2 from './img/meeting2.png'


import BlockTitle from "@components/shared/BlockTitle.tsx";
import BigText from "@components/shared/BigText.tsx";
import SmallText from "@components/shared/SmallText.tsx";
import Menu from "@components/shared/menu.tsx";
import {Link} from "react-router-dom";

const Home: FC = () => {
    return <div className='min-h-[725px] relative  overflow-hidden  bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px]  pb-[20px]'>


        <div className=' px-[16px] flex  justify-between items-center'>
            {/*Заголовок*/}
            <div>
                <PageHeading subtitle="Добро пожаловать," title="Степан!"/>
            </div>

            {/*Аватар*/}
            <div className='gap-[8px]  flex items-center '>
                <div
                    className='w-[44px] h-[44px] cursor-pointer rounded-full bg-[linear-gradient(180deg,_#FFFFFF_0%,_#A281CD_196.87%)] flex items-center justify-center relative'>
                    <i className='icon icon-notification text-[16px] bg-[#593983]'></i>
                    <div
                        className='absolute right-[0] top-[0] w-[20px] h-[20px] bg-[#FF5757] text-[14px] text-[#FFFFFF] font-[Inter] font-semibold rounded-full flex items-center justify-center'>1
                    </div>
                </div>
                <div className='flex w-[44px] h-[44px] cursor-pointer '>
                    <img className='rounded-full' src={avatar} alt=""/>
                </div>
            </div>

        </div>

        {/*Категории*/}

        <div className='mt-[24px] pl-[16px]  no-scrollbar   overflow-x-auto overflow-y-hidden'>
            <div className='flex gap-[8px] min-w-max w-fit'>
                <Link to={'/onboarding/createExpert'}
                    className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full border flex justify-center items-center border-[#A281CD52]'>
                    <i className='icon icon-plus text-[14px] bg-[#9494A9]'></i>
                </Link>

                <div
                    className='flex items-center gap-[10px] bg-[linear-gradient(0deg,_#493E56,_#493E56)] py-[14px] px-[13px] rounded-full text-white min-w-max'>
                    <i className='icon icon-calendar text-[15px] bg-[gray]'></i>
                    <p className='font-[Inter] font-normal text-[14px] text-[#FFFFFF]'>Планирование дня</p>
                </div>

                <div
                    className='flex items-center gap-[10px] cursor-pointer bg-[#FFFFFF] rounded-full border  border-[#A281CD52] py-[12px] px-[12px] '>
                    <i className='icon icon-cashFill opacity-[.6] text-[15px] bg-[#593983]'></i>
                    <p className='font-[Inter] font-normal text-[14px] text-[#593983]'>Финансовый вопрос</p>


                </div>


            </div>
        </div>


        {/*Эксперты*/}
        <div className='mt-[35px] px-[16px]'>
            <BlockTitle title='Эксперты'/>

            <div className='flex gap-[16px] border border-[#F4F4F8] flex-col mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                {/*Эксперты ITEM*/}
                <div className='pb-[16px] border border-t-[transparent] border-l-[transparent] border-r-[transparent]   border-b-[#F4F4F8] flex items-center gap-[12px]'>
                    <div className='flex'>
                        <img className='w-[50px] min-w-[50px] h-[50px]' src={avatarOnline} alt=""/>
                    </div>

                    <div className='w-full'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Степан'/>
                            <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>5.0</p>
                            </div>
                        </div>

                        <div className='flex w-full mt-[4px] items-center gap-[10px] justify-between'>
                            <SmallText text={'Фотон отталкивает резонатор...'}/>

                            <div className='flex items-center gap-[5px]'>
                                <p className='font-normal font-[Inter] text-[12px] leading-[100%] text-[#1E112E]'>16:00</p>
                                <i className='icon icon-checks_line text-[18px] bg-[#3BC966]'></i>
                            </div>

                        </div>


                    </div>


                </div>

                <div className='pb-[16px] border border-t-[transparent] border-l-[transparent] border-r-[transparent]   border-b-[#F4F4F8] flex items-center gap-[12px]'>
                    <div className='flex'>
                        <img className='w-[50px] min-w-[50px] h-[50px]' src={avatarOnline} alt=""/>
                    </div>

                    <div className='w-full'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Степан'/>
                            <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>5.0</p>
                            </div>
                        </div>

                        <div className='flex w-full mt-[4px] items-center gap-[10px] justify-between'>
                            <SmallText text={'Фотон отталкивает резонатор...'}/>

                            <div className='flex items-center gap-[5px]'>
                                <p className='font-normal font-[Inter] text-[12px] leading-[100%] text-[#1E112E]'>16:00</p>
                                <i className='icon icon-checks_line text-[18px] bg-[#3BC966]'></i>
                            </div>

                        </div>


                    </div>


                </div>
                <div className='pb-[16px] border border-t-[transparent] border-l-[transparent] border-r-[transparent]   border-b-[#F4F4F8] flex items-center gap-[12px]'>
                    <div className='flex'>
                        <img className='w-[50px] min-w-[50px] h-[50px]' src={avatarOnline} alt=""/>
                    </div>

                    <div className='w-full'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Степан'/>
                            <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>5.0</p>
                            </div>
                        </div>

                        <div className='flex w-full mt-[4px] items-center gap-[10px] justify-between'>
                            <SmallText text={'Фотон отталкивает резонатор...'}/>

                            <div className='flex items-center gap-[5px]'>
                                <p className='font-normal font-[Inter] text-[12px] leading-[100%] text-[#1E112E]'>16:00</p>
                                <i className='icon icon-checks_line text-[18px] bg-[#3BC966]'></i>
                            </div>

                        </div>


                    </div>


                </div>



            </div>
        </div>

        {/* совещания*/}

        <div className='mt-[28px] px-[16px]'>
            <BlockTitle title='Идут совещания'/>


            <div className=' mt-[16px] max-h-[180px] no-scrollbar overflow-auto pb-[80px]'>
                <div className='flex gap-[16px] border border-[#F4F4F8] flex-col  p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                    {/*Эксперты ITEM*/}
                    <div className='pb-[16px] border border-t-[transparent] border-l-[transparent] border-r-[transparent]   border-b-[#F4F4F8] flex  gap-[12px]'>
                        <div className='flex'>
                            <img className='max-w-[72px]  h-[32px]' src={meeting} alt=""/>
                        </div>

                        <div>
                            <BigText title='Совещание 1'/>
                            <SmallText text={'Обсуждение'} className='mt-[2px]'/>
                        </div>

                        <div className='w-[32px] cursor-pointer  h-[32px] flex items-center justify-center  ml-auto rounded-full light-gradient'>
                            <i className='icon icon-arrow text-[12px]  bg-[#593983]'></i>
                        </div>



                    </div>

                    <div className='pb-[16px] border border-t-[transparent] border-l-[transparent] border-r-[transparent]   border-b-[#F4F4F8] flex  gap-[12px]'>
                        <div className='flex'>
                            <img className='max-w-[72px]  h-[32px]' src={meeting2} alt=""/>
                        </div>

                        <div>
                            <BigText title='Совещание 2'/>
                            <SmallText text={'Обсуждение'} className='mt-[2px]'/>
                        </div>

                        <div className='w-[32px] cursor-pointer  h-[32px] flex items-center justify-center  ml-auto rounded-full light-gradient'>
                            <i className='icon icon-arrow text-[12px]  bg-[#593983]'></i>
                        </div>



                    </div>

                    <div className='pb-[16px] border border-t-[transparent] border-l-[transparent] border-r-[transparent]   border-b-[#F4F4F8] flex  gap-[12px]'>
                        <div className='flex'>
                            <img className='max-w-[72px]  h-[32px]' src={meeting} alt=""/>
                        </div>

                        <div>
                            <BigText title='Совещание 1'/>
                            <SmallText text={'Обсуждение'} className='mt-[2px]'/>
                        </div>

                        <div className='w-[32px] cursor-pointer  h-[32px] flex items-center justify-center  ml-auto rounded-full light-gradient'>
                            <i className='icon icon-arrow text-[12px]  bg-[#593983]'></i>
                        </div>



                    </div>

                </div>
            </div>


            <Menu/>
        </div>




    </div>
};

export default Home;