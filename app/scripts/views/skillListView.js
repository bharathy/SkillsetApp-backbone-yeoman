/*global skillsetApp, Backbone*/

skillsetApp.Views = skillsetApp.Views || {};

(function($){
	// renders the full list of added skills calling itemView for each one.
    skillsetApp.Views.ApplicationView= Backbone.View.extend({
      	el: '#skillsetapp',
      	initialize: function () {
	        this.inputSkill = this.$('#inputSkill');
	        this.inputScore = this.$('#inputScore');
	        this.rightCol = this.$('.rc');
	        if(typeof skillsetApp.skills !== 'undefined'){
	    		skillsetApp.skills.on('add', this.addSkill, this);
	        	skillsetApp.skills.on('reset', this.addAllSkill, this);
	        	skillsetApp.skills.on('remove', this.toggleTableView, this);
	        	skillsetApp.skills.fetch(); // Loads list from local storage
	    	}
	    	this.toggleTableView();
	    	
		},
		events: {
			'click #addSkill': 'createSkill'
		},
		createSkill: function(e){
			//this validation logic can be done with backbone.validation plugin.
			var error = [];
			var score = this.inputScore.val();
			var userEnteredSkill = this.inputSkill.val();
			var isSkillExist = false;

			skillsetApp.skills.find(function(item){
    			if(item.get('skill') == userEnteredSkill){ isSkillExist = true; }
			});

			if($.trim(score) === '' || (isNaN(score )) || (score < 0)  || (score  > 5)){
				error.push('Please enter required score in 0 - 5 scale.<br/>');
				this.inputScore.focus();
			}
			if($.trim(this.inputSkill.val()) === ''){
				error.push('Please enter required skill field.<br/>');
				this.inputSkill.focus();
			}
			if(isSkillExist){
				error.push('Already "'+ userEnteredSkill + '" skill exist. So please add new skill! <br/>');
				this.inputSkill.focus();
			}
			if(error.length === 0 ){
				$('.error').html('');
				skillsetApp.skills.create(this.newAttributes()); 
				this.inputSkill.val(''); 
				this.inputScore.val('');
			}
			else{
				$('.error').html(error.join(''));
			}
			this.toggleTableView();
		},
		addSkill: function(skill){
			var view = new skillsetApp.Views.skillView({model: skill});
			$('#skillList').append(view.render().el);
		},
		addAllSkill: function(){
			this.$('#skillList').html(''); 
			skillsetApp.skills.each(this.addSkill, this);
		},
		newAttributes: function(){
			return {
				skill: this.inputSkill.val().trim(),
				score: this.inputScore.val().trim()
			}
		},
		toggleTableView : function(){
			if ( skillsetApp.skills.length ) {
		        this.rightCol.show();
			} else {
				this.rightCol.hide();
			}
		}
    });

})(jQuery);





