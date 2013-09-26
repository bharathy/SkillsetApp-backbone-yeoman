describe("Skill item view test", function() {

	var skillModel;
	var skillView;

	beforeEach(function () {
	    skillModel = new skillsetApp.Models.ApplicationModel();
	    skillView = new skillsetApp.Views.skillView({model:skillModel});
	 });

	it("should have a view constructor assigned ", function(){ 
		expect(Backbone.View.extend({})).toBeDefined();	
	});

	it("should be able to instantiate a new skill item view ", function(){ 
		expect(skillView).toBeDefined();
	});

	it("should be able to get data from skill model ", function(){
		expect(skillView.model.skill).toBe(skillModel.skill);
	});

	it("Should be able to define the Dom element that's where it will be rendered, should have empty html", function(){
	 	expect(skillView.el).toBeDefined();
	 	expect(skillView.$el.html()).toBe('');
	});

	it("should have the Render function that should push html into view's el property", function(){ 
	 	skillModel.set({skill:"Javascript",score:5});
	 	skillView.render();
	 	expect(skillView.$el.html()).not.toBeEmpty();
	});

	it("should define click events ", function(){
	  	expect(skillView.events).toBeDefined();
	});

	describe ("it should be able to delete", function(){
 		it("should be able to destroy the skill model item it is associated with", function(){
 	 		skillView.removeSkill();
 	 		expect(this.model).not.toBeDefined();
 		 });
 		
 		it("should trigger removeSkill function when delete button is clicked ", function(){ 
			skillModel.set({skill:"Javascript",score:5});
	  		spyOn(skillView, 'removeSkill');
	  		skillView.delegateEvents();
	  		skillView.$('.destroy').trigger("click");
	  		expect(skillView.removeSkill).toHaveBeenCalled();
	  	});	 
 	});
});