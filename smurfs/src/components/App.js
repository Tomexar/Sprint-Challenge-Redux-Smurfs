import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


import { getData, addSmurf, delelteSmurf} from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  state = {
    newSmurf :{
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getData();
  }

  delelteSmurf = id =>{
    this.setState({ deletingSmurfId: id });
    this.props.delelteSmurf(id)
  }

  handleChanges = e =>{
    let value = e.target.value;
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]:value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState ({
      newSmurf: {
        name:'',
        age:'',
        height:''
      }
    })
  }


  render() {
    // console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <div className="smurfs">
          <h2>Villagers</h2>
          {this.props.smurfs.map(smurf => {
            return (
              <div className='smurf-card'>
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
                <i 
                  class="fas fa-times" 
                  onClick ={() => this.delelteSmurf(smurf.id)}
                  />
              </div>
              
            )
          })}

        </div>
        <form onSubmit = {this.addSmurf}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            onChange = {this.handleChanges}
          />
           <input
            type='text'
            name='age'
            placeholder='Age'
            onChange = {this.handleChanges}
          />
           <input
            type='text'
            name='height'
            placeholder='Height'
            onChange = {this.handleChanges}
          />
          <button>Add Villager</button>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf : state.addingSmurf,
  deletingSmurfId: state.deletingSmurfId

})


export default connect(
  mapStateToProps,
  { getData, addSmurf, delelteSmurf }
)(App)
