import { motion } from 'framer-motion'
import { privacyActions } from '@/data/expertCategories.ts'
import BigText from './BigText'

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.4 },
    }),
}

export default function PrivacySettings() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex mx-[16px]  border border-[#F4F4F8] flex-col mt-[36px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]"
        >
            <div className="flex items-center gap-[8px]">
                <i className="icon icon-message_2_fill transition-all duration-300 text-[20px] bg-[#593983]"></i>
                <BigText title="Данные и приватность" />
            </div>

            <div className="flex mt-[18px] flex-col gap-[14px]">
                {privacyActions.map((action, i) => (
                    <motion.div
                        key={action.id}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={itemVariants}
                        className={`p-[7px]  text-[14px] font-[Inter] font-normal rounded-full border cursor-pointer transition-colors duration-200 flex justify-center
              ${
                            action.danger
                                ? 'text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-white'
                                : 'text-[#593983] hover:bg-[#593983] hover:text-white'
                        }`}
                        style={{
                            borderColor: action.border,
                        }}
                    >
                        {action.label}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}