import { IEmployeeData } from '@/types/Employee.types';
import { ITab } from '@/types/Tab.types';

export const employeeData: IEmployeeData[] = [
    {
        id: 1,
        order: 1,
        position: 'Новобранец',
        amountTasks: 'от 10 lvl',
        tasks: [
            { name: 'sell', label: 'Продавать продукт' },
            { name: 'setPrices', label: 'Выставлять цены' },
            { name: 'purchase', label: 'Закупать сырье' },
            {
                name: 'appointPositions',
                label: 'Назначать должности',
            },
        ],
        salary: 50,
    },
    {
        id: 2,
        order: 2,
        position: 'Рядовой',
        amountTasks: '5 заданий',
        tasks: [
            { name: 'sell', label: 'Продавать продукт' },
            { name: 'purchase', label: 'Закупать сырье' },

            { name: 'expelFromGang', label: 'Выгонять из банды' },
            { name: 'duel', label: 'Дуель' },
            {
                name: 'fileComplaints',
                label: 'Выставлять претензии',
            },
        ],
        salary: 80,
    },
    {
        id: 3,
        order: 3,
        position: 'Сержант',
        amountTasks: '10 заданий',
        tasks: [
            {
                name: 'appointPositions',
                label: 'Назначать должности',
            },
            { name: 'analyze', label: 'Смотреть аналитику' },
            { name: 'assignWorkers', label: 'Назначать рабочих' },
        ],
        salary: 100,
    },
    {
        id: 4,
        order: 4,
        position: 'Новобранец',
        amountTasks: '10 заданий',
        tasks: [{ name: 'assignWorkers', label: 'Назначать рабочих' }],
        salary: 50,
    },
    {
        id: 5,
        order: 5,
        position: 'Рядовой',
        amountTasks: '15 заданий',
        tasks: [
            { name: 'sell', label: 'Продавать продукт' },

            { name: 'purchase', label: 'Закупать сырье' },
            {
                name: 'appointPositions',
                label: 'Назначать должности',
            },
        ],
        salary: 80,
    },
    {
        id: 6,
        order: 6,
        position: 'Сержант',
        amountTasks: '20 заданий',
        tasks: [
            { name: 'purchase', label: 'Закупать сырье' },
            {
                name: 'appointPositions',
                label: 'Назначать должности',
            },
        ],
        salary: 100,
    },
    {
        id: 7,
        order: 7,
        position: 'Новобранец',
        amountTasks: '25 заданий',
        tasks: [
            { name: 'sell', label: 'Продавать продукт' },
            { name: 'setPrices', label: 'Выставлять цены' },
            { name: 'purchase', label: 'Закупать сырье' },
            {
                name: 'appointPositions',
                label: 'Назначать должности',
            },
            { name: 'expelFromGang', label: 'Выгонять из банды' },
        ],
        salary: 50,
    },
];

export const taskData = [
    {
        name: 'trade',
        label: 'Торговля',
        tasks: [
            { name: 'sell', label: 'Продавать продукт' },
            { name: 'setPrices', label: 'Выставлять цены' },
            { name: 'analyze', label: 'Смотреть аналитику' },
        ],
    },
    {
        name: 'production',
        label: 'Производство',
        tasks: [
            { name: 'purchase', label: 'Закупать сырье' },
            { name: 'assignWorkers', label: 'Назначать рабочих' },
        ],
    },
    {
        name: 'conflicts',
        label: 'Разборки',
        tasks: [
            { name: 'duel', label: 'Дуель' },
            {
                name: 'fileComplaints',
                label: 'Выставлять претензии',
            },
        ],
    },
    {
        name: 'management',
        label: 'Управление',
        tasks: [
            {
                name: 'appointPositions',
                label: 'Назначать должности',
            },
            { name: 'expelFromGang', label: 'Выгонять из банды' },
        ],
    },
];

export const tabData: ITab[] = [
    { id: 1, label: 'Иерархия' },
    { id: 2, label: 'Должности' },
    { id: 3, label: 'Список персонала' },
    { id: 4, label: 'Наборы экипировки' },
];
