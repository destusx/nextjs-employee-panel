import TabPage from '@/components/Tab/TabContent';

export default function Home() {
    return (
        <main className="bg-main-bg bg-no-repeat bg-center bg-cover h-screen relative">
            <div className="absolute bg-base-bg-color w-[1034px] h-[836px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg border-2 border-base-border-color pt-6 pb-5 px-6">
                <TabPage />
            </div>
        </main>
    );
}
