import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'
import { getAllContacts } from '../../actions/ContactActions';

class Contacts extends Component {
  componentDidMount() {
    this.props.getAllContacts();
  }


  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {    // recupérer le state a partir de redux et le stoker dans le propos contacts
  return {
    contacts: state.myContacts.contacts
  }
}
/*
const mapDispatchToProps = () => {    
  return {
    getAllContacts: getAllContacts
  }
 
}
*/

export default connect(mapStateToProps, { getAllContacts })(Contacts);
