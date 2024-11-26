import { createJSONStorage } from 'zustand/middleware';
import { StateStorage } from 'zustand/middleware';

let storaApi: StateStorage = {

    getItem: function (name: string): string | null | Promise<string | null> {
        console.log('getItem', name)
        const data = sessionStorage.getItem(name);
        return data
    },
    setItem: function (name: string, value: string): void {
        sessionStorage.setItem(name, value);
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log('removeItem', name);
        return null
    }
}

export const customSessionStorage = createJSONStorage(() => storaApi)