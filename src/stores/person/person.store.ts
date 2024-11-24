import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface PersonState {
    firstName: string;
    lastName: string;
}

interface ActionPerson {
    setFirsName: (value: string) => void;
    setLastName: (value: string) => void;
}

export const usePersonStore = create<PersonState & ActionPerson>()(
    persist(
        (set) => ({
            firstName: '',
            lastName: '',
            setFirsName: (value: string) => set({ firstName: value }),
            setLastName: (value: string) => set({ lastName: value })
        }), { name: 'person-storage' })
);