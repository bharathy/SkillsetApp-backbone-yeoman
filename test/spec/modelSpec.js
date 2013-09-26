describe("SkillSet model (to create individual skill list items)", function() {
	var skillModel;
	beforeEach(function () {
	    skillModel = new skillsetApp.Models.ApplicationModel();
	});

	it("should be able to create an instance of a skill item", function(){ 
		expect(skillModel).toBeDefined();
	});

	it("should have a Skill attribute", function(){ 
		skillModel.set({skill:"Javascript"});
		expect(skillModel.get("skill")).toBeDefined();
	});

	it("should have a Score attribute", function(){ 
		skillModel.set({score:3});
		expect(skillModel.get("score")).toBeDefined();
	});

});