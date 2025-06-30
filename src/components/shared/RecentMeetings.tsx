import { motion } from "framer-motion";
import BorderButton from "@/components/ui/BorderButton";
import BigText from "./BigText";

const meetings = [
    {
        id: 1,
        title: "Улучшить финансовое планирование",
        rating: "5.0",
        text: "Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон. Струя, если рассматривать ",
    },
    {
        id: 2,
        title: "Разработка стратегии роста",
        rating: "4.8",
        text: "Вихрь тормозит аксиальный гравитационный параллакс, что наблюдается только при очень высоких скоростях.",
    },
];

export default function RecentMeetings() {
    return (
        <>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[28px]"
            >
                Недавние совещания
            </motion.h2>

            <div className="flex flex-col gap-[12px] mt-[16px]">
                {meetings.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex mx-[16px] border border-[#F4F4F8] flex-col p-[16px] bg-[#FFFFFF] rounded-[20px]"
                    >
                        <div className="flex items-center gap-[10px] justify-between">
                            <BigText title={item.title} className="max-w-[274px]" />
                            <div className="flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]">
                                <i className="icon icon-star text-[11px] bg-[#FFD650]"></i>
                                <p className="font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]">
                                    {item.rating}
                                </p>
                            </div>
                        </div>

                        <p className="font-normal mt-[16px] font-[Inter] text-[12px] leading-[140%] text-[#1E112E] opacity-[.6]">
                            {item.text}
                        </p>

                        <BorderButton href={"/onboarding/resultsMeeting"} as={'a'} className="h-[44px] mt-[20px]">
                            Посмотреть результаты
                        </BorderButton>
                    </motion.div>
                ))}
            </div>
        </>
    );
}