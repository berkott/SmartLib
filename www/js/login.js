ons.bootstrap()

.controller('DialogController', function($scope) {
  $scope.dialogs = {};

  $scope.show = function(dlg) {
    if (!$scope.dialogs[dlg]) {
      ons.createDialog(dlg).then(function(dialog) {
        $scope.dialogs[dlg] = dialog;
        dialog.show();
      });
    } else {
      $scope.dialogs[dlg].show();
    }
  }
});