(function()
{

	define( function()
	{
		var VillageCtrl = function($scope)
		{
            $scope.test = "Hello world";
			var myFunction = function() {
				return null;
			}
			return {
				myfunc: myFunction
			};
		};

		// Publish the constructor function
		return VillageCtrl;
	});

}());