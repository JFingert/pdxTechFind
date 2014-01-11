$(function () {

	//Load Backbone app modules and npm dependencies
	// var EventView = require('./views/event.js'),
	// 	GroupView = require('./views/group.js'),
	// 	EventsCollection = require ('./collections/events.js'),
	// 	GroupsCollection = require ('./collections/groups.js').
	// 	EventModel = require('./models/event.js'),
	// 	GroupModel = require('./models/group.js');

	//App object
	var app = {};

	//Meetup API request using JSONP
	var groupObj = {},
		eventObj = {},
		groupIds = [6693792,4808882,8407282];

	meetUpGroupRequest = function (groups) {
		var apiKey = "936f3b161c2450506d7b23683319",
		 	url = "https://api.meetup.com/2/groups?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(groupData) {
		 	groupObj = groupData;
		 	console.log(groupObj);
		});
	};

	meetUpEventRequest = function (groups) {
		var apiKey = "936f3b161c2450506d7b23683319",
		 	url = "https://api.meetup.com/2/events?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(eventData) {
		 	eventObj = eventData;
		 	console.log(eventObj);
		});
	};

	meetUpGroupRequest(groupIds);
	meetUpEventRequest(groupIds);

	// //Instantiate Backbone Models
	// app.models.event = new EventModel();
	// app.models.group = new GroupModel();

	// //Instantiate Backbone Collections
	// app.collections.events = new EventsCollection();
	// app.collections.groups = new GroupsCollection();

	// //Instantiate Backbone Views
	// app.views.event = new EventView();
	// app.views.group = new GroupView();

	//Console access to app
	window.app = app;

});