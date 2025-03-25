import { create } from 'zustand';
import { User } from '@/types/user';
interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  setAuth: (isAuthenticated: boolean, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(set => ({
  isAuthenticated: false,
  user: null,
  setAuth: (isAuthenticated, user) => set({ isAuthenticated, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
