import { motion } from "framer-motion";
import BorderButton from "@/components/ui/BorderButton";
import avatars3 from "../../pages/Onboarding/img/avatars3.png";
import BigText from "./BigText";
import meetingDecor from "@pages/Onboarding/img/icons/meetingDecor.svg";


const discussions = [
    {
        id: 1,
        title: "Улучшить финансовое планирование",
        time: "Идет обсуждение, начато 1 час назад",
        answered: "3 из 5 экспертов ответили",
    },
    {
        id: 2,
        title: "Разработка стратегии маркетинга",
        time: "Идет обсуждение, начато 2 часа назад",
        answered: "2 из 4 экспертов ответили",
    },
];

export default function CurrentDiscussions() {
    return (
        <>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[52px]"
            >
                Текущие обсуждения
            </motion.h2>

            <div className="flex flex-col gap-[12px] mt-[16px]">
                {discussions.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="flex mx-[16px] border border-[#F4F4F8] flex-col p-[16px] bg-[#FFFFFF] rounded-[20px]"
                    >
                        <BigText title={item.title} />

                        <div className="flex mt-[12px] items-center gap-[8px]">
                            <img src={meetingDecor} alt="meeting" />
                            <p className="font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E] opacity-[.6]">
                                {item.time}
                            </p>
                        </div>

                        <div className="mt-[20px] flex gap-[12px] items-center">
                            <img className="max-w-[92px]" src={avatars3} alt="avatars" />
                            <p className="font-normal font-[Inter] text-[14px] leading-[140%] text-[#1E112E]">
                                {item.answered}
                            </p>
                        </div>

                        <BorderButton href={"/"} className="h-[44px] mt-[20px]">
                            Присоединиться
                        </BorderButton>
                    </motion.div>
                ))}
            </div>
        </>
    );
}