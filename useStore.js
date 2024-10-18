import { create } from 'zustand'

const useStore = create((set) => ({
  isAuthenticated: false,
  favorites: [],
  isFavBlinking: false,
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  addFavorite: (productId) => set((state) => {
    const newFavorites = [...state.favorites, productId];
    set({ isFavBlinking: true });
    setTimeout(() => set({ isFavBlinking: false }), 3000);
    return { favorites: newFavorites };
  }),
  removeFavorite: (productId) => set((state) => ({ 
    favorites: state.favorites.filter(id => id !== productId) 
  })),
}));

export default useStore;