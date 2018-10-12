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
      <div className="App">
      <ContactList  contacts={this.state.all} title="Todos" key="1"/>
      <ContactList  contacts={this.state.favorites} title="Favoritos" key="2"/>
      </div>
    );
  }
}

const ContactList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.contacts.map(contact => <ContactCard  key={contact.name.first}  contact={contact} />)}
          
    </div>

  );
};

class ContactCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="contact-card">
        <figure>
          < img alt="image" src={this.props.contact.picture.medium} alt="Author"/>
          <figcaption>{this.props.contact.name.first}</figcaption>
        </figure>
        <button>Favorito</button>
        <button>Eliminar</button>
      </div>
    );
  }
}

export default App;
