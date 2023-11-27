'use client';
import EmployeeList from './Employee/EmployeeList';
import Button from './Button';
import EditForm from './TaskForm/EditForm';
import { useState } from 'react';
import AddForm from './AddForm/AddForm';

const MainContent = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddFormToggle = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <div className="flex gap-x-4 items-start">
            <div className="w-[296px] overflow-hidden">
                <div className="relative">
                    <div className="max-h-[616px] overflow-y-auto overflow-x-hidden">
                        {showAddForm && (
                            <AddForm handleAddFormToggle={handleAddFormToggle} />
                        )}

                        <EmployeeList />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-[#292930] to-[#292930] pointer-events-none" />
                </div>

                <Button
                    onClick={handleAddFormToggle}
                    label="Создать новую должность"
                />
            </div>
            <div>
                <EditForm />
            </div>
        </div>
    );
};

export default MainContent;
