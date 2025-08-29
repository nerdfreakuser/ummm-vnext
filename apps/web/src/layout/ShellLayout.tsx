import TopNav from './TopNav';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-background text-foreground">
      <TopNav />
      <div className="grid grid-cols-12 gap-0 h-[calc(100vh-56px)]">
        <aside className="col-span-2 border-r hidden md:block"><LeftSidebar /></aside>
        <main className="col-span-12 md:col-span-8 overflow-y-auto">{children}</main>
        <aside className="col-span-2 border-l hidden lg:block"><RightSidebar /></aside>
      </div>
    </div>
  );
}
