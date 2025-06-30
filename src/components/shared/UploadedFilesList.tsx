import { motion } from 'framer-motion'
import { uploadedFiles } from '@/data/expertCategories.ts'
import BigText from './BigText'

const fileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
}

export default function UploadedFilesList() {
    return (
        <div className='mt-[10px]'>
            <BigText title='Загруженные файлы' />

            <div className='mt-[14px] flex gap-[14px] pb-[10px] custom-scroll overflow-x-auto overflow-y-hidden'>
                {uploadedFiles.map((file, i) => (
                    <motion.div
                        key={file.id}
                        className='flex flex-col p-[12px] min-w-[120px] relative border border-[#F4F4F8] rounded-[20px] gap-[14px] w-fit'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fileVariants}
                        custom={i}
                    >
                        <i className={`icon ${file.icon} text-[26px]`} style={{ backgroundColor: file.bgColor }}></i>

                        <i className='icon icon-close text-[10px] absolute top-[15px] right-[15px] cursor-pointer bg-[#9494A9] transition duration-300 hover:scale-125'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>{file.title}</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>{file.size}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}