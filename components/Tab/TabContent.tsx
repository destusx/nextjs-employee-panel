'use client';

import { useState } from 'react';
import Tabs from './TabList';
import MainContent from '../MainContent';

import { tabData } from '@/assets/data';

const TabContent = () => {
    const [selectedTabId, setSelectedTabId] = useState<number>(tabData[1].id);

    const handleTabClick = (id: number) => {
        setSelectedTabId(id);
    };

    const renderTabContent = () => {
        switch (selectedTabId) {
            case 1:
                return <div className="text-white">Тут может быть контент</div>;
            case 2:
                return <MainContent />;
            case 3:
                return <div className="text-white">Тут может быть контент</div>;
            case 4:
                return <div className="text-white">Тут может быть контент</div>;
            default:
                return null;
        }
    };

    return (
        <div className="border-2 border-base-border-color rounded-lg overflow-hidden">
            <Tabs
                tabs={tabData}
                selectedId={selectedTabId}
                onClick={handleTabClick}
            />
            <div className=" pt-6 pb-8 px-10">{renderTabContent()}</div>
        </div>
    );
};

export default TabContent;
