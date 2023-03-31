import PropTypes from 'prop-types';

import {
  ContactItem,
  ContainerContacts,
  DeleteBtn,
  Input,
  Label,
  ListContacts,
  Title,
} from './Contacts.style';

const Contacts = ({ title, contacts, filter, onFilter, onItemDelete }) => {
  return (
    <ContainerContacts>
      <Title>{title}</Title>

      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={onFilter} />

      <ListContacts>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <p>
              {name}: {number}
            </p>
            <DeleteBtn
              type="button"
              onClick={() => {
                onItemDelete(id);
              }}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        ))}
      </ListContacts>
    </ContainerContacts>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onItemDelete: PropTypes.func.isRequired,
};

export default Contacts;
