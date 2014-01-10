var pyApi = Backbone.View.extend({
  el: '#pyView',

  template: require('../templates/py.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var context = {};
    context.data = this.model.get('results') || {}; //data: []
    context.muTime = [];

    console.log(context);

    context.data.forEach(function (mut) {
    mutObj = {};
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var timeStamp = new Date(mut.utc_time * 1000);
    mutObj.name = mut.group_name;
    mutObj.meetUpTime = week[timeStamp.getDay()] + " " + (timeStamp.getMonth() + 1) + '/' + timeStamp.getDate() + ' at ' + timeStamp.getUTCHours() + ":" + timeStamp.getMinutes();
    context.muTime.push(mutObj);
  });
    this.$el.html(this.template(context));
    return this;
  }

});

module.exports = pyApi;