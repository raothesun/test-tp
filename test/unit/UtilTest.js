//code
Util.factorial = function(n) {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

//test

describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

/**WXW   
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {

};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {

};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {

};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {

};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

};
