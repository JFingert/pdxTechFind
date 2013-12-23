$(function () { // wait for on-ready


var ApiView = require('./views/meetUp.js');
var MeetUpModel = require('./models/meetUpModel.js');

var app = {};
app.views = {};
app.models = {};
app.collections = {};


app.models.currentMeetUps = new MeetUpModel({events: {}});
app.views.api = new ApiView({model: app.models.currentMeetUps});

window.app = app;

//app.models.currentMeetUps.fetch();


//var url = "http://api.meetup.com/topics.json/?callback=?&page=1&key=2e573f48477c78263ed418797a647c";
//var url = "https://api.meetup.com/2/open_events.xml?topic=javascript&time=,1w&key=2e573f48477c78263ed418797a647c";
var url = "https://api.meetup.com/events.json/?callback=?&page=1&key=2e573f48477c78263ed418797a647c&group_urlname=nodepdx&sign=true";

$.getJSON(url, null, function(meetupdata) {
  app.models.currentMeetUps.set(meetupdata);
  console.log(meetupdata);
});
});




//var APIKey = "2e573f48477c78263ed418797a647c"

//var url = "http://api.meetup.com/topics.json/";