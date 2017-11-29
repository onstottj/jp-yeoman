(function () {
	'use strict';
	angular.module('<%=module%>')
		.directive('<%=directive%>', <%=directive%>);

	/**
	 * <%=directive%> directive
	 *
	 * TODO:
	 *  - See the John Papa Angular style guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
	 *  - This directive has isolate scope to keep things self-contained (not part of the style guide, but recommended for simplicity)
	 */
	function <%=directive%>() {
		var directive = {
			restrict: 'EA',
			templateUrl: '<%=path%>/<%=filename%>.directive.html',
			scope: {},
			controller: <%=controller%>,
			controllerAs: 'vm',
			bindToController: true
		};
		return directive;
	}

	<%=controller%>.$inject = [];
    function <%=controller%>() {
		var vm = this;

		/**
		 * TODO:
		 *  - We're using 'vm' instead of '$scope' (the HTML template also refers to 'vm')
		 *  - Assign values in alphabetical order, declaring functions lower in the file
		 */
		vm.abc = 12;
		vm.someFunction = someFunction;

		activate();

		function activate() {
			// TODO: do initialization here
		}

		function someFunction() {
			// TODO: this is an example of a function added to 'vm'
		}
    }
})();