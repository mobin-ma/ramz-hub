import React from 'react'
import { IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';
import { MdInsights, MdOutlineVisibilityOff } from 'react-icons/md';

function Login() {
    return (
        <div className="glass-panel w-full max-w-md p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 border border-primary/20">
                    <span className="material-icons-round text-primary text-2xl">
                        <MdInsights />
                    </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Ramzhub
                </h1>
                <p className="text-gray-400 text-sm">
                    به اطلاعات بازار در لحظه دسترسی داشته باشید.
                </p>
            </div>

            <form className="space-y-5 animate-fade-in">
                <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider ml-1" htmlFor="identity">نام کاربری یا شماره تلفن</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons-round text-gray-500 text-lg group-focus-within:text-primary transition-colors">
                                <IoPersonOutline />
                            </span>
                        </div>
                        <input className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg bg-background-dark/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm" id="identity" placeholder="نام‌کاربری خود را وارد کنید" type="text" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center justify-between ml-1">
                        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider" htmlFor="password" >رمز</label>
                        <a className="text-xs text-primary hover:text-primary-hover font-medium transition-colors" href="#">آیا رمز خود را فراموش  کردید؟</a>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons-round text-gray-500 text-lg group-focus-within:text-primary transition-colors">
                                <IoLockClosedOutline />
                            </span>
                        </div>
                        <input className="block w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-background-dark/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm" id="password" placeholder="••••••••" type="password" />
                        <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 focus:outline-none" type="button">
                            <span className="material-icons-round text-lg cursor-pointer">
                                <MdOutlineVisibilityOff />
                            </span>
                        </button>
                    </div>
                </div>

                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-glow text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5" type="submit">
                    ورود
                </button>
            </form>

            <p className="mt-8 text-center text-xs text-gray-500">
                با ادامه دادن، شما با ما موافقت می‌کنید
                <a className="text-gray-400 hover:text-white underline decoration-gray-600 mx-2 underline-offset-2" href="#">شرایط خدمات</a>
                و
                <a className="text-gray-400 hover:text-white underline decoration-gray-600 mr-2 underline-offset-2" href="#">سیاست حفظ حریم خصوصی</a>.
            </p>
        </div>
    )
}

export default Login;