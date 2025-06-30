import { motion } from 'framer-motion'
import { expertCategories } from '@/data/expertCategories'

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function ExpertCategoryList() {
    return (
        <motion.div
            className="mt-[32px] max-h-[450px] pb-[50px] overflow-auto flex flex-col gap-[12px] no-scrollbar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {expertCategories.map((cat, i) => (
                <motion.div
                    key={i}
                    className="w-full bg-[#160729] border border-[#A281CD52] rounded-[14px] px-[12px] pt-[12px] pb-[14px] flex flex-col gap-[20px] cursor-pointer"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                    <div className="flex items-center gap-[12px]">
                        <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#7D5DA7] text-white">
                            <i className={`icon icon-${cat.icon} text-[14px] bg-[#FFFFFF]`}></i>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#FFFFFF] text-[16px] font-semibold leading-[100%]">{cat.title}</p>
                            <p className="text-[#FFFFFF] text-[12px] opacity-50 leading-[140%]">{cat.desc}</p>
                        </div>
                    </div>

                    <div className="flex max-w-[175px]">
                        <img src={cat.avatar} alt={cat.title} />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full h-[33px] cursor-pointer flex items-center justify-center border border-[#B397D9]
              rounded-[100px] text-[#B397D9] text-[14px] font-normal transition-all duration-300
              hover:bg-[#A281CD] hover:text-[#1E112E] hover:shadow-md"
                    >
                        Узнать больше
                    </motion.button>
                </motion.div>
            ))}
        </motion.div>
    )
}