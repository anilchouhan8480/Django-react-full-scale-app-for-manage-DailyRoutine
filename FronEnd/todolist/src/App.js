import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Plan from './Plan'
import './App.css';
import axios from 'axios';


// const ai = axios.create({
//   baseURL :  'http://localhost:8000'
// })

class App extends Component {
  state = {
    items: [],
    text: ""
  }


  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  showPlan = () =>{
    axios.get('http://localhost:8000/api/list/')
    // ai.get('list/')

    .then((res)=>{
      this.setState({ items: res.data })

    })
  }

  AddPlan = (d) =>{
    if( this.state.text !== "" ){
        axios.post('http://localhost:8000/api/create/',d)
        // ai.get('create/')

        .then((res)=>{
            this.setState({text: ''})
            this.showPlan()
        })
    }} 


  handleAdd = e => {

    let dt = {item: this.state.text}
    this.AddPlan(dt)
    
  }

  handleDelete = id => {
    console.log("Deleted", id);
      axios.delete(`http://localhost:8000/api/delete/${id}`)
      // ai.get('delete/${id}')

      .then((res)=>{
        this.showPlan()
      })
  }

componentDidMount(){
  this.showPlan();
}
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">ToDo App For Daily Plan</h1>
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => {
                      // console.log(value.id, value.item)
                      return <Plan key={i} id={value.id} value={value.item} sendData={this.handleDelete} />
                    })
                  }
                </ul>
                {/* <ul className="list-unstyled row m-5">
                  <Plan p={this.state.items} sendData={this.handleDelete} />
                </ul> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default App;