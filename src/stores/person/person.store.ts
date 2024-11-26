import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
// import { customSessionStorage } from '../storages/session.storage';
import { firebaseStorage } from '../storages/firebase.storage';


interface PersonState {
    firstName: string;
    lastName: string;
}

interface ActionPerson {
    setFirsName: (value: string) => void;
    setLastName: (value: string) => void;
}

const sotoreAPI: StateCreator<PersonState & ActionPerson> = (set) => ({
    firstName: '',
    lastName: '',
    setFirsName: (value: string) => set({ firstName: value }),
    setLastName: (value: string) => set({ lastName: value })
})



export const usePersonStore = create<PersonState & ActionPerson>()(
    persist(sotoreAPI, { name: 'person-storage', storage: firebaseStorage })
);