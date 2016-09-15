describe("Flying Dragon", function() {
    it("should be defined", function() {
        expect(flyingDragon.name).toEqual('bob');
    });
    it("should be able to change name", function() {
        flyingDragon.nameChange('sarah');
        expect(flyingDragon.name).toEqual('sarah');
    });
});
