import { Component } from "react";
import classNames from "classnames";

import './app-filter.scss';

class AppFilter extends Component {
  render() {
    const {filter, onFilterUpdate} = this.props;

    const buttons = [
      {
        className: classNames('btn btn-outline-light', {'active': filter === 'all'}),
        value: 'all',
        text: 'Все сотрудники',
      },
      {
        className: classNames('btn btn-outline-light', {'active': filter === 'rise'}),
        value: 'rise',
        text: 'На повышение',
      },
      {
        className: classNames('btn btn-outline-light', {'active': filter === '>1000'}),
        value: '>1000',
        text: 'З/П больше 1000$',
      },
    ];

    return (
      <div className="btn-group">
        {buttons.map(({className, value, text}) => (
          <button
            key={value}
            className={className}
            type="button"
            value={value}
            onClick={onFilterUpdate}
          >
            {text}
          </button>
        ))}
      </div>
    );
  }
}

export default AppFilter;
