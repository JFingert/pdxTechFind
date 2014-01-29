//beefy js/app.js:bundle.js --live

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
		groupIds: [8407282,10030512,4523292,8206192,6693792,6063792,4808882,4300072,9523362,900711,490808]
	};
	
	meetUpEventRequest = function (groupIds) {
		var apiKey = "936f3b161c2450506d7b23683319",
	 		url = "https://api.meetup.com/2/events?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(eventData) {
		 	app.eventObj = eventData;
		 	console.log(app.eventObj);
		 	app.models.events.set(app.eventObj);
		});
	};

	meetUpGroupRequest = function (groupIds) {
		var apiKey = "936f3b161c2450506d7b23683319",
	 		url = "https://api.meetup.com/2/groups?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(groupData) {
		 	app.groupObj = groupData;
		 	console.log(app.groupObj);
		 	app.models.groups.set(app.groupObj);
		});
	};

	//Calagator API Request
	calagatorEventRequest = function () {
		$.ajax({
    		type: "GET",
    		url: "http://calagator.org/events.json",
    		dataType: "jsonp",
    		success: function(results){
        		console.log(results);
    		},
    		error: function(XMLHttpRequest, textStatus, errorThrown){
        		alert("Error");
    		}
		});
	}


	//Instantiate Backbone Models
	app.models.events = new EventModel();
	app.models.groups = new GroupModel();

	//Instantiate Backbone Views
	app.views.event = new EventView({model: app.models.events});
	app.views.group = new GroupView({model: app.models.groups});

	//Meetup API request using JSONP & Set Model Data
	meetUpGroupRequest(app.groupIds);
	meetUpEventRequest(app.groupIds);

	//Calagator API request using JSONP
	calagatorEventRequest();

	//Console access to app
	window.app = app;
});	