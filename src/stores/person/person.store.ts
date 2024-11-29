import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// import { customSessionStorage } from '../storages/session.storage';
import { firebaseStorage } from '../storages/firebase.storage';
import { logger } from '../middlewares/logger.middelwares';


interface PersonState {
    firstName: string;
    lastName: string;
}

interface ActionPerson {
    setFirsName: (value: string) => void;
    setLastName: (value: string) => void;
}

const sotoreAPI: StateCreator<PersonState & ActionPerson, [["zustand/devtools", never]]> = (set) => ({
    firstName: '',
    lastName: '',
    setFirsName: (value: string) => set({ firstName: value }, false, 'setFirsName'),
    setLastName: (value: string) => set({ lastName: value }, false, 'setLastName')
})



export const usePersonStore = create<PersonState & ActionPerson>()(
    logger(devtools(persist(sotoreAPI, { name: 'person-storage', storage: firebaseStorage })))
);