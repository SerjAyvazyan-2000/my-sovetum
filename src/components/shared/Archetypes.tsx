
import { motion } from 'framer-motion'
import { archetypes } from '@/data/expertCategories.ts'
import BorderButton from '../ui/BorderButton.tsx'
import BigText from './BigText'
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
}

export default function ArchetypeSelector() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className='flex gap-[16px] border border-[#F4F4F8] mx-[16px] flex-col mt-[36px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'
        >
            <BigText title="Выбор архетипа" />

            <div className='flex flex-col gap-[8px]'>
                {archetypes.map((item, i) => (
                    <motion.div
                        key={item.id}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={itemVariants}
                    >
                        <BorderButton
                            href="/"
                            as="button"
                            className="h-[44px] flex items-center gap-[10px]"
                        >
                            <i className={`icon icon-${item.icon} transition-all duration-300 text-[16px] bg-[#593983]`}></i>
                            {item.title}
                        </BorderButton>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}