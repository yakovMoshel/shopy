import create from 'zustand';

const useStore = create(set => ({
  isAuthenticated: false,
  setAuthenticated: (status) => set({ isAuthenticated: status }),
}));

export default useStore;
