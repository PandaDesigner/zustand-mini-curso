import { create, StateCreator } from 'zustand';
import { Task, TaskStatus } from '../../domain';
import { devtools } from 'zustand/middleware';


interface TaskState {
    draggingTaskId?: string;
    tasks: Record<string, Task>,// {[key:string]: Task}
    getTaskByStatus: (status: TaskStatus) => Task[];
    setDraggingTaskId: (taskId: string) => void;
    removeDraggingTaskId: () => void;
}


const storeApi: StateCreator<TaskState, [["zustand/devtools", never]]> = (set, get) => ({
    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'Task 1', description: 'Description 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'Task 2', description: 'Description 2', status: 'in-progress' },
        'ABC-3': { id: 'ABC-3', title: 'Task 3', description: 'Description 3', status: 'done' },
        'ABC-4': { id: 'ABC-4', title: 'Task 4', description: 'Description 4', status: 'open' },
    },
    getTaskByStatus: (status: TaskStatus) => {
        const task = get().tasks;
        return Object.values(task).filter(task => task.status === status);
    },

    setDraggingTaskId: (taskId: string) => {
        set({ draggingTaskId: taskId }, false, 'setDraggingTask');
    },

    removeDraggingTaskId: () => {
        set({ draggingTaskId: undefined }, false, 'removeDraggingTaskId');
    }
})


export const useTaskStore = create<TaskState>()(
    devtools(
        storeApi
    )
)