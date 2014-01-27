$(function () { // wait for on-ready


var pyView = require('./views/pyView.js');
var MeetUpModel = require('./models/meetUpModel.js');

var app = {};
app.views = {};
app.models = {};
app.collections = {};

var url2 = "https://api.meetup.com/events.json/?&topic=python&time=,&country=us&state=or&city=portland&key=2e573f48477c78263ed418797a647c&callback=?";


app.models.currentMeetUps = new MeetUpModel({events: {}});

app.views.py = new pyView({model: app.models.currentMeetUps});

window.app = app;

$.getJSON(url2, null, function(pyData) {
  app.models.currentMeetUps.set(pyData);
  console.log(pyData);
});
});




//var APIKey = "2e573f48477c78263ed418797a647c"

//var url = "http://api.meetup.com/topics.json/";