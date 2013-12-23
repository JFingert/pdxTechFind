var meetUpApi = Backbone.View.extend({
  el: '#meetUpApi',

  template: require('../templates/MeetUp.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var context = {};
    context.results = this.model.get('results') || {}; //data: []
    //context.info = [];

    console.log(context);

    // results.forEach(function (stuff){
    //   var contextData = {};
    //   contextData.description = stuff.description;
    //   contextData.name = "Name: " + stuff.name;
    //   contextData.updated = stuff.updated;
    //   context.info.push(contextData);
    //});

    this.$el.html(this.template(context));
    return this;
  }

});

module.exports = meetUpApi;