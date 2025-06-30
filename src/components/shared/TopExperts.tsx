import { motion } from "framer-motion";
import avatar2 from "../../pages/Onboarding/img/avatar2.png";
import BigText from "@components/shared/BigText.tsx";
import {Link} from "react-router-dom";

const experts = [
    {
        name: "Елена Фокус",
        dialogs: 45,
        position: 1,
    },
    {
        name: "Елена Фокус",
        dialogs: 45,
        position: 2,
    },
    {
        name: "Елена Фокус",
        dialogs: 45,
        position: 3,
    },
    {
        name: "Елена Фокус",
        dialogs: 45,
        position: 4,
    },
];

export default function TopExpertsBlock() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-[12px] px-[16px]"
        >
            <div className="border border-[#F4F4F8] mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]">
                <div className="flex items-center gap-[8px]">
                    <i className="icon icon-chart_bar transition-all duration-300 text-[15px] bg-[#593983]"></i>
                    <BigText title="Топ экспертов" />
                </div>

                <div className="mt-[18px] flex flex-col gap-[18px]">
                    {experts.map((expert, index) => (
                        <Link to={'/onboarding/expertProfile'}
                            key={index}

                            className="border group border-b-[#F4F4F8] pb-[18px] border-t-transparent border-l-transparent border-r-transparent last:pb-[0]  last:border-b-0"
                        >

                            <div className="flex items-start gap-[12px]">
                                <div className="flex">
                                    <img
                                        className="w-[40px] min-w-[40px] h-[40px]"
                                        src={avatar2}
                                        alt="avatar"
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="flex w-full items-center gap-[10px] justify-between">
                                        <BigText title={expert.name} />
                                    </div>
                                    <div className="w-full mt-[4px]">
                                        <p className="font-normal font-[Inter] text-[14px] leading-[100%] text-[#9494A9]">
                                            {expert.dialogs} диалогов
                                        </p>
                                    </div>
                                </div>

                                <div className="w-[40px] min-w-[40px] h-[40px] text-[#593983] cursor-pointer bg-[#F2EDF8] rounded-full flex justify-center items-center">
                                    {expert.position}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}