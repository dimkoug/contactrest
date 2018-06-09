var Contacts = Backbone.Collection.extend({
  url: '/api/contacts'
});
var contacts = new Contacts();
