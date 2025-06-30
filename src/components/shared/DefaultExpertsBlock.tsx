import { motion } from 'framer-motion'
import { defaultExperts } from '@/data/expertCategories.ts'
import BigText from './BigText'
import { ToggleSwitch } from './ToggleSwitch'
import {Link} from "react-router-dom";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
}

interface Props {
    title?: string
    onClick?: () => void
}

export default function DefaultExpertsBlock({ title = '' ,onClick }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="border border-[#F4F4F8] mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]"
        >
            <div className="flex items-center gap-[8px]">
                <i className="icon icon-user-fill transition-all duration-300 text-[15px] bg-[#593983]"></i>
                <BigText title={title} />
            </div>

            {defaultExperts.map((expert, i) => (
                <motion.div
                    key={expert.id}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={itemVariants}
                    className={`mt-[18px] border-b border-b-[#F4F4F8]  ${i === defaultExperts.length - 1 ? '!border-b-0 pb-[0] pb-[0]' : ' pb-[18px]'}`}
                >
                    <div className="flex items-center gap-[12px]">
                        <Link to={'/onboarding/chatWithExpert'} className="flex">
                            <img className="w-[40px] min-w-[40px] h-[40px]" src={expert.avatar} alt={expert.name} />
                        </Link>

                        <Link to={'/onboarding/chatWithExpert'} className="w-full">
                            <div className="flex w-full items-center gap-[10px] justify-between">
                                <BigText title={expert.name} />
                            </div>
                            <div className="flex w-full mt-[4px] items-center gap-[10px] justify-between">
                                <p className="font-normal font-[Inter] text-[14px] leading-[100%] text-[#9494A9]">{expert.role}</p>
                            </div>
                        </Link>

                        <div className="flex items-center gap-[10px]">
                            <ToggleSwitch />
                            <i onClick={onClick} className="icon cursor-pointer icon-setting text-[15px] transition-all duration-300 bg-[#9494A9] hover:bg-[#593983]"></i>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}