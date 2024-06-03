import { useDeleteContactMutation } from '../../redux/contactsApiSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation(id);

  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
