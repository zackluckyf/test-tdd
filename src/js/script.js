var flyingDragon = (function() {
    var name = 'bob';
    var nameChange = function(string) {
        this.name = string;
    };
    var addAge = function(age) {
        this.age = age;
    };

    return {
        name: name,
        nameChange: nameChange,
        addAge: addAge
    };
})();
