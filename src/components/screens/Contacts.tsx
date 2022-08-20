import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaAddressCard, FaPen, FaUserPlus, FaTrash,
} from 'react-icons/fa';
import { setItems } from '../../store/ContactsData';
import { auth, db } from '../../firebase';
import '../styles/Contacts.css';

interface IContactsData {
  id: string | null,
  userUID: string,
  name: string,
  number: string,
}

function Contacts() {
  const [contacts, setContacts] = useState<IContactsData[]>([]);
  const [currentContact, setCurrentContact] = useState<IContactsData>({
    id: '', userUID: '', name: '', number: '',
  });
  const [contactsFilter, setContactsFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const [updateName, setUpdateName] = useState('');
  const [updateNumber, setUpdateNumber] = useState('');

  const [editIsActive, setEditIsActive] = useState(false);
  const [addIsActive, setAddIsActive] = useState(false);

  const [updateContacts, setUpdateContacts] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const getContacts = async () => {
      const contactsRef = db.collection('Contacts');
      const data = await contactsRef.get();
      setContacts(data.docs
        .filter(
          (item) => item.data().userUID === auth.currentUser?.uid,
        )
        .sort((a, b) => (a.data().name.toLowerCase() < b.data().name.toLowerCase() ? -1 : 1))
        .map((doc) => ({
          id: doc.id,
          userUID: doc.data().userUID,
          name: doc.data().name,
          number: doc.data().number,
        })));
    };
    getContacts();
  }, [updateContacts]);

  useEffect(() => {
    dispatch(setItems(contacts));
  }, [contacts, dispatch]);

  const AddContact = async () => {
    const contactsRef = db.collection('Contacts');
    const newContact = {
      id: contactsRef.id, userUID: auth.currentUser?.uid, name: newName, number: newNumber,
    };
    await contactsRef.add(newContact);

    setAddIsActive(false);
    setUpdateContacts(updateContacts + 1);
  };

  const EditContact = async () => {
    const contactsRef = db.collection('Contacts');
    const newData = {
      id: currentContact?.id,
      userUID: currentContact.userUID,
      name: updateName,
      number: updateNumber,
    };
    await contactsRef.doc(currentContact?.id!).update(newData);

    setCurrentContact(newData);
    setEditIsActive(false);
    setUpdateContacts(updateContacts + 1);
  };

  const DeleteContact = async () => {
    const contactsRef = db.collection('Contacts');
    await contactsRef.doc(currentContact?.id!).delete();
    setUpdateContacts(updateContacts + 1);
    setCurrentContact({
      id: '', userUID: '', name: '', number: '',
    });
  };

  return (
    <div className="ContactsMain">
      <div className="LeftContainer">
        <button type="button" className="LogoutButton" onClick={handleLogout}>LogOut</button>
        <input
          className="SearchBox"
          onChange={(e) => { setContactsFilter(e.target.value); }}
          placeholder="&#xf002;"
        />
        {(!addIsActive) && (
          <div className="ContactsContainer">
            {contacts
              .filter((contact) => contact.name
                .toLowerCase().startsWith(contactsFilter.toLowerCase()))
              .map((contact) => (
                <button
                  type="button"
                  key={contact.id}
                  className="ContactContainer"
                  onClick={() => { setCurrentContact(contact); }}
                >
                  <FaAddressCard className="ContactText" />
                  <div className="ContactText">{contact.name}</div>
                </button>
              ))}
          </div>
        )}

        {(!!addIsActive) && (
          <div className="ContactsContainer">
            <div className="ContactContainer">
              <input type="text" className="ContactTextBox" placeholder="name" onChange={(e) => { setNewName(e.target.value); }} />
            </div>
            <div className="ContactContainer">
              <input type="text" className="ContactTextBox" placeholder="number" onChange={(e) => { setNewNumber(e.target.value); }} />
            </div>

            <button type="button" className="LogoutButton" onClick={AddContact}>Add</button>
            <button type="button" className="LogoutButton" onClick={() => setAddIsActive(false)}>Cancel</button>
          </div>
        )}

        <button type="button" className="AddContact" onClick={() => setAddIsActive(true)}>
          <FaUserPlus className="ContactText" />
        </button>
      </div>
      <div className="RightContainer">
        {(!editIsActive) && (
          <div style={{
            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            <div className="ContactInfoContainer">
              <p className="ContactInfoText">
                {currentContact?.name}
              </p>
            </div>
            <div className="ContactInfoContainer">
              <p className="ContactInfoText">
                {currentContact?.number}
              </p>
            </div>
          </div>
        )}

        {(!!editIsActive) && (
          <div style={{
            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            <div className="ContactInfoContainer">
              <input type="text" className="ContactTextBox" placeholder={`name:${currentContact.name}`} onChange={(e) => { setUpdateName(e.target.value); }} />
            </div>
            <div className="ContactInfoContainer">
              <input type="text" className="ContactTextBox" placeholder={`number:${currentContact.number}`} onChange={(e) => { setUpdateNumber(e.target.value); }} />
            </div>
            <button type="button" className="SaveChangesButton" onClick={EditContact}>Save</button>
            <button type="button" className="SaveChangesButton" onClick={() => setEditIsActive(false)}>Cancel</button>
          </div>
        )}

        <button
          type="button"
          className="EditContact"
          onClick={() => {
            setUpdateName(currentContact.name);
            setUpdateNumber(currentContact.number);
            setEditIsActive(true);
          }}
        >
          <FaPen className="ContactText" />
        </button>
        <button type="button" className="DeleteContact" onClick={DeleteContact}>
          <FaTrash className="ContactText" />
        </button>
      </div>
    </div>
  );
}

export default Contacts;
