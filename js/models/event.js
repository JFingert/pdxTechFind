var EventModel = Backbone.Model.extend({
		eventObj: {},
		groupIds: [6693792,4808882,8407282],


	meetUpEventRequest: function (groups) {
		var apiKey = "936f3b161c2450506d7b23683319",
		 	url = "https://api.meetup.com/2/events?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(eventData) {
		 	eventObj = eventData;
		 	console.log(eventObj);
		});
	};
});

module.exports = EventModel;