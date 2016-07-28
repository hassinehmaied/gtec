(function(){

function homeCtrl($scope) {

    var $ctrl=this;

    $ctrl.name = 'HassineHome';

}

homeCtrl.$inject = ['$scope'];
angular.module('gtec').controller('homeCtrl',homeCtrl);

})();