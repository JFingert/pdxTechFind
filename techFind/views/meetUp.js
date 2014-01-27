var meetUpApi = Backbone.View.extend({
  el: '#meetUpApi',

  template: require('../templates/MeetUp.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var self = this;
    var context = {};
    context.data = this.model.get('results') || {data: []}; //data: []
    context.muTime = [];

    context.data.forEach(function (mut) {
    mutObj = {};
    mutObj.name = mut.group_name;
    mutObj.pic = mut.photo_url;
    mutObj.url = mut.event_url;
    mutObj.time = self.getMeetupTime(mut.utc_time);
    if (mutObj.name == "PDXnode") {
      mutObj.desc = ["The Meet Up for everything NodeJS. Newbies welcome. Meets on the third Thursday of every month."];
    }

    context.muTime.push(mutObj);
  });

    console.log(context);


    this.$el.html(this.template(context));
    return this;
  },

  getMeetupTime: function (meetUpTime) {
    var obj = "";

    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var timeStamp = new Date(+meetUpTime);
    var hours = timeStamp.getHours();
    var mins = ":0" + timeStamp.getMinutes();
    var time;
    if (hours > 12) {
      time = hours - 12 + mins + " PM";
    } else {
      time = hours + mins + " AM";
    }
    console.log(time);
    obj = week[timeStamp.getDay()] + " " + (timeStamp.getMonth() + 1) + '/' + timeStamp.getDate() + ' at ' + time;
    return obj;
  }

});

module.exports = meetUpApi;