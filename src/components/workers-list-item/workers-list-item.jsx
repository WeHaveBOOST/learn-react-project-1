import classNames from 'classnames';

import './workers-list-item.scss';

const WorkersListItem = (props) => {
  const {
    name,
    salary,
    increase,
    rise,
    onDelete,
    onToggleProp
  } = props;

  const itemClass = classNames(
    'list-group-item d-flex justify-content-between',
    {
      'increase': increase,
      'like': rise,
    }
  );

  return (
    <li className={itemClass}>
      <button
        className="list-group-item-label"
        type="button"
        data-toggle="rise"
        onClick={onToggleProp}
      >
        {name}
      </button>
      <input
        className="list-group-item-input"
        type="text"
        defaultValue={`${salary}$`}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          className="btn-cookie btn-sm"
          type="button"
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"/>
        </button>
        <button
          className="btn-trash btn-sm"
          type="button"
          onClick={onDelete}
        >
          <i className="fas fa-trash"/>
        </button>
        <i className="fas fa-star"/>
      </div>
    </li>
  )
};

export default WorkersListItem;
