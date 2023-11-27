import React, { ReactNode } from 'react';

interface ICheckBoxListProps {
    children: ReactNode;
    title: string;
}

const CheckBoxList = ({ children, title }: ICheckBoxListProps) => {
    return (
        <div className="w-1/2 flex flex-col mb-3">
            <div className="text-xs text-second-color mb-1.5">{title}</div>
            <div>{children}</div>
        </div>
    );
};

export default CheckBoxList;
