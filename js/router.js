import Backbone from 'backbone';
import $ from 'jquery';

import {
  Contacts as ContactsCollection
} from './resources';

import {
  Contacts as ContactsView, 
  Contact as ContactView, 
  Spinner
} from './views';

export default Backbone.Router.extend({

  routes: {
    ""            : "redirectToContacts",
    "contacts"      : "showContacts",
    "contact/:id"  : "showContact"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new ContactsCollection();

    this.$el.on('click', '.contact-list-item', (event) => {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      this.navigate(`contact/${contactId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html( Spinner() );
  },

  redirectToContacts() {
    this.navigate('contacts', {
      replace: true,
      trigger: true
    });
  },

  showContacts() {
    this.showSpinner();

    // this.collection.fetch().then(function() {
    //   this is equivalent to below
    //   only below has `this` auto bound
    //   // `this` would be either null or window
    // });
    this.collection.fetch().then(() => {
      // `this` === the router instance

      this.$el.html(
        ContactsView(
          this.collection.toJSON()
        )
      );
    });
  },

  showContact(id) {
    let contact = this.collection.get(id);

    if (contact) {
      // we found the person from the collection
      this.$el.html(
        ContactView(
          contact.templateData()
        )
      );
    } else {
      this.showSpinner();
      contact = this.collection.add({objectId: id});
      contact.fetch().then(() => {
        this.$el.html(
          ContactView(
            contact.templateData()
          )
        );
      });
    }
  }


});
