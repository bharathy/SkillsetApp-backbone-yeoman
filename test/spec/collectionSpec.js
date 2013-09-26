describe("SkillSet Collection test", function() {
	var skillList;

	beforeEach(function () {
	    skillList = new skillsetApp.Collections.ApplicationCollection();
	});

	it("should be able to create an instance of a skillList (collection)", function(){ 
		expect(skillList).toBeDefined();
	});

	it("should contain Skill model ", function(){ 
		expect(skillList.model).toBe(skillsetApp.Models.ApplicationModel);
	});

	it("should store models in localstorage", function(){
		expect(skillList.localStorage).toBeDefined();
	});

	it("should add a model to the collection ", function(){ 
		var newSkill = new skillsetApp.Models.ApplicationModel({
			skill: 'HTML5', 
			score: 5
		});
		skillList.add(newSkill);
		expect(skillList.at(0)).toBe(newSkill);
	});
	
	it("should delete a model from the collection ", function(){
		var newSkill = new skillsetApp.Models.ApplicationModel({
			skill: 'CSS3', 
			score: 5
		});
		skillList.add(newSkill);
		skillList.remove(newSkill);
		expect(skillList.at(1)).not.toBeDefined();

	});

});