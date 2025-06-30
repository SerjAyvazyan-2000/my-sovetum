import { motion } from 'framer-motion'
import { notificationSettings } from '@/data/expertCategories.ts'
import BigText from './BigText'
import { ToggleSwitch } from './ToggleSwitch'

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.3 },
    }),
}

export default function NotificationSettings() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-[16px] border border-[#F4F4F8] mx-[16px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]"
        >
            <div className="pb-[18px]">
                <div className="flex items-center gap-[8px]">
                    <i className="icon icon-bell_ringing_fill transition-all duration-300 text-[20px] bg-[#593983]"></i>
                    <BigText title="Уведомления" />
                </div>
            </div>

            {notificationSettings.map((item, i) => (
                <motion.div
                    key={item.id}
                    className={`flex items-center justify-between pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent] ${
                        i !== notificationSettings.length - 1 ? 'border-b border-b-[#F4F4F8]' : ''
                    }`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <p className="font-[Inter] text-[#1E112E] font-normal text-[14px] leading-[100%]">{item.label}</p>
                    <ToggleSwitch />
                </motion.div>
            ))}
        </motion.div>
    )
}