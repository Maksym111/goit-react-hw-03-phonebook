import { Component } from 'react';
import { BtnAdd, Form, Input, Title } from './Form.styled';

class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addNewName = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    this.props.onSubmit(this.state);

    this.setState(
      {
        name: '',
        number: '',
      },
      () => {
        name.value = '';
        number.value = '';
      }
    );
  };

  render() {
    return (
      <Form action="" onSubmit={this.addNewName}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInput}
        />

        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInput}
        />

        <BtnAdd type="submit">Add contact</BtnAdd>
      </Form>
    );
  }
}

export default PhoneBookForm;
