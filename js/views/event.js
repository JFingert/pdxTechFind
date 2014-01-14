var EventView = Backbone.View.extend({
  	el: '#events',

  	template: require('../../templates/events.hbs'),

  	initialize: function () {
    	this.listenTo(this.model, 'change', this.render);
    	this.render;
  	},
	
	render: function () {
	   	this.$el.html(this.template(this.model.get('results') || { data: [] }));
	    return this;
	}
});

module.exports = EventView;