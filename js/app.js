$(function () {

	//Load Backbone app modules and npm dependencies
	var EventView = require('./views/event.js'),
	GroupView = require('./views/group.js'),
	EventModel = require('./models/event.js'),
	GroupModel = require('./models/group.js');

	//App objects
	var app = {
		models: {},
		views: {},
		eventObj: {},
		groupObj: {},
		groupIds: [6693792,4808882,8407282]
	};
	
	meetUpEventRequest = function (groupIds) {
		var apiKey = "936f3b161c2450506d7b23683319",
	 		url = "https://api.meetup.com/2/events?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(eventData) {
		 	eventObj = eventData;
		 	console.log(eventObj);
		});
	}


	meetUpGroupRequest = function (groupIds) {
		var apiKey = "936f3b161c2450506d7b23683319",
	 		url = "https://api.meetup.com/2/groups?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(groupData) {
		 	groupObj = groupData;
		 	console.log(groupObj);
		});
	}

	//Instantiate Backbone Models
	app.models.events = new EventModel();
	app.models.groups = new GroupModel();

	//Set Model Data
	app.models.events.set(app.eventObj);
	app.models.groups.set(app.groupObj);

	//Instantiate Backbone Views
	app.views.event = new EventView();
	app.views.group = new GroupView();

	//Meetup API request using JSONP
	meetUpGroupRequest(app.groupIds);
	meetUpEventRequest(app.groupIds);

	//Console access to app
	window.app = app;
});	