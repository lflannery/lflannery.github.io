validation.handlerClasses["com.edomgroup.BasicValidation"] = function() {
	this.handlers = {
		number: "isNumber",
		email: "isEmail",
		phone: "isPhone",
		telephone: "isPhone",
		creditcard: "isCreditCard",
		commonUsDate: "isCommonUsDate",
		confirm : "confirmField",
		list: "isInList"
	};
	
	this.getHandlers = function(){
		return this.handlers;
	}
	
	this.isNumber = function(value, options){
		if(String(value).match(/[0-9\.-]+/i)){
			value = parseFloat(value);

			if((options.min != undefined) && value < parseFloat(options.min)){
				return false;
			}
			if((options.max != undefined) && value > parseFloat(options.max)){
				return false;
			}
			return true;
		}else{
			return false;
		}
	}
	
	this.isEmail = function(value){
		var emailRegex = /^[a-zA-Z_0-9-'\+~]+(\.[a-zA-Z_0-9-'\+~]+)*@([a-zA-Z_0-9-]+\.)+[a-zA-Z]{2,7}$/;
		// Trim whitespace
		value = value.replace(/^\s+/, '').replace(/\s+$/, '');
		// Test email regex
		return emailRegex.test(value);
	}
	
	this.isPhone = function(value){
		// Remove all non-digits
		value = value.replace(/\D/g, '');
		// Check for a length between 10 and 15
		return (value.length >= 10 && value.length <= 15) ? true : false;
	}
	
	this.isCreditCard = function(value){
		var test = value.replace(/[^\d]/g);
		return (test.length >= 13 && test.length <= 16);
	}
	
	/**
	 * Returns true if the given year, month, and day represent a valid date.
	 */
	this.isCommonUsDate = function(value){
		if (value.match(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/)) {
			var dateSplit = value.split("/");
			// Subtract 1 from month because JS dates use 0 offset
			dateSplit[0] = dateSplit[0] - 1;
			
			if (dateSplit.length == 3) {
				testDate = new Date(dateSplit[2], dateSplit[0], dateSplit[1]);
				
				if (testDate.getDate() == dateSplit[1] &&
				testDate.getMonth() == dateSplit[0] &&
				testDate.getFullYear() == dateSplit[2]) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Returns true if the value is equal to the confirm field's value.
	 */
	this.confirmField = function(value, options, formValues) {
		return ((formValues[options.confirmFieldName]) ? (formValues[options.confirmFieldName] == value) : false);
	}

	/**
	 * Returns true if the value is in the given list option.
	 */
	this.isInList = function(value, options) {
		return (jQuery.inArray(
			value,
			options.list.split((options.delimiter) ? options.delimiter : ",")
		)) > -1;
	}
}