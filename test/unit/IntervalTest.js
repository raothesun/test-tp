describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - Includes", function(){
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(17, 19)

    ].forEach(function (interval) {
        it("should include " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(8, 12),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not include " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - Union", function(){

    var testedInterval = new Interval(10,20);
    
    var testCasesOverlapping = [
        {
            interv : new Interval(15,30),
            res : new Interval(10,30)
        },
        {
            interv : new Interval(5,20),
            res : new Interval(5,20)
        },
        {
            interv : new Interval(12,13),
            res : new Interval(10,20)
        }
    ];
    testCasesOverlapping.forEach(function(testCase){
        it("Should return " + testCase.res.toString() + " when " + testedInterval.toString() + " unions " + testCase.interv.toString(), function(){
            var result = testedInterval.union(testCase.interv);
            expect(result).toEqual(testCase.res);
        });
    });
});

describe("Interval - Intersection", function(){

    var testedInterval = new Interval(10,20);

    it("should return null when intervals don't ovelap",function(){
        var result = testedInterval.intersection(new Interval(30,40));
        expect(result).toBeNull();
    });
    
    var testCases = [
        {
            interv : new Interval(15,30),
            res : new Interval(15,20)
        },
        {
            interv : new Interval(5,20),
            res : new Interval(10,20)
        },
        {
            interv : new Interval(12,13),
            res : new Interval(12,13)
        }
    ];

    testCases.forEach(function(testCase){
        it("Should return " + testCase.res.toString() + " when " + testedInterval.toString() + " intersects " + testCase.interv.toString(), function(){
            var result = testedInterval.intersection(testCase.interv);
            expect(result).toEqual(testCase.res);
        });
    });
});

describe("Interval - Exclusion", function(){

    var testedInterval = new Interval(10,20);

    it("should raise an exception when intervals don't ovelap",function(){
        var f = function(){
            testedInterval.exclusion(new Interval(30,40));
        }
        expect(f).toThrow('The two intervals do not overlap and therefore cannot be exclusionned');
    });
    
    var testCases = [
        {
            interv : new Interval(15,30),
            res : new Interval(15,20)
        },
        {
            interv : new Interval(5,20),
            res : new Interval(10,20)
        },
        {
            interv : new Interval(12,13),
            res : new Interval(12,13)
        }
    ];

    testCases.forEach(function(testCase){
        it("Should return " + testCase.res.toString() + " when " + testedInterval.toString() + " excludes " + testCase.interv.toString(), function(){
            var result = testedInterval.exclusion(testCase.interv);
            expect(result).toEqual(testCase.res);
        });
    });
});