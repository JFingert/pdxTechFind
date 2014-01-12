var GroupModel = Backbone.Model.extend({
	groupObj: {},
	groupIds: [6693792,4808882,8407282],

	meetUpGroupRequest: function (groups) {
		var apiKey = "936f3b161c2450506d7b23683319",
		 	url = "https://api.meetup.com/2/groups?&sign=true&group_id=" + groupIds + "&key=" + apiKey + "&page=20";

		$.getJSON(url + "&callback=?", null, function(groupData) {
		 	groupObj = groupData;
		 	console.log(groupObj);
		});
	},
})

module.exports = GroupModel;