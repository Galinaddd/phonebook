import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { useGetContactsQuery } from '../../redux/contactsApiSlice';

export const ContactList = () => {
  const { data, isSuccess } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const filterNormalised = filter.toLowerCase();

  let contacts = [];
  if (isSuccess) {
    contacts = data.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalised);
    });
  }
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts &&
          contacts.map(contact => (
            <li key={contact.id}>
              <ContactItem
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
