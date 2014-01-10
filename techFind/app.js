$(function () { // wait for on-ready


var jsView = require('./views/meetUp.js');
var MeetUpModel = require('./models/meetUpModel.js');

var app = {};
app.views = {};
app.models = {};
app.collections = {};

var url = "https://api.meetup.com/events.json/?&topic=javascript&time=,&country=us&state=or&city=portland&key=2e573f48477c78263ed418797a647c&callback=?";


app.models.currentMeetUps = new MeetUpModel({events: {}});

app.views.js = new jsView({model: app.models.currentMeetUps});

window.app = app;

$.getJSON(url, null, function(data) {
  app.models.currentMeetUps.set(data);
  console.log(data);
});
});




//var APIKey = "2e573f48477c78263ed418797a647c"

//var url = "http://api.meetup.com/topics.json/";