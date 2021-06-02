import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from './redux/contacts/contacts-operations';
import { getLoading } from './redux/contacts/contacts-selectors';
import Container from "./Components/Container";
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import FilterContacts from './Components/FilterContacts';
import "./App.css"

class App extends Component {
    componentDidMount() {
        this.props.fetchContacts()
    };

    render() {
        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <FilterContacts />
                {
                    this.props.isLoading && <h3 className='loader'>loading...</h3>
                }
                <ContactList />
            </Container>
        )
    };
};

const mapStateToProps = state => ({
    isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);