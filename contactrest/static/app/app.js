var app = (function ($) {
  var config = $('#config'),
  app = JSON.parse(config.text());

  $(document).ready(function () {
    var contactsView = new ContactsView({model: contacts});
    var contactView = new ContactView({model: contact});
    $('.add').on('click', function(){
      var contact = new Contact({
        fname: $('.fname-input').val(),
        lname: $('.fname-input').val(),
        tel: $('.tel-input').val(),
      });
      contacts.add(contact);
      contact.save(null, {
        success: function(response){
          console.log('succesfully saved :' + response.toJSON().id);
        },
        error: function(){
          console.log('error');
        }
      });
      $('.lname-input').val('');
      $('.fname-input').val('');
      $('.tel-input').val('');
    })
  });
  return app;
})(jQuery);
