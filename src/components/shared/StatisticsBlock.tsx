import { motion } from "framer-motion";

const stats = [
    {
        icon: "icon-comment_2_fill",
        label: "Количество диалогов",
        value: "5",
    },
    {
        icon: "icon-alarm_2_fill",
        label: "Общее время общения",
        value: "6ч",
    },
    {
        icon: "icon-star",
        label: "Средняя оценка сообщений",
        value: "5.0",
    },
    {
        icon: "icon-calendar_fill",
        label: "Дата первого диалога",
        value: "5.05.25",
    },
];

export default function StatisticsBlock() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-[12px] bg-[#FFFFFF] px-[16px] pt-[16px] pb-[20px] rounded-[20px] border border-[#F4F4F8]"
        >
            <div className="flex items-center gap-[8px]">
                <i className="icon icon-chart_bar_fill transition-all duration-300 text-[19px] bg-[#593983]"></i>
                <h2 className="text-[16px] text-[#1E112E] font-medium font-[Inter]">Статистика</h2>
            </div>

            <div className="mt-[20px] flex flex-col gap-[20px]">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-[8px] ${
                            index !== stats.length - 1
                                ? "border border-b-[#F4F4F8] border-t-transparent border-l-transparent border-r-transparent pb-[20px]"
                                : ""
                        }`}
                    >
                        <div className="flex items-center gap-[8px]">
                            <i
                                className={`icon ${item.icon} transition-all duration-300 text-[16px] bg-[#D9D9E2]`}
                            ></i>
                            <p className="text-[#1E112E] font-[Inter] font-normal text-[14px] leading-[100%]">
                                {item.label}
                            </p>
                        </div>
                        <span className="ml-auto text-[#9494A9] font-[Inter] font-normal text-[14px] leading-[100%]">
              {item.value}
            </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}