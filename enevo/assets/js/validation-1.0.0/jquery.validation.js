var validation = {
	handlerClasses : {}
};

validation.Validation = function(formId) {
	this.formId = formId;
	this.formElement = jQuery("#" + formId);
	this.handlers = {};
	this.rules = new Array();
	this.ruleName = {};
	this.validationSelector = "#formValidation_" + formId;
	this.errorListId = "errorList-" + formId;
	this.errorListSelector = "#" + this.errorListId;

	this.addValidationHandlers = function (library) {
		var newHandlers = library.getHandlers();
		for (var i in newHandlers) {
			this.handlers[i] = { library : library, method : newHandlers[i] };
		}
	}

	this.addRule = function(fieldId, isRequired, checkType, errorMessage, name, enabled, options) {
		this.rules.push({
			fieldId : fieldId,
			isRequired : isRequired,
			checkFunction : (this.handlers[checkType]) ? this.handlers[checkType].library[this.handlers[checkType].method] : null,
			errorMessage : errorMessage,
			enabled : ((enabled == null) || enabled) ? true : false,
			options : (options) ? options : {}
		});
		if (name && (name != "")) {
			this.ruleName[name] = this.rules[this.rules.length - 1];
		}
	}

	/**
	 * Clears all validation rules so no validation is performed.
	 */
	this.clearRules = function() {
		this.rules = new Array();
	}

	this.setRuleEnabled = function(ruleNameList, enabled) {
		for (var i = 0; i < ruleNameList.length; i++) {
			this.ruleName[ruleNameList[i]].enabled = enabled;
			if (! enabled) {
				Element.removeClassName(this.ruleName[ruleNameList[i]].fieldId, "exceptionField");
			}
		}
	}

	/**
	 * Validates all rules for this validation object and calls the appropriate
	 * callback function depending on success or failure.
	 * Returns: True if validation succeeds, false otherwise.
	 */
	this.validate = function() {
		var errors = new Array();
		var success = new Array();
		var currRule = null;
		var currValue = null;
		var result = false;

		var formArray = this.formElement.serializeArray();
		var formValues = {};
		for (var i = 0; i < formArray.length; i++) {
			formValues[formArray[i].name] = formArray[i].value; 
		}

		for (var i = 0; i < this.rules.length; i++) {
			currRule = this.rules[i];
			
			if (formValues[currRule.fieldId]) {
				currValue = formValues[currRule.fieldId];
			} else {
				currValue = "";
			}

			if (currRule.enabled) {
				if (this.isEmpty(currValue)) {
					if(currRule.isRequired){
						errors.push({fieldId: currRule.fieldId, errorMessage: currRule.errorMessage});
					} else {
						success.push({fieldId: currRule.fieldId});
					}
				} else if (currRule.checkFunction) {
					// Test using the appropriate check function
					if (currRule.checkFunction(currValue, currRule.options, formValues)) {					
						success.push({fieldId: currRule.fieldId});
					}
					else {
						errors.push({fieldId: currRule.fieldId, errorMessage: currRule.errorMessage});
					}
				} else {
					success.push({fieldId: currRule.fieldId});
				}
			}
		}

		if (errors.length == 0) {
			this.doSuccessDisplay(success);
			this.onValidateSuccess();

			result = true;
		} else {
			this.doSuccessDisplay(success);
			this.doFailureDisplay(errors);
			this.onValidateFailure(errors);
		}

		return result;
	}

	this.onFormSubmit = function(event) {
		var isValid = this.validate();
		if (! isValid) {
			event.preventDefault();
		}
	}

	this.onValidateSuccess = function() {
		jQuery("#formValidation_" + this.formId).hide('fast');
	}

	this.doSuccessDisplay = function(fieldArray) {
		jQuery(fieldArray).each(function(index, currField) {
			var field = jQuery("#" + currField.fieldId);
				field.removeClass("errorField");
				field.parent(".Field:eq(0)").each(function (index, item) {
					var item = jQuery(item);
					item.removeClass("Error");
					item.children("p.Message").remove();
				});
		});
	}

	this.onValidateFailure = function(errors) {
		var validationContainer = jQuery(this.validationSelector);
		validationContainer.show("fast");
		// jQuery("html, body").animate({scrollTop: validationContainer.offset().top}); 
	}

	this.doFailureDisplay = function(fieldArray) {
		var errorList = jQuery(this.errorListSelector);
		if (errorList.length == 0) {
			var errorList = jQuery('<ul id="' + this.errorListId + '"></ul>');
			jQuery(this.validationSelector).append(errorList);
		} else {
			errorList.empty();
		}
		
		jQuery(fieldArray).each(function(index, currField) {
			var field = jQuery("#" + currField.fieldId);
			var message = currField.errorMessage;
				field.addClass("errorField");

				field.parent(".Field:eq(0)").each(function (index, item) {
					var item = jQuery(item);
					var errorMessage = item.children("p.Message");
					if (errorMessage.length == 0) {
						var messageElement = jQuery('<p class="Message" style="display: none;"></p>');
						item.prepend(messageElement);
						var errorMessage = messageElement;
					}
					item.addClass("Error");
					errorMessage.html('<strong>' + message + '</strong>');
					errorMessage.show();
				});
				
				errorList.append(jQuery('<li>' + message + '</li>'));
		});
	}

	/**
	 * Returns true if a value has been entered into the given field,
	 * false otherwise.
	 */
	this.isEmpty = function(value) {
		return (value.replace(/^\s+/,'').replace(/\s+$/,'').length == 0) ? true : false;
	}

	// Initialization Code
	for (var i in validation.handlerClasses) {
		this.addValidationHandlers(new validation.handlerClasses[i]());
	}

}