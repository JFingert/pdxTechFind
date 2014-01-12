var EventView = Backbone.View.extend({
  el: '#events',

  template: require('../../templates/events.hbs'),

  initialize: function () {
    this.render;
  },

  render: function () {
    this.$el.html(this.template(this.model.get('eventObj') || {data: []} ));
    return this;
  }
});

module.exports = EventView;