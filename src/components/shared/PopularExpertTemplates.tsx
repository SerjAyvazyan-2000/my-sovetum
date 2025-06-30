import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { expertTemplates } from '@/data/expertCategories'
import BigText from './BigText'
import avatar2 from '../../pages/Onboarding/img/avatar2.png'


export default function PopularExpertTemplates({ title = 'Популярные шаблоны экспертов' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='border border-[#F4F4F8] mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'
        >
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-user-fill transition-all duration-300 text-[15px] bg-[#593983]'></i>
                <BigText title={title} />
            </div>

            {expertTemplates.map((expert, index) => (
                <div
                    key={index}
                    className={`border ${index !== expertTemplates.length - 1 ? 'border-b-[#F4F4F8] pb-[18px]' : 'border-[transparent] pb-[0]'} mt-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]`}
                >
                    <div className='flex items-start gap-[12px]'>
                        <Link to={'/onboarding/chatWithExpert'} className='flex'>
                            <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt='' />
                        </Link>
                        <Link to={'/onboarding/chatWithExpert'} className='w-full'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title={expert.name} />
                            </div>

                            <div className='w-full mt-[4px] items-center'>
                                <p className='font-normal font-[Inter] text-[14px] leading-[100%] text-[#9494A9]'>
                                    {expert.description}
                                </p>
                                <div className='flex gap-[14px] items-center'>
                                    <div className='mt-[10px] flex gap-[4px] items-center'>
                                        <i className='icon icon-star text-[13px] bg-[#E9AA36]'></i>
                                        <p className='text-[#9494A9] font-[Inter] text-[14px] font-normal leading-[140%]'>
                                            {expert.rating}
                                        </p>
                                    </div>

                                    <div className='mt-[10px] flex gap-[4px] items-center'>
                                        <i className='icon icon-plus text-[13px] bg-[#D9D9E2]'></i>
                                        <p className='text-[#9494A9] font-[Inter] text-[14px] font-normal leading-[140%]'>
                                            {expert.installs}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link
                            to={'/onboarding/createExpert'}
                            className='w-[32px] min-w-[32px]  h-[32px] cursor-pointer bg-[#FFFFFF] group hover:bg-[#A281CD] transition duration-300 rounded-full border flex justify-center items-center border-[#A281CD52]'
                        >
                            <i className='icon icon-plus group-hover:bg-[white] text-[14px] bg-[#9494A9]'></i>
                        </Link>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}