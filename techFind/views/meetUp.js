var meetUpApi = Backbone.View.extend({
  el: '#meetUpApi',

  template: require('../templates/MeetUp.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var context = {};
    context.data = this.model.get('results') || {data: []}; //data: []
    context.muTime = [];

    context.data.forEach(function (mut) {
    mutObj = {};
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var timeStamp = new Date(mut.utc_time * 1000);
    mutObj.name = mut.group_name;
    //context.day = context.timeFactor.get
    mutObj.meetUpTime = week[timeStamp.getDay()] + " " + (timeStamp.getMonth() + 1) + '/' + timeStamp.getDate() + ' at ' + timeStamp.getUTCHours() + ":" + timeStamp.getMinutes();
    context.muTime.push(mutObj);
  });

    console.log(context);

    // results.forEach(function (stuff){
    //   var contextData = {};
    //   contextData.description = stuff.description;
    //   contextData.name = "Name: " + stuff.name;
    //   contextData.updated = stuff.updated;
    //   context.info.push(contextData);
    //});

    // context.data.forEach(function (meetUp) {
    //   var dataObj = {};
    //   var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //   var timeStamp = new Date(meetUp.utc_time * 1000);
    //   //var name = data.name;
    //   // var sunrise = new Date(day.sunriseTime * 1000);
    //   // var sunset = new Date(day.sunsetTime * 1000);
    //   dataObj.time = week[timeStamp.getDay()] + '(' + (timeStamp.getMonth() + 1) + '/' + timeStamp.getDate() + ') - ' + timeStamp.getUTCHours() + ":" + timeStamp.getUTCMinutes();
      
    //   context.eventTime.push(dataObj);
    // });

    this.$el.html(this.template(context));
    return this;
  }

});

module.exports = meetUpApi;