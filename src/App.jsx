import Sidebar from "./components/Sidebar";
import Header from "./sections/Header";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                </div>
            </main>
        </>
    );
}
