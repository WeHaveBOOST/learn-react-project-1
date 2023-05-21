import { Component } from "react";

import './search-panel.scss';

class  SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  onInputChange = (e) => {
    const {onSearchUpdate} = this.props;
    const {value} = e.target;

    this.setState({value});
    onSearchUpdate(value);
  }

  render() {
    const {value} = this.state;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={value}
        onChange={this.onInputChange}
      />
    );
  }
}

export default SearchPanel;
