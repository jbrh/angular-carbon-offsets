MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();


var app = angular.module('carbonOffsets', ['ngAnimate']);

	var Burlingtonschooldistrict = "Burlington"
       var Burlingtonannualrateforestincrease = 270000;
       var Burlingtonforestbiomassdecimal = 0.5;
       var Burlingtonpercentforestbiomass = 50;
       var Burlingtonfueloilneeds = 300000;
       var Burlingtoncarbonemissions = 10;
       var Burlingtonforestconservancycost = 12000;
       var Burlingtonanswertoproblem1 = (1*Burlingtonannualrateforestincrease*Burlingtonforestbiomassdecimal);
       var Burlingtonanswertoproblem2 = (Burlingtonfueloilneeds*Burlingtoncarbonemissions*0.27);
       var Burlingtonanswertoproblem3 = (Burlingtonanswertoproblem2/Burlingtonanswertoproblem1);
       var Burlingtonanswertoproblem4 = Math.round(Burlingtonanswertoproblem3*Burlingtonforestconservancycost);
       
	var Columbiaschooldistrict = "Columbia"
       var Columbiaannualrateforestincrease = 200000;
       var Columbiaforestbiomassdecimal = 0.25;
       var Columbiapercentforestbiomass = 25;
       var Columbiafueloilneeds = 200000;
       var Columbiacarbonemissions = 10;
       var Columbiaforestconservancycost = 20000;
       var Columbiaanswertoproblem1 = (1*Columbiaannualrateforestincrease*Columbiaforestbiomassdecimal);
       var Columbiaanswertoproblem2 = (Columbiafueloilneeds*Columbiacarbonemissions*0.27);
       var Columbiaanswertoproblem3 = (Columbiaanswertoproblem2/Columbiaanswertoproblem1);
       var Columbiaanswertoproblem4 = Math.round(Columbiaanswertoproblem3*Columbiaforestconservancycost);
       
	var Fremontschooldistrict = "Fremont"
       var Fremontannualrateforestincrease = 250000;
       var Fremontforestbiomassdecimal = 0.4;
       var Fremontpercentforestbiomass = 40;
       var Fremontfueloilneeds = 500000;
       var Fremontcarbonemissions = 10;
       var Fremontforestconservancycost = 30000;
       var Fremontanswertoproblem1 = (1*Fremontannualrateforestincrease*Fremontforestbiomassdecimal);
       var Fremontanswertoproblem2 = (Fremontfueloilneeds*Fremontcarbonemissions*0.27);
       var Fremontanswertoproblem3 = (Fremontanswertoproblem2/Fremontanswertoproblem1);
       var Fremontanswertoproblem4 = Math.round(Fremontanswertoproblem3*Fremontforestconservancycost);
       
	var schooldistrict = "Mechanicsburg"
       var Mechanicsburgannualrateforestincrease = 200000;
       var Mechanicsburgforestbiomassdecimal = 0.5;
       var Mechanicsburgpercentforestbiomass = 50;
       var Mechanicsburgfueloilneeds = 100000;
       var Mechanicsburgcarbonemissions = 10;
       var Mechanicsburgforestconservancycost = 10000;  
       var Mechanicsburganswertoproblem1 = (1*Mechanicsburgannualrateforestincrease*Mechanicsburgforestbiomassdecimal);
       var Mechanicsburganswertoproblem2 = (Mechanicsburgfueloilneeds*Mechanicsburgcarbonemissions*0.27);
       var Mechanicsburganswertoproblem3 = (Mechanicsburganswertoproblem2/Mechanicsburganswertoproblem1);
       var Mechanicsburganswertoproblem4 = Math.round(Mechanicsburganswertoproblem3*Mechanicsburgforestconservancycost);
       
	var schooldistrict = "Woodbury"
       var Woodburyannualrateforestincrease = 300000;
       var Woodburyforestbiomassdecimal = 0.75;
       var Woodburypercentforestbiomass = 75;
       var Woodburyfueloilneeds = 200000;
       var Woodburycarbonemissions = 10;
       var Woodburyforestconservancycost = 15000;
       var Woodburyanswertoproblem1 = (1*Woodburyannualrateforestincrease*Woodburyforestbiomassdecimal);
       var Woodburyanswertoproblem2 = (Woodburyfueloilneeds*Woodburycarbonemissions*0.27);
       var Woodburyanswertoproblem3 = (Woodburyanswertoproblem2/Woodburyanswertoproblem1);
       var Woodburyanswertoproblem4 = Math.round(Woodburyanswertoproblem3*Woodburyforestconservancycost);

    
