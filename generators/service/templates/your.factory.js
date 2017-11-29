(function () {
	'use strict';
	angular.module('<%=module%>')
		.factory('<%=service%>', <%=service%>);

	/**
	 * <%=service%> service
	 *
	 * TODO:
	 *  - See the John Papa Angular style guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
	 *  - This is declared using the factory syntax per the John Papa code style (even if it is a plain service)
	 */
	<%=service%>.$inject = [];
	function <%=service%>() {
		var service = {
			abc: 12,
			someFunction: someFunction
		};
		activate();
		return service;

		function activate() {
			// TODO: do initialization here
		}

		function someFunction() {
			// TODO: remove this (just an example)
		}
	}

})();
