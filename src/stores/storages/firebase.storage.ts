import { createJSONStorage } from 'zustand/middleware';
import { StateStorage } from 'zustand/middleware';

const firebaseUrl = 'https://zustand-storage-7aa90-default-rtdb.firebaseio.com/zustand';

let storaApi: StateStorage = {

    getItem: function (name: string): string | Promise<string | null> {
        try {
            const data = fetch(`${firebaseUrl}/${name}.json`).then(res => res.json());
            return JSON.stringify(data)
        } catch (error) {
            throw new Error('Error al obtener el item ' + error)
        }
    },
    setItem: async function (name: string, value: string): Promise<void> {
        const data = await fetch(`${firebaseUrl}/${name}.json`, {
            method: 'PUT',
            body: value,
        }).then(res => res.json());

        return;
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log('removeItem', name);
        return null
    }
}

export const firebaseStorage = createJSONStorage(() => storaApi)