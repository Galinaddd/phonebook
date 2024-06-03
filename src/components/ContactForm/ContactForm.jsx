import { Formik, Form, Field } from 'formik';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApiSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact /*, { data }*/] = useAddContactMutation();

  const handleSubmit = async (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = { name, number, id: nanoid() };
    const isInContacts = contacts.find(contact => contact.name === name);

    if (isInContacts) {
      alert(`${name} is  already in contacts`);
    } else {
      resetForm();
      await addContact(newContact);
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>
        <label>
          Number
          <Field type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
