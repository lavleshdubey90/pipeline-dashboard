import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="h-dvh w-full flex flex-1 p-5 gap-5">
      <Sidebar />
      <div className="flex flex-col w-full gap-5">
        <Header />
        <h1 className="text-5xl font-bold">Dashboard</h1>
      </div>
    </main>
  );
}
