describe("SkillSet Application testing", function() {

    it("Should have loaded Backbone ", function(){
        expect(Backbone).toBeDefined();
    });

    it("Should have loaded underscore ", function(){ 
        expect(Backbone.Model.extend({})).toBeDefined();
    });

    it("should have loaded Backbone.localStorage ", function(){ 
        var store = new Backbone.LocalStorage('mystore');
        expect(store).toBeDefined();

    });

    it("should have loaded jquery ", function(){ 
        expect($).toBeDefined();
    });

    it("should have loaded jasmine-jquery ", function(){
        expect($('<div id="some-id"></div>')).toBe('div#some-id');
    });

    it("Should have skillsetApp Object", function(){
        expect(skillsetApp).toBeDefined();
    });

    it("Should have skillsetApp Models Object ", function(){
        expect(skillsetApp.Models).toBeDefined();
    });

    it("Should have skillsetApp Collections Object", function(){
        expect(skillsetApp.Collections).toBeDefined();
    });

    it("Should have skillsetApp Views Object", function(){
        expect(skillsetApp.Views).toBeDefined();
    });

    it("Should have skillsetApp Routers Object", function(){
        expect(skillsetApp.Routers).toBeDefined();
    });

});