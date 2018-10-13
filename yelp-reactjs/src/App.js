import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      businesses: [],
      foundSomething: false
    }
    
    this.locationUpdate = this.locationUpdate.bind(this)
  }

locationUpdate = (e) => {
  
  this.setState({
    location: e.target.value
  })
}

findSomething = (e) => {
  //Select from the array of businesses 
  let location = encodeURI(this.state.location)
  let url = 'replace this with your herokuapp url or link to your express server'
  fetch(url+location).then((res) => res.json()).then((jsonres) => this.setState(jsonres)).then(() => {
    let business = this.state.businesses[Math.floor(Math.random() * this.state.businesses.length)]
    this.setState({
      foundSomething: true,
      business: business
    })
  })
  
  
}

  render() {
    return (
      <div style={{background: '#2c2c2c', color:'#f2ae1d', minHeight: '100vh'}}>
      <div className="container" style={{background: '#2c2c2c'}}>
      <center>
      <h2 style={{paddingTop: 40}}>
      Bored of the same old place?
      </h2>
      <h3>Find a place within 1000 meters of where you are for food!</h3>
      </center>
      </div>
      <div className='row' style={{ marginLeft: '10vh', marginRight: '10vh'}}>
      {console.log(this.state)}
        <div className='col-sm'>
        Enter your current location / address below
        <br />
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor: '#f8c753'}}>Location</span>
        </div>
        <input type="text" class="form-control" onChange={this.locationUpdate} id='location' value={this.state.location} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
        <br />
        <button className='btn' style={{backgroundColor: '#f8c753'}} onClick={this.findSomething}>Find me something</button>
        </div>
        <div className='col-sm'>
        {this.state.foundSomething ? 
        <div>
        <img src={this.state.business.image_url} style={{maxWidth: '100%'}} alt='business'></img>
          {this.state.business.name}
          <br /> 
          {this.state.business.phone}
          <br />
          <br />
          {this.state.business.location.address1}
          <br/>
          {this.state.business.location.address2}
          <br />
          {this.state.business.location.city}
          <br />
          Distance: {Math.floor(this.state.business.distance)}
        </div> 
        : 
        <div></div>}
        </div>
        <br />
        <div className='col-sm'>
        <a href="https://github.com/Frazl/Yelpdotcom-random-app">Program Github</a>
        <br />
        Built in ReactJS, Nodejs and Express.
        <br />
        <br />
        This program contacts the Yelp API through a node / express server and is used purely for educational purposes.
        </div>
      </div>
      <p style={{bottom: 0, right: 10, position: 'absolute'}}></p>
      </div>
    );
  }
}

export default App;
