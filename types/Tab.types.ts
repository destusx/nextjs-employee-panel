export interface ITab {
    id: number;
    label: string;
}

export interface ITabListProps {
    className?: string;
    selectedId: number;
    tabs: ITab[];
    onClick?: (id: number) => void;
}
