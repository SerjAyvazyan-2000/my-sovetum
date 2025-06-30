import { motion } from 'framer-motion'
import { supportActions } from '@/data/expertCategories.ts'
import BigText from './BigText'

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.4 },
    }),
}

export default function SupportSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex mx-[16px] border border-[#F4F4F8] flex-col mt-[12px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]"
        >
            <div className="flex items-center gap-[8px]">
                <i className="icon icon-question_fill transition-all duration-300 text-[20px] bg-[#593983]"></i>
                <BigText title="Поддержка" />
            </div>

            <div className="flex mt-[18px] flex-col gap-[14px]">
                {supportActions.map((action, i) => (
                    <motion.div
                        key={action.id}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={itemVariants}
                        className="p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
              cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983]
              hover:bg-[#593983] hover:text-white"
                    >
                        {action.label}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}