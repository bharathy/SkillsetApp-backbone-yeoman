/*global skillsetApp, Backbone*/

skillsetApp.Views = skillsetApp.Views || {};

(function($){
	// renders individual skill items list
	skillsetApp.Views.skillView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template($('#item-template').html()),
		events : {
			'click .destroy': 'removeSkill',
		},
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.removeSkill);    
    	},
		removeSkill : function() {
			this.model.destroy();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this; 
		}
	});

})(jQuery);





