(function()
{

    define([
        'structure/footer/footerCtrl'
    ], function(footerCtrl)
    {
        var FooterDirective = function()
        {
            var dir = {
                templateUrl: 'structure/footer/footer.html',
                controller: footerCtrl
            }

            return dir
        };

        // Publish the constructor function
        return FooterDirective;
    });

}());