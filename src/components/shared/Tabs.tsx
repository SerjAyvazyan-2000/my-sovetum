import {FC, useState} from 'react';

const tabs = [
    {id: 'finances', label: 'Финансы'},
    {id: 'deposits', label: 'Вклады'},
    {id: 'questions', label: 'Вопросы по работе'},
    {id: 'statistics', label: 'Статистика'},


];

interface Props {
    onClick?: () => void;
}

const  Tabs:FC<Props> = ({onClick})=>{
    const [activeTab, setActiveTab] = useState('finances');

    return <>
            <i onClick={onClick} className='icon cursor-pointer icon-layout_left_line text-[18px] bg-[#D9D9E2] transition-all duration-300 hover:bg-[#593983]'></i>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative group cursor-pointer text-sm font-medium py-2 px-1 transition-all duration-300  
            ${activeTab === tab.id ? 'text-[#593983]' : 'text-[#9494A9] hover:text-[#593983]'}`}
                >
                    {tab.label}
                    <span
                        className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#593983] rounded-t-md 
              transition-transform duration-300 
              ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    ></span>
                </button>
            ))}
        </>

}
export default Tabs;