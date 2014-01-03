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

 //var url = "https://api.meetup.com/events.json/?callback=?&page=1&key=2e573f48477c78263ed418797a647c&?zip=97212&group_urlname=nodepdx&sign=true";

var url = "https://api.meetup.com/groups.json/?&topic=javascript&country=us&state=or&city=portland&key=2e573f48477c78263ed418797a647c&callback=?";
//var url = "https://api.meetup.com/groups/?topic=javascript&page=1&offset=0&order=members&key=2e573f48477c78263ed418797a647c&callback=?";
//var url = "https://api.meetup.com/events.json/?callback=?&page=1&key=2e573f48477c78263ed418797a647c&?zip=97212&topic=34&sign=true";
//var url = "https://api.meetup.com/events.json/?callback=?&topics?&sign=true&topic=tech&page=20";
//var url = "http://api.meetup.com/topics.json/?callback=?&page=1&key=2e573f48477c78263ed418797a647c";
//var url = "https://api.meetup.com/2/open_events.xml?topic=javascript&time=,1w&key=2e573f48477c78263ed418797a647c";
//var url = "http://api.meetup.com/groups/?zip=97210&topic=tech&order=members&key=2e573f48477c78263ed418797a647c";
//var url = "https://api.meetup.com/2/open_events?&sign=true&state=or&city=portland&category=34&zip=97212&page=20";
$.getJSON(url, null, function(meetupdata) {
  app.models.currentMeetUps.set(meetupdata);
  console.log(meetupdata);
});
});




//var APIKey = "2e573f48477c78263ed418797a647c"

//var url = "http://api.meetup.com/topics.json/";