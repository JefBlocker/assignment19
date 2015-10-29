import Backbone from 'backbone';
import Contact from './contact';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: Contact,

  // parse: function(data) {
  //   return data.results;
  // },

  parse(data) {
    return data.results;
  }
 
});
