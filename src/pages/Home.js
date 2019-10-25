import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className='input'
            id='outlined-name'
            label='Name'
            value={this.state.value}
            onChange={this.handleChange}
            margin='normal'
            variant='outlined'
          />
          <label>
            <br />
            <br />
            <Button variant='contained' color='default' type='submit'>
              Test
            </Button>
          </label>
        </form>
      </div>
    );
  }
}

export default Home;
