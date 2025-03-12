import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {supabase} from '@/utils/supabase';
import {useAuthStore} from '@/store/authStore';
import {toast} from 'react-toastify';
import {setCookie} from 'nookies';
import {postRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {User} from '@/types/user';

export default function AuthCallback() {
  const router = useRouter();
  const {setAuth} = useAuthStore();

  useEffect(() => {
    const {data: authListener} = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          try {
            const response = await postRequest<User>({
              url: API_ENDPOINTS.AUTH_SIGNUP_GOOGLE,
              data: {
                access_token: session.provider_token,
                provider: 'google',
              },
            });

            setAuth(true, response.data);
            router.push('/');
          } catch (error) {
            console.error('Server authentication error:', error);
            toast.error('서버 인증에 실패했습니다.');
            router.push('/signin');
          }
        }
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [router, setAuth]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      로그인 처리 중...
    </div>
  );
}
