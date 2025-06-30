import { motion } from 'framer-motion'
import { meetings } from '@/data/expertCategories.ts'
import BigText from './BigText'
import SmallText from './SmallText'
import {Link} from "react-router-dom";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
}

export default function MeetingList() {
    return (
        <div className='mt-[16px] max-h-[180px] overflow-auto no-scrollbar pb-[80px]'>
            <div className='flex gap-[16px] border border-[#F4F4F8] flex-col p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                {meetings.map((meet, i) => (
                    <motion.div
                        key={meet.id}
                        className='pb-[16px] border-b border-[#F4F4F8] flex gap-[12px] items-center'
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                    >
                        <div className='flex'>
                            <img className='max-w-[72px] h-[32px]' src={meet.image} alt={meet.title} />
                        </div>

                        <div>
                            <BigText title={meet.title} />
                            <SmallText text={meet.subtitle} className='mt-[2px]' />
                        </div>

                        <Link to={'/onboarding/expertMeetings'}
                              className='w-[32px] h-[32px] ml-auto flex items-center justify-center rounded-full cursor-pointer rose-gradient'

                        >
                            <i className='icon icon-arrow text-[12px] bg-[#593983]'></i>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}