app.directive("mathjaxBind", function() { //<!--http://jsfiddle.net/spicyj/ypqvp/
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs, InformationService) {
            $scope.$watch($attrs.mathjaxBind, function(value) {
                var $script = angular.element("<script type='math/tex'>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});


app.controller('MyCtrl', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression1 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe = false;
	
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	};
	
    
});

/*app.controller('MyCtrl2', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression2 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe2 = false;
	
	$scope.myFunc = function() {
		$scope.showMe2 = !$scope.showMe2;
	};
	
    
});*/

/*app.controller('MyCtrl3', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe3 = false;
	
	$scope.myFunc = function() {
		$scope.showMe3 = !$scope.showMe3;
	};
	
    
});*/
 
       
app.controller('LocationListController', function ($scope, InformationService) {
	$scope.order = "place";
	$scope.info = InformationService;

});


app.controller('LocationDetailController', function ($scope, InformationService) {
	$scope.info = InformationService;

});


app.service('InformationService', function () {

	return {
		
		'addLocation': function (location) {
			this.locations.push(location);
		},
	
		'selectedLocation': null,
		'locations': [
			{
				"place": "Burlington",
				"annualrateforestincrease": 270000,
				"forestbiomassdecimal": 0.5,
				"percentforestbiomass": 50,
				"fueloilneeds": 30000,
				"carbonemissions": 10,
				"forestconservancycost": 12000,
				"answertoproblem1": "\ \\ 1.0\\ ha\\times \\left("+Burlingtonannualrateforestincrease.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) \\times \\ "+Burlingtonforestbiomassdecimal+" =\\ "+Burlingtonanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem2": "\ \\left("+Burlingtonfueloilneeds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ gal\\right) \\times \\left("+Burlingtoncarbonemissions+"\\frac{\ kg \\ CO_{2}}{\\ gal}\\right) \\times \\left(0.27\\frac{\\ kg \\ C}{\\ kg \\ CO_{2}}\\right) =\\ "+Burlingtonanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem3": "\ \\left("+Burlingtonanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C \\right) \\div \\left("+Burlingtonanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) =\\ "+Burlingtonanswertoproblem3+"\\ ha",
				"answertoproblem4": "\ \\left("+Burlingtonanswertoproblem3+"\\ ha\\right) \\times \\left(\\frac{\\ $\\ "+Burlingtonforestconservancycost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"}{\\ ha}\\right) =\\ $\\ "+Burlingtonanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" "

			},
			{
				"place": "Columbia",
				"annualrateforestincrease": 200000,
				"forestbiomassdecimal": 0.25,
				"percentforestbiomass": 25,
				"fueloilneeds": 200000,
				"carbonemissions": 10,
				"forestconservancycost": 20000,
				"answertoproblem1": "\ \\ 1.0\\ ha\\times \\left("+Columbiaannualrateforestincrease.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) \\times \\ "+Columbiaforestbiomassdecimal+" =\\ "+Columbiaanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem2": "\ \\left("+Columbiafueloilneeds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ gal\\right) \\times \\left("+Columbiacarbonemissions+"\\frac{\ kg \\ CO_{2}}{\\ gal}\\right) \\times \\left(0.27\\frac{\\ kg \\ C}{\\ kg \\ CO_{2}}\\right) =\\ "+Columbiaanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem3": "\ \\left("+Columbiaanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C \\right) \\div \\left("+Columbiaanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) =\\ "+Columbiaanswertoproblem3+"\\ ha",
				"answertoproblem4": "\ \\left("+Columbiaanswertoproblem3+"\\ ha\\right) \\times \\left(\\frac{\\ $\\ "+Columbiaforestconservancycost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"}{\\ ha}\\right) =\\ $\\ "+Columbiaanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" "
				
			},
			{
				"place": "Fremont",
				"annualrateforestincrease": 250000,
				"forestbiomassdecimal": 0.4,
				"percentforestbiomass": 40,
				"fueloilneeds": 500000,
				"carbonemissions": 10,
				"forestconservancycost": 30000,
				"answertoproblem1": "\ \\ 1.0\\ ha\\times \\left("+Fremontannualrateforestincrease.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) \\times \\ "+Fremontforestbiomassdecimal+" =\\ "+Fremontanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem2": "\ \\left("+Fremontfueloilneeds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ gal\\right) \\times \\left("+Fremontcarbonemissions+"\\frac{\ kg \\ CO_{2}}{\\ gal}\\right) \\times \\left(0.27\\frac{\\ kg \\ C}{\\ kg \\ CO_{2}}\\right) =\\ "+Fremontanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem3": "\ \\left("+Fremontanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C \\right) \\div \\left("+Fremontanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) =\\ "+Fremontanswertoproblem3+"\\ ha",
				"answertoproblem4": "\ \\left("+Fremontanswertoproblem3+"\\ ha\\right) \\times \\left(\\frac{\\ $\\ "+Fremontforestconservancycost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"}{\\ ha}\\right) =\\ $\\ "+Fremontanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" "
	
			},
			{
				"place": "Mechanicsburg",
				"annualrateforestincrease": 200000,
				"forestbiomassdecimal": 0.5,
				"percentforestbiomass": 50,
				"fueloilneeds": 100000,
				"carbonemissions": 10,
				"forestconservancycost": 10000,
				"answertoproblem1": "\ \\ 1.0\\ ha\\times \\left("+Mechanicsburgannualrateforestincrease.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) \\times \\ "+Mechanicsburgforestbiomassdecimal+" =\\ "+Mechanicsburganswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem2": "\ \\left("+Mechanicsburgfueloilneeds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ gal\\right) \\times \\left("+Mechanicsburgcarbonemissions+"\\frac{\ kg \\ CO_{2}}{\\ gal}\\right) \\times \\left(0.27\\frac{\\ kg \\ C}{\\ kg \\ CO_{2}}\\right) =\\ "+Mechanicsburganswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem3": "\ \\left("+Mechanicsburganswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C \\right) \\div \\left("+Mechanicsburganswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) =\\ "+Mechanicsburganswertoproblem3+"\\ ha",
				"answertoproblem4": "\ \\left("+Mechanicsburganswertoproblem3+"\\ ha\\right) \\times \\left(\\frac{\\ $\\ "+Mechanicsburgforestconservancycost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"}{\\ ha}\\right) =\\ $\\ "+Mechanicsburganswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" "
	
			},
			{
				"place": "Woodbury",
				"annualrateforestincrease": 300000,
				"forestbiomassdecimal": 0.75,
				"percentforestbiomass": 75,
				"fueloilneeds": 200000,
				"carbonemissions": 10,
				"forestconservancycost": 15000,
				"answertoproblem1": "\ \\ 1.0\\ ha\\times \\left("+Woodburyannualrateforestincrease.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) \\times \\ "+Woodburyforestbiomassdecimal+" =\\ "+Woodburyanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem2": "\ \\left("+Woodburyfueloilneeds.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ gal\\right) \\times \\left("+Woodburycarbonemissions+"\\frac{\ kg \\ CO_{2}}{\\ gal}\\right) \\times \\left(0.27\\frac{\\ kg \\ C}{\\ kg \\ CO_{2}}\\right) =\\ "+Woodburyanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C",
				"answertoproblem3": "\ \\left("+Woodburyanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kg \\ C \\right) \\div \\left("+Woodburyanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\\ kg \\ C}{\\ ha}\\right) =\\ "+Woodburyanswertoproblem3+"\\ ha",
				"answertoproblem4": "\ \\left("+Woodburyanswertoproblem3+"\\ ha\\right) \\times \\left(\\frac{\\ $\\ "+Woodburyforestconservancycost.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"}{\\ ha}\\right) =\\ $\\ "+Woodburyanswertoproblem4.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" "
	
			},
		]
		
	};
});