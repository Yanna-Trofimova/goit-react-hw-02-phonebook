import React from "react";
import css from './ContactList.module.css';


const ContactList = ({ contacts, onDeleteContact }) => (
    
    <ul className={css.contactList}>
        {contacts.map(({ id,name, number }) => (
            <li key={id} className={css.contactItem}>

                
                <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  { number}</p>
                <button 
                    type="button"
                    className={css.contactBtn}
                    onClick={() => onDeleteContact(id)}
                >
                    Удалить
                </button>

            </li>
        ))}
    </ul>
)


 export default ContactList