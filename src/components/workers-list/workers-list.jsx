import { WorkersListItem } from '../index';

import './workers-list.scss';

const WorkersList = ({data, onDelete, onToggleProp}) => (
  <ul className="app-list list-group">
    {data.map(worker => {
      const {id} = worker;

      return (
        <WorkersListItem
          key={id}
          {...worker}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)}
        />
      );
    })}
  </ul>
);

export default WorkersList;
