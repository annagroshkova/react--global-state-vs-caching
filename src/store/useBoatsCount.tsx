import { create } from "zustand"

interface BoatsState {
  boats: number
  increaseBoats: () => void
}

 export const useBoatsCount = create<BoatsState>((set) => ({
  boats: 0,
  increaseBoats: () =>
    set((state) => ({
      boats: state.boats + 1,
    })),
}))