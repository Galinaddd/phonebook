import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from '../../components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <div>
      <h2>ContactsPage</h2>
      <ContactForm />
      <h2>Find contact by name</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
