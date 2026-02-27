'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { MdLock } from 'react-icons/md';

interface ProtectedContentProps {
  children: React.ReactNode;
  blur?: boolean;
}

export default function ProtectedContent({ children, blur = true }: ProtectedContentProps) {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* محتوای تار شده */}
      <div className={blur ? 'filter blur-sm pointer-events-none select-none' : 'hidden'}>
        {children}
      </div>

      {/* پوشش با دکمه ورود */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="text-center space-y-4 p-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              محتوای ویژه کاربران
            </h3>
          </div>
          <button
            onClick={() => router.push('/auth')}
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
          >
            ورود / ثبت‌نام
          </button>
        </div>
      </div>
    </div>
  );
}
