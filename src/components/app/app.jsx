import { Component } from "react";

import {
  AppInfo,
  SearchPanel,
  AppFilter,
  WorkersList,
  WorkersAddForm
} from '../index';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'John C.',
          salary: 800,
          increase: false,
          rise: false,
        },
        {
          id: 2,
          name: 'Alex M',
          salary: 3000,
          increase: true,
          rise: false,
        },
        {
          id: 3,
          name: 'Carl W.',
          salary: 5000,
          increase: false,
          rise: false,
        },
      ],
      search: '',
      filter: 'all',
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }));
  }

  addItem = (item) => {
    this.setState(({data}) => ({
      data: [...data, item]
    }));
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) return {...item, [prop]: !item[prop]};

        return item;
      })
    }));
  }

  searchWorker = (data, search) => {
    if (search.length === 0) return data;

    return data.filter(item => item.name.indexOf(search) > -1);
  }

  onSearchUpdate = (search) => {
    this.setState({search});
  }

  onFilterUpdate = (e) => {
    this.setState({filter: e.target.value});
  }

  applyFilter = (data) => {
    const {filter} = this.state;

    switch (filter) {
      case 'all':
        return data

      case 'rise':
        return data.filter(item => item.rise);

      case '>1000':
        return data.filter(item => item.salary > 1000);

      default:
        console.error('Wrong value of the filter');
        return [];
    }
  }

  render() {
    const {
      data,
      search,
      filter
    } = this.state;

    const visibleData = this.searchWorker(data, search);
    const filteredData = this.applyFilter(visibleData);
    const amountOfAllowance = data.filter(item => item.increase).length

    return (
      <div className='app'>
        <AppInfo
          amountOfWorkers={data.length}
          amountOfAllowance={amountOfAllowance}
        />

        <div className="search-panel">
          <SearchPanel onSearchUpdate={this.onSearchUpdate}/>
          <AppFilter onFilterUpdate={this.onFilterUpdate} filter={filter}/>
        </div>

        <WorkersList
          data={filteredData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <WorkersAddForm
          addItem={this.addItem}
        />
      </div>
    )
  }
};

export default App;
