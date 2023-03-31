import { Component } from 'react';
import Contacts from '../Contacts';
import Form from '../Form';
import SectionTitle from '../SectionTitle';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

const KEY_DATA = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(KEY_DATA));
    if (savedContacts) {
      this.setState({
        contacts: savedContacts.contacts,
      });
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const checkedName = this.state.contacts.find(elem => {
      return elem.name === name;
    });

    if (checkedName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      const ContactsArr = [...prevState.contacts, newContact];

      const newContacts = {
        contacts: [...ContactsArr],
      };

      const contactsJson = JSON.stringify(newContacts);

      localStorage.setItem(KEY_DATA, contactsJson);

      return newContacts;
    });
  };

  onItemDelete = id => {
    this.setState(({ contacts }) => {
      const newContacts = [...contacts];
      const index = newContacts.findIndex(elem => elem.id === id);
      newContacts.splice(index, 1);

      const result = {
        contacts: [...newContacts],
      };

      const contactsJson = JSON.stringify(result);
      localStorage.setItem(KEY_DATA, contactsJson);

      return result;
    });
  };

  onFilterSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const normaliseFilter = filter.toLowerCase();
    const filteredSearch = contacts.filter(elem =>
      elem.name.toLowerCase().includes(normaliseFilter)
    );

    return (
      <Container>
        <SectionTitle title="Phonebook" />
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts
          title={'Contacts'}
          contacts={filteredSearch}
          onSearch={this.onSearchType}
          filter={filter}
          onFilter={this.onFilterSearch}
          onItemDelete={this.onItemDelete}
        />
      </Container>
    );
  }
}

export default App;
