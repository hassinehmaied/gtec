angular.module('gtec', []);

angular.module('gtec').controller('gCtrl',function ($scope) {
    var $ctrl=this;

    $ctrl.list = [
    {firstname:'hassine'},
    {lastname:'hmaied'},
    {age:'43'},
    {age:'26'},
    {adresse:'kélibia'}
    ];

    $ctrl.name="salut";
    $ctrl.ok="yes";
});

angular.module('gtec').controller('g1Ctrl',function ($scope) {
    var $ctrl=this;
    $ctrl.name="hassine";
    $ctrl.hass="hmaied";
});

