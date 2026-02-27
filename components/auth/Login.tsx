import { MdInsights } from 'react-icons/md';
import PhoneForm from './PhoneForm';

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

            <PhoneForm />

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