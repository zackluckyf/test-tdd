var fizzbuzz = (function() {
    function nums(num) {
        if (num % 15 === 0) {
            num = 'fizzbuzz';
        } else if (num % 3 === 0) {
            num = 'fizz';
        } else if (num % 5 === 0) {
            num = 'buzz';
        }
        return num;
    }
    return {
        nums: nums
    };
})();
