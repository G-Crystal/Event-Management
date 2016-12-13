angular.module('app.report')
    .factory('ReportService', function($http, $cookies) {

        var Report = {
            get_order_report: function(data) {
                return $http.get('http://staging.ticketvow.com/api/getReportOrders?token=' + $cookies.token, data).success(function(res) {
                    Report = res.data;
                })
            },

            get_ticket_report: function(data) {
                return $http.get('http://staging.ticketvow.com/api/getOrderEventList?token=' + $cookies.token, data).success(function(res) {
                    Report = res.data;
                })
            },

        };

        return Report;
    });