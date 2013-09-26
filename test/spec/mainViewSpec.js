describe ("Skill List View", function(){
	var skillList;
	var skillListView;
	var skillModel;
	var fixture = '<div id="fixture"><div class="container hide"  id="skillsetapp">'+
            	'<div class="container-fluid">'+
                '<div class="row-fluid">'+
                    '<div class="span5 lc">'+
                        '<p class="error"></p>'+
                            '<div class="control-group">'+
                                '<label class="control-label" for="inputSkill">Skill</label>'+
                                '<div class="controls">'+
                                    '<input type="text" id="inputSkill" placeholder="Add Skill">'+
                                '</div>'+
                            '</div>'+
                            '<div class="control-group">'+
                                '<label class="control-label" for="inputScore">Score</label>'+
                                '<div class="controls">'+
                                    '<input type="text" id="inputScore" placeholder="Score range 0 -5">'+
                                '</div>'+
                            '</div>'+
                            '<div class="control-group">'+
                                '<button type="submit" id="addSkill" class="btn btn-primary">Add Skill</button>'+
                            '</div>'+
                    '</div>'+
                    '<div class="span7 rc">'+
                            '<table class="table table-bordered" id="skillList">'+
                                '<tr>'+
                                    '<th>SkillSets</th>'+
                                    '<th>Score</th>'+
                                    '<th>Action</th>'+
                                '</tr>'+
                            '</table>'+
                    '</div>'+
                '</div></div></div></div>';

	beforeEach(function(){
		$('#fixture').remove();
    	$('body').append(fixture);
		skillModel = new skillsetApp.Models.ApplicationModel();
		skillList = new skillsetApp.Collections.ApplicationCollection();
	 	skillListView = new skillsetApp.Views.ApplicationView({collection:skillList});
	});

	it("shows all Skillsets in a list ", function(){
		//create two skills
		var skill1 = new skillsetApp.Models.ApplicationModel({skill: "Backbone", score:5});
		var skill2 = new skillsetApp.Models.ApplicationModel({skill: "AngularJS", score:5});
		//create skill list
		skillList.add(skill1);
		skillList.add(skill2);
		expect(skillListView.collection.length).toBe(2);
	 });

	it("should be able to instantiate a new skill item view ", function(){ 
		expect(skillListView).toBeDefined();
	});

	it("should define click events ", function(){
	  	expect(skillListView.events).toBeDefined();
	});

	it("should have skill input bound to it as property", function(){
	  	expect(skillListView.inputSkill).toBeDefined();
	  	expect(skillListView.inputSkill).toBe($('#inputSkill'));
	});

	it("should have score input bound to it as property ", function(){
	  	expect(skillListView.inputScore).toBeDefined();
	  	expect(skillListView.inputScore).toBe($('#inputScore'));
	});

	it("should have rightCol bound to it as property ", function(){
	  	expect(skillListView.rightCol).toBeDefined();
	  	expect(skillListView.rightCol).toBe($('.rc'));
	});

	it("Should fire createSkill method if addSkill button is clicked ", function(){ 
  		spyOn(skillListView, 'createSkill');
  		skillListView.delegateEvents();
  		$('#addSkill').trigger("click");
  		expect(skillListView.createSkill).toHaveBeenCalled();
 	});

 	it("should focus on score input field and should throw error for score having value > 5 ", function(){
	  	if($('#inputSkill').val()!='test me') { $('#inputSkill').val('test me'); }
	  	$('#inputScore').val(50);
	  	skillListView.delegateEvents();
  		$('#addSkill').trigger("click");
  		var error = $('.error').html().split('<br/>');
  		//var focus= document.activeElement;  //finds what element on the page has focus
        //expect(focus).toBe('#inputScore');
        expect($('.error').html()).toContain('Please enter required score in 0 - 5 scale');
	});

	it("should throw error for  score having value < 0 ", function(){
	  	if($('#inputSkill').val()!='test me') { $('#inputSkill').val('test me'); }
	  	$('#inputScore').val(-1);
	  	skillListView.delegateEvents();
  		$('#addSkill').trigger("click");
  		var error = $('.error').html().split('<br/>');
        expect($('.error').html()).toContain('Please enter required score in 0 - 5 scale');
	});

	it("should throw error for  score having  non numeric value ", function(){
	  	if($('#inputSkill').val()!='test me') { $('#inputSkill').val('test me'); }
	  	$('#inputScore').val('sas');
	  	skillListView.delegateEvents();
  		$('#addSkill').trigger("click");
  		var error = $('.error').html().split('<br/>');
        expect($('.error').html()).toContain('Please enter required score in 0 - 5 scale');
	});

	it("should throw error for Skill having repeated value instead of unique ", function(){
	  	$('#inputSkill').val('test me'); 
	  	$('#inputScore').val(5);
	  	skillListView.delegateEvents();
  		$('#addSkill').trigger("click");
  		var error = $('.error').html().split('<br/>');
        expect($('.error').html()).toContain('So please add new skill!');
	});

	afterEach(function() {
    	$('#fixture').remove();
  	});

});