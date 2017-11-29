'use strict';

module.exports = {

	capitalizeFirstLetter: function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

    changeCamelCaseToHyphenated: function (string) {
        var result = '';
        for (var i = 0; i < string.length; i++) {
            var char = string[i];
            if (char === char.toUpperCase()) {
                if (result) {
                    result += '-';
                }
                result += char.toLowerCase();
            } else {
                result += char;
            }
        }
        return result;
    }

};
