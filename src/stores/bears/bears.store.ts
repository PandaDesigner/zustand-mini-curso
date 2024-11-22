import { create } from 'zustand'

interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;

    inscreaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;

}


export const useBearStore = create<BearState>()((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,

    inscreaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),
    increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),

}))
