import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import './workers-add-form.scss';

class WorkersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {addItem} = this.props;
    const {name, salary} = this.state;

    if (name.length > 0 && salary.length > 0) {
      addItem({
        name,
        salary,
        id: uuidv4(),
        increase: false,
        rise: false,
      });
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>

        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}
        >
          <input
            className="form-control new-post-label"
            type="text"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            className="form-control new-post-label"
            type="number"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button className="btn btn-outline-light" type="submit">Добавить</button>
        </form>
      </div>
    );
  }
}

export default WorkersAddForm;
