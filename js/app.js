$(function () {

	//Load Backbone app modules and npm dependencies
	// var EventView = require('./views/event.js'),
		var GroupView = require('./views/group.js'),
	// EventModel = require('./models/event.js'),
		GroupModel = require('./models/group.js');

	//App object
	var app = {};

	//Meetup API request using JSONP

	meetUpGroupRequest(groupIds);
	meetUpEventRequest(groupIds);

	//Instantiate Backbone Models
	app.models.event = new EventModel();
	app.models.group = new GroupModel();

	//Instantiate Backbone Collections
	// app.collections.events = new EventsCollection();
	// app.collections.groups = new GroupsCollection();

	//Instantiate Backbone Views
	// app.views.event = new EventView();
	app.views.group = new GroupView();

	//Console access to app
	window.app = app;

});