import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Guardar elementos o caracteristicas que necesita el proyecto

    this.state = {
      //El estado en que se inicializa. El estado nunca se modifica desde el Render.
      all: [],
      favorites: []
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => {
        this.setState ({
            all:  data.results
        });
      });
    //this.setState({
    //});

  }

  //componentDidUpdate() {
  //
  //}
  
  render() {

    return (
      <div className="wrapper">
        <div className="App">
        <ContactList className="column" contacts={this.state.all} title="All contacts" key="1"/>
        <ContactList className="column" contacts={this.state.favorites} title="Your Favorites" key="2"/>
        </div>
      </div>
    );
  }
}

const ContactList = (props) => {
  return (
      <div className={props.className}>
        <h2 className="title">{props.title}</h2>
        {props.contacts.map(contact => <ContactCard  key={contact.name.first}  contact={contact} />)}    
      </div>
  );
};

class ContactCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="contact">
      <div className="contact__img">
        <figure className="contact__data">
          < img src={this.props.contact.picture.large} alt="Author"/>
        </figure>
      </div>

        <div className="contact__info">
        <figcaption>{this.props.contact.name.first}</figcaption>
        <p><strong>Phone:</strong> {this.props.contact.cell}</p>
        <p><strong>City:</strong> {this.props.contact.location.city}</p>
          <button>Favorite</button>
          <button className="contact__delete">Delete</button>
          </div>

      </div>
    );
  }
}

export default App;
