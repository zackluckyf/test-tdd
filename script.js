var flyingDragon = (function() {
    var name = 'bob';
    var nameChange = function(string) {
        this.name = string;
    };
    return {
        name: name,
        nameChange: nameChange
    };
})();
