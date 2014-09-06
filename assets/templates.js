angular.module('templates-app', ['app/home/home.tpl.html']);

angular.module("app/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home.tpl.html",
    "<div class=\"home\">\n" +
    "  <p>This is an Angular app based page :).</p>\n" +
    "  <p>Showing $scope value: {{test}}</p>\n" +
    "</div>\n" +
    "");
}]);
