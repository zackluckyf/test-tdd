describe("Fizzbuzz", function() {
    it("should return 4 given 4", function() {
        expect(fizzbuzz.nums(4)).toEqual(4);
    });
    it("should return fizz given 3", function() {
        expect(fizzbuzz.nums(3)).toEqual('fizz');
    });
    it("should return buzz given 5", function() {
        expect(fizzbuzz.nums(5)).toEqual('buzz');
    });
    it("should return fizzbuzz given 15", function() {
        expect(fizzbuzz.nums(15)).toEqual('fizzbuzz');
    });
});
