import React, {Component} from "react";
import Thead from './Thead.js';
import emp from '../emp-dir/generated.json';
import {Table, Container} from "react-bootstrap";
import Tbody from './Tbody.js';
import Banner from './Banner.js'

class MyTable extends Component {

    state= {
        emp: emp,
        displayEmp: emp,
        search: ''

    };

    filter = event => {
    this.setState({ ...this.state, search: event.target.value ,displayEmp: this.state.emp.filter(entry => entry.name.toLowerCase().indexOf(this.state.search) !== -1) })
  }

    reset = () => {
      this.setState({ ...this.state, search: '', displayEmp: emp})
    }
    render() {
        return (
            <Container>
            <Banner />
            <div>
            <input type='text' value={this.state.search} onChange={this.filter}></input>
            <button onClick={this.reset}>Reset</button>
            </div>
            
           <Table responsive hover>
            <Thead />
            {this.state.displayEmp.map(emp => (
            <Tbody
              key={emp._id}
              picture={emp.picture}
              name={emp.name}
              phone={emp.phone}
              email={emp.email}
              age={emp.age}
            />
          ))}
            </Table>
            </Container>
            
        )
    }
}

export default MyTable;



