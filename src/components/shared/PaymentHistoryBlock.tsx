import { motion } from 'framer-motion';
import BigText from './BigText';
import {expertTemplates} from "@/data/expertCategories.ts";

const payments = [
    { title: 'Оплата подписки', date: '11.05.25', amount: '299₽' },
    { title: 'Оплата подписки', date: '11.05.25', amount: '299₽' },
    { title: 'Оплата подписки', date: '11.05.25', amount: '299₽' }
];

const PaymentHistoryBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className='border border-[#F4F4F8] mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'
        >
            <div className='flex items-center gap-[8px] border border-b-[#F4F4F8] pb-[16px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <i className='icon icon-walletFill transition-all duration-300 text-[19px] bg-[#593983]'></i>
                <BigText title='История платежей' />
            </div>

            <div className='mt-[14px] flex flex-col '>
                {payments.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${index !== expertTemplates.length - 1 ? 'border-b-[#F4F4F8] pb-[14px]' : 'border-[transparent] pb-[0]'} mt-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]`}
                    >
                        <div className='flex items-center justify-between gap-[10px]'>
                            <div>
                                <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] leading-[100%]'>
                                    {item.title}
                                </h3>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[12px] leading-[100%]'>
                                    {item.date}
                                </p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <p className='text-[#1E112E] font-[Inter] font-medium text-[14px] leading-[100%]'>
                                    {item.amount}
                                </p>
                                <button
                                    className='w-[32px] min-w-[32px] h-[32px] cursor-pointer bg-[#FFFFFF] group hover:bg-[#A281CD] transition duration-300 rounded-full border flex justify-center items-center border-[#A281CD52]'
                                >
                                    <i className='icon icon-download group-hover:bg-[white] text-[14px] transition duration-300 bg-[#593983]'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default PaymentHistoryBlock;
