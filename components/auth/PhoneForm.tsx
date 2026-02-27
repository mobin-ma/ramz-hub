"use client"
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5'
import OtpForm from './OtpForm';
import { sendOtp, loginWithPassword } from '@/store/auth/authThunk';
import { RootState } from '@/store';

function PhoneForm() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { error, loading, isAuthenticated } = useAppSelector((state: RootState) => state.auth);

    const [mode, setMode] = useState<'phone' | 'username'>('phone');
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState<"input" | "otp">("input");


    // Redirect to dashboard if authenticated
    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!/^09\d{9}$/.test(phone)) {
            return;
        }

        try {
            await dispatch(sendOtp({ phoneNumber: phone })).unwrap();
            setStep("otp");
        } catch (error) {
            // Error is handled in Redux store
        }
    };

    const handleUsernameLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            return;
        }

        try {
            await dispatch(loginWithPassword({ username, password })).unwrap();
            // User will be redirected by useEffect
        } catch (error) {
            // Error is handled in Redux store
        }
    };

    if (step === "otp") {
        return <OtpForm phone={phone} onBack={() => setStep("input")} />;
    }


    return (
        <div className="space-y-5 animate-fade-in">
            {/* Mode Selector */}
            <div className="flex bg-background-dark/50 rounded-lg p-1 mb-6">
                <button
                    type="button"
                    onClick={() => setMode('phone')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${mode === 'phone'
                            ? 'bg-primary text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    شماره تلفن
                </button>
                <button
                    type="button"
                    onClick={() => setMode('username')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${mode === 'username'
                            ? 'bg-primary text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    نام‌کاربری
                </button>
            </div>

            {mode === 'phone' ? (
                <form onSubmit={handleSendOtp} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider ml-1" htmlFor="phone">
                            شماره تلفن
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-round text-gray-500 text-lg group-focus-within:text-primary transition-colors">
                                    <IoPersonOutline />
                                </span>
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg bg-background-dark/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                                id="phone"
                                placeholder="09123456789"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                maxLength={11}
                            />
                        </div>
                        {phone && !/^09\d{9}$/.test(phone) && (
                            <p className="text-red-400 text-xs mt-1">شماره تلفن باید با 09 شروع شود و 11 رقم باشد</p>
                        )}
                    </div>

                    <button
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-glow text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        type="submit"
                        disabled={loading || !/^09\d{9}$/.test(phone)}
                    >
                        {loading ? 'در حال ارسال...' : 'ارسال کد'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleUsernameLogin} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider ml-1" htmlFor="username">
                            نام‌کاربری
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-round text-gray-500 text-lg group-focus-within:text-primary transition-colors">
                                    <IoPersonOutline />
                                </span>
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg bg-background-dark/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                                id="username"
                                placeholder="نام‌کاربری خود را وارد کنید"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider ml-1" htmlFor="password">
                            رمزعبور
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-round text-gray-500 text-lg group-focus-within:text-primary transition-colors">
                                    <IoLockClosedOutline />
                                </span>
                            </div>
                            <input
                                className="block w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-background-dark/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                                id="password"
                                placeholder="رمزعبور خود را وارد کنید"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-glow text-sm font-semibold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        type="submit"
                        disabled={loading || !username || !password}
                    >
                        {loading ? 'در حال ورود...' : 'ورود'}
                    </button>
                </form>
            )}

            {/* Error Message */}
            {error && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
            )}
        </div>
    )
}

export default PhoneForm