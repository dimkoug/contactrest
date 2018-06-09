var ContactsView = Backbone.View.extend({
  model:contacts,
  el: $('.contact-list'),
  initialize: function(){
    var self = this;
    this.model.on('add', this.render, this);
    this.model.on('change', function(){
      setTimeout(function(){
        self.render();
      }, 30);
    },this);
    this.model.on('remove', this.render, this);

    this.model.fetch({
      success: function(response){
        _.each(response.toJSON(), function(item){
          console.log(item.id)
        })
      },
      error: function(){
        console.log('failed');
      }
    });
  },
  render: function(){
    var self = this;
    this.$el.html('');
    this.model.each(function(contact, i){
        self.$el.append((new ContactView({model: contact})).render().$el);
    });
    return this;
  }
})

var contactsView = new ContactsView();

var ContactView = Backbone.View.extend({
  model: contact,
  tagName: 'tr',
  initialize: function(){
    this.template = _.template($('.persons-list-template').html());
  },
  events: {
    'click .edit': 'edit',
    'click .delete': 'delete',
    'click .update': 'update',
    'click .cancel': 'cancel',
  },
  edit: function(){
    this.$('.edit, .delete').hide();
    this.$('.update, .cancel').show();
    var fname = this.$('.fname').html();
    var lname = this.$('.lname').html();
    var tel = this.$('.tel').html();
    this.$('.fname').html('<input type="text" class="form-control fname-update" value="' + fname + '">');
    this.$('.lname').html('<input type="text" class="form-control lname-update" value="' + lname + '">');
    this.$('.tel').html('<input type="text" class="form-control tel-update" value="' + tel + '">');
  },
  update: function(){
    this.model.set('fname', $('.fname-update').val());
    this.model.set('lname', $('.lname-update').val());
    this.model.set('tel', $('.tel-update').val());
    this.model.save(null, {
      success: function(response){
        console.log('updated');
      },
      error: function(){
        console.log('error');
      }
    })
  },
  delete: function(){
    this.model.destroy({
      success: function(response){
        console.log('deleted');
      },
      error: function(){
        console.log('error');
      }
    });
  },
  cancel: function(){
    contactsView.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
