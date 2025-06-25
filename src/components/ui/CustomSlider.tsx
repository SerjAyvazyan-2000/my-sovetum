import * as Slider from '@radix-ui/react-slider'
import {FC, useState} from 'react'
import SmallText from "@components/shared/SmallText.tsx";

interface Props {
    title: string;
    startValue: number;
    clues?: boolean;
    clueLeft?:string;
    clueRight?:string;

}


const ExpertSlider:FC<Props> = ({title,startValue,clues,clueLeft,clueRight}) => {
    const [value, setValue] = useState<number[]>([startValue])

    return (
        <div className="w-full border-l-[transparent] border-r-[transparent] border-t-[transparent]  border border-b-[#F4F4F8] pb-[14px]">
            {/* Верхняя часть: заголовок и значение */}

            <div className="flex justify-between items-center mb-[8px]">
                <SmallText text={title} className='opacity-[1] text-[14px]'/>

                {!clues &&
                    <p className=" text-[14px] leading-[100%] font-normal font-[Inter] ">
                        <span className='text-[#1E112E]'>{value[0]}</span>
                        <span className='text-[#D9D9E2]'>/10</span>
                    </p>
                }

            </div>

            {/* Сам слайдер */}
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-[12px]"
                value={value}
                onValueChange={(val) => setValue(val)}
                max={10}
                min={0}
                step={1}
            >
                <Slider.Track className="bg-[#F4F4F8] relative grow rounded-full h-[4px]">
                    <Slider.Range className="absolute bg-[#593983] rounded-full h-full"/>
                </Slider.Track>
                <Slider.Thumb
                    className="block w-[14px] h-[14px] bg-white border-2 border-[#593983] rounded-full shadow-md transition-colors duration-300 hover:bg-[#A281CD] focus:outline-none"
                    aria-label="Slider value"
                />
            </Slider.Root>
            {clues &&
                <div className='flex items-center mt-[4px] justify-between gap-[10px]'>
                    <p className='text-[12px] text-[#9494A9] leading-[100%] font-normal font-[Inter] loading-[100%]'>{clueLeft} </p>
                    <p className='text-[12px] text-[#9494A9] leading-[100%] font-normal font-[Inter] loading-[100%]'>{clueRight} </p>
                </div>
            }

        </div>
    )
}

export default ExpertSlider