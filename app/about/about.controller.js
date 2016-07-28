(function(){

function aboutCtrl($scope) {

    var $ctrl=this;

    $ctrl.name = 'HassineAbout';

}

aboutCtrl.$inject = ['$scope'];
angular.module('gtec').controller('aboutCtrl',aboutCtrl);

})();