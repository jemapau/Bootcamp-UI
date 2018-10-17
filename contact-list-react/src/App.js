import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {

    return (
      <div className="wrapper">
        <div className="App">
          <BrowserRouter>
            <div>
              <Navigation />
              <Route exact path="/" component={Home} />
              <Route exact path="/contactlist" component={ContactListSection} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
        <Link to={`/contactlist`}> Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

const Home = (props) => {
  return(
    <div>
        Hi!!! 🐨
    </div>
  )
}



class ContactListSection extends Component {
  constructor(props) {
    super(props);

    // Guardar elementos o caracteristicas que necesita el proyecto

    this.state = {
      //El estado en que se inicializa. El estado nunca se modifica desde el Render.
      all: [],
      favorites: []
    };

    this.addToFavorites = this.addToFavorites.bind(this);
  }

  addToFavorites(contact) {
    console.log('Añadir a favoritos' , contact);

    //const contactIndex = this.state.all.findIndex( 
      //c => c.id.value === contact.id.value
    //);

    const newFavorites = this.state.favorites.concat(contact);

    const newAll = this.state.all.filter(c => c.email !== contact.email);
    console.log('index', newAll);

    this.setState({
      all: newAll,
      favorites: newFavorites
    });
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
        <ContactList className="column" contacts={this.state.all} title="All contacts" key="1" addToFavorites={this.addToFavorites}/>
        <ContactList className="column" contacts={this.state.favorites} title="Your Favorites" key="2" addToFavorites={this.addToFavorites}/>
        </div>
      </div>
    );
  }
}





const ContactList = (props) => {
  return (
      <div className={props.className}>
        <h2 className="title">{props.title}</h2>
        {props.contacts.map(contact => <ContactCard  key={contact.name.first}  contact={contact} addToFavorites={props.addToFavorites}/>)}    
      </div>
  );
};

ContactList.ptoptypes  = {
  addToFavorites: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

ContactList.defaultProps = {
  title: 'Titulo',
};

class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.onClickFavorites = this.onClickFavorites.bind(this);
    // this.onClickDelete = this.onClickDelete.remove(this);
  }

  onClickFavorites() {
      this.props.addToFavorites(this.props.contact);
  }

  // onClickAll() {
  //   this.props.addToAll(this.props.contact);
  // }

  // onClickDelete() {
  //   this.props.removeContact(this.props.contact);
  // }

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
          <button onClick={this.onClickFavorites}>Favorite</button>
          <button onClick={this.onClickDelete} className="contact__delete">Delete</button>
          </div>

      </div>
    );
  }
}

export default App;
