import { ITabListProps } from '@/types/Tab.types';

const TabList = ({ selectedId, tabs, onClick }: ITabListProps) => {
    return (
        <div className={`flex`}>
            {tabs.map(tab => {
                const isSeletedTab = tab.id === selectedId;
                const selectedTabClass = isSeletedTab
                    ? 'text-[#6764F1] border-b-0 shadow-[inset_0_4px_8px_0_rgba(103,100,241,0.16)]'
                    : 'text-[#9C9CB0] border-b-2';
                return (
                    <div
                        key={tab.id}
                        className={`flex-1 text-center border-base-border-color border-x rounded-t-lg hover:shadow-[inset_0_4px_8px_0_rgba(103,100,241,0.16)] transition ${selectedTabClass}`}
                        onClick={() => onClick && onClick(tab.id)}
                    >
                        <div
                            className={`text-sm py-3.5 px-6 cursor-pointer transition`}
                        >
                            {tab.label}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TabList;
