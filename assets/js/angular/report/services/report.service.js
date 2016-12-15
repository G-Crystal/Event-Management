angular.module('app.report')
    .factory('ReportService', function($http, $cookies) {

        var Report = {
            get_order_report: function(data) {
                return $http.post('http://staging.ticketvow.com/api/getReportOrders?token=' + $cookies.token, data).success(function(res) {
                    Report = res.data;
                })
            },

            get_ticket_report: function(data) {
                return $http.get('http://staging.ticketvow.com/api/getOrderTickets/' + data.id + '?token=' + $cookies.token, data).success(function(res) {
                    Report = res.data;
                })
            },

            get_order_filter_event: function() {
                return $http.get('http://staging.ticketvow.com/api/getOrderEventList?token=' + $cookies.token).success(function(res) {
                    Report = res.data;
                })
            },

            get_recent_order: function(data) {
                return $http.post('http://staging.ticketvow.com/api/getRecentOrders?token=' + $cookies.token, data).success(function(res) {
                    Report = res.data;
                })
            },

            get_box_office: function(data) {
                return $http.post('http://staging.ticketvow.com/api/getBoxOffice?token=' + $cookies.token, data).success(function(res) {
                    Report = res.data;
                })
            },

        };

        return Report;
    });