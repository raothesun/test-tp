Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.start < interval.start && this.end > interval.end
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {

		var start;
		var end;

		if(!this.overlaps(interval)){
			return [this, interval];
		}

		if(this.start < interval.start){
			start = this.start;
		}
		else{
			start = interval.start;
		}

		if(this.end > interval.end){
			end = this.end;
		}
		else{
			end = interval.end;
		}

		return new Interval(start, end);
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
		
		var start;
		var end;

		if(!this.overlaps(interval)){
			return null;
		}

		if(this.start > interval.start){
			start = this.start;
		}
		else{
			start = interval.start;
		}

		if(this.end < interval.end){
			end = this.end;
		}
		else{
			end = interval.end;
		}

		return new Interval(start, end);
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
		
		var start;
		var end;

		if(!this.overlaps(interval)){
			throw 'The two intervals do not overlap and therefore cannot be exclusionned'
		}

		if(this.start > interval.start){
			start = this.start;
		}
		else{
			start = interval.start;
		}

		if(this.end < interval.end){
			end = this.end;
		}
		else{
			end = interval.end;
		}

		return new Interval(start, end);
};



