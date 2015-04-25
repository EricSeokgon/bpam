<!DOCTYPE html>
<html ng-app="leitbe">
<head>
<link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
</head>
<body>
  <div ng-controller="workCreateController as work">
    <h1>{{work.doit.name}}</h1>
    
    <button ng-show="work.doit.canCreate">Add Do it</button>
  </div>
<script type="text/javascript" src="angular.min.js"></script>
<script type="text/javascript" src="app.js"></script>
</body>
</html>
