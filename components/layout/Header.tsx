import { IoMdSearch } from "react-icons/io"; 
import { MdNotificationsNone } from "react-icons/md";


function Header() {
  return (
    <div className="w-full bg-surface flex shrink-0 items-center justify-between px-6 py-3 border-b border-border whitespace-nowrap z-20">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary "></div>
            <h1 className="text-white font-bold text-xl pt-2">LOGO</h1>
        </div>
        <div className="text-text-secondary w-1/2 bg-background flex items-center justify-between px-4 py-1 rounded-lg border border-border focus-within:border-primary group">
            <IoMdSearch className="group-focus-within:text-primary text-xl" />
            <input className="flex w-full flex-1 resize-none overflow-hidden text-white focus:outline-0 bg-transparent placeholder:text-text-secondary px-3 text-sm font-normal leading-normal" type="search" placeholder="جستجوی تیکت‌ها، منابع خبری..." />
        </div>
        <div className="relative">
            <MdNotificationsNone className="text-3xl font-bold"/>
            <div className="w-1 h-1 bg-primary absolute top-1 right-1"></div>
        </div>
    </div>
  )
}

export default Header