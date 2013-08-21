/*
 * @copyright Hugo Buriel 2013
 * @version 1.0.0
 */
(function()
{
	define(
		[
			'pages/contact'
		],
		function ( contact )
		{
			'use strict';

			// Contact page
			var contactPage = (function()
			{
				var _contact,

				_init = function(data)
				{
					$('#content').html(data);
				};
	
				return {

					init: _init

				};
	
			})(); // End contactPage

			// Launch app
			contactPage.init('contact page via _init function ***'); // Revealing Module Pattern
	        console.log("$: " + typeof $);

		}); // End define

})();