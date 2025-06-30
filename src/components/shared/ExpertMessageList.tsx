import { motion } from 'framer-motion'
import {expertMessages, expertTemplates} from '@/data/expertCategories.ts'
import BigText from './BigText'
import SmallText from './SmallText'
import {Link} from "react-router-dom";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
}

export default function ExpertMessageList() {
    return (
        <div  className='flex gap-[16px]  border border-[#F4F4F8] flex-col mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>
            {expertMessages.map((item, i) => (
                <Link to={'/onboarding/expertProfile'}
                    key={item.id}
                      className={`border ${i !== expertTemplates.length - 1 ? 'border-b-[#F4F4F8] pb-[18px]' : 'border-[transparent] pb-[0]'}  border-t-[transparent] border-l-[transparent] border-r-[transparent]`}

                >
                    <motion.div  initial="hidden"
                                 className='flex items-center gap-[12px] group '
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={cardVariants}>

                        <div className='flex group-hover:scale-[1.1] transition duration-300'>
                            <img className='w-[50px] min-w-[50px] h-[50px]' src={item.avatar} alt={item.name} />
                        </div>

                        <div className='w-full cursor-pointer'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title={item.name} />
                                <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                    <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                    <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>{item.rating}</p>
                                </div>
                            </div>

                            <div className='flex w-full mt-[4px] items-center gap-[10px] justify-between'>
                                <SmallText text={item.text} />
                                <div className='flex items-center gap-[5px]'>
                                    <p className='font-normal font-[Inter] text-[12px] leading-[100%] text-[#8C8DA3]'>{item.time}</p>
                                    <i className='icon icon-checks_line text-[18px] bg-[#3BC966]'></i>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </Link>
            ))}
        </div>
    )
}