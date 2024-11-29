
import { useMemo } from 'react';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {

  const getTaskByStatus = useTaskStore(state => state.getTaskByStatus);


  const pendingTask = useMemo(() => getTaskByStatus('open'), [getTaskByStatus]);
  const inProgressTask = useMemo(() => getTaskByStatus('in-progress'), [getTaskByStatus]);
  const doneTask = useMemo(() => getTaskByStatus('done'), [getTaskByStatus]);


  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <JiraTasks title='Pendientes' tasks={pendingTask} value='open' />

        <JiraTasks title='Avanzando' tasks={inProgressTask} value='in-progress' />

        <JiraTasks title='Terminadas' tasks={doneTask} value='done' />

      </div>





    </>
  );
};