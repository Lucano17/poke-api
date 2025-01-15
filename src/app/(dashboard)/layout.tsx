import { SideBar } from '@/components';
import { NavBar } from '@/components';

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex">

        <NavBar />

        <div className="p-2 w-full text-slate-900 sm2:mt-16 sm2:ml-0 sm:ml-80">
          { children }
        </div>

      </div>
    </div>
  );
}