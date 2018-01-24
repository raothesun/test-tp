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
    
    it("Should return [10,20] and [30,40] when [10,20] unions [30,40]", function(){
        var result = testedInterval.union(new Interval(30,40))
        expect(result).toEqual([new Interval(10,20), new Interval(30,40)])
    });

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
    var bigInterval = new Interval(5, 50);
    var notOverlappingInterval = new Interval(30, 40);
    var includedInterval = new Interval(14,15);

    it("Should return null when "+testedInterval.toString()+" excludes "+bigInterval.toString(),function(){
        var result = testedInterval.exclusion(bigInterval)
        expect(result).toBeNull();
    });

    it("Should return "+testedInterval.toString()+" when "+testedInterval.toString()+" excludes "+notOverlappingInterval.toString(),function(){
        var result = testedInterval.exclusion(notOverlappingInterval)
        expect(result).toEqual(testedInterval);
    });

    it("Should return two intervals when "+testedInterval.toString()+" excludes "+includedInterval.toString(),function(){
        var result = testedInterval.exclusion(includedInterval)
        expect(result).toEqual([new Interval(10,14), new Interval(15,20)]);
    });
    
    var testCases = [
        {
            interv : new Interval(15,30),
            res : new Interval(10,15)
        },
        {
            interv : new Interval(5,15),
            res : new Interval(15,20)
        }
    ];

    testCases.forEach(function(testCase){
        it("Should return " + testCase.res.toString() + " when " + testedInterval.toString() + " excludes " + testCase.interv.toString(), function(){
            var result = testedInterval.exclusion(testCase.interv);
            expect(result).toEqual(testCase.res);
        });
    });
});