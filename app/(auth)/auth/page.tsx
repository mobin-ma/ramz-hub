import Login from "@/components/auth/Login";

export default function page() {
  return (
    <div className='w-full min-h-screen bg-[#101622] flex items-center justify-center'>
      {/*  Grid Pattern Overlay */}
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none pattern"></div>
      {/*  Ambient Background Elements  */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-animate"></div>
      <Login />
    </div>
  )
}
