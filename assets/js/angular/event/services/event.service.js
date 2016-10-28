angular.module('app.event')
    .factory('EventService', function($http, $cookies) {

        var Event = {
            event_details: function(data) {
                return $http.get('http://staging.ticketvow.com/api/event/' + 14);
            },

            /*event_category: function(data) {
              return $http.get('http://staging.ticketvow.com/api/getEventCategory', data);
            },*/

            publish: function(data) {
                return $http.post('http://staging.ticketvow.com/api/addevent', data);
            },

            search_event: function(data) {
                return $http.get('http://staging.ticketvow.com/api/getSearchEvent', data);
            },

            featured_event: function() {
                return $http.get('http://staging.ticketvow.com/api/getFeaturedEvent');
            },

            upcoming_event: function(data) {
                return $http.get('http://staging.ticketvow.com/api/getUpcomingEvents?token=' + $cookies.token, data).success(function(res) {
                    Organizer = res.data;
                })
            },

            past_event: function(data) {
                return $http.get('http://staging.ticketvow.com/api/getPastEvents?token=' + $cookies.token, data).success(function(res) {
                    Organizer = res.data;
                })
            },

            delete_event: function(data) {
                return $http.get('http://staging.ticketvow.com/api/deleteEvents?token=' + $cookies.token, data).success(function(res) {
                    Organizer = res.data;
                })
            },

            /*uploadFileToUrl = function(file, uploadUrl) {
              var fd = new FormData();
              fd.append('file', file);

              $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
              })
              .success(function() {
              })
              .error(function() {
              });
            }*/

        };

        return Event;
    })

// adapted from angular's $timeout code
.factory('$debounce', ['$rootScope', '$browser', '$q', '$exceptionHandler',
    function($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {},
            methods = {},
            uuid = 0;

        function debounce(fn, delay, invokeApply) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                timeoutId, cleanup,
                methodId, bouncing = false;

            // check we dont have this method already registered
            angular.forEach(methods, function(value, key) {
                if (angular.equals(methods[key].fn, fn)) {
                    bouncing = true;
                    methodId = key;
                }
            });

            // not bouncing, then register new instance
            if (!bouncing) {
                methodId = uuid++;
                methods[methodId] = { fn: fn };
            } else {
                // clear the old timeout
                deferreds[methods[methodId].timeoutId].reject('bounced');
                $browser.defer.cancel(methods[methodId].timeoutId);
            }

            var debounced = function() {
                // actually executing? clean method bank
                delete methods[methodId];

                try {
                    deferred.resolve(fn());
                } catch (e) {
                    deferred.reject(e);
                    $exceptionHandler(e);
                }

                if (!skipApply) $rootScope.$apply();
            };

            timeoutId = $browser.defer(debounced, delay);

            // track id with method
            methods[methodId].timeoutId = timeoutId;

            cleanup = function(reason) {
                delete deferreds[promise.$$timeoutId];
            };

            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            promise.then(cleanup, cleanup);

            return promise;
        }


        // similar to angular's $timeout cancel
        debounce.cancel = function(promise) {
            if (promise && promise.$$timeoutId in deferreds) {
                deferreds[promise.$$timeoutId].reject('canceled');
                return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
        };

        return debounce;
    }
]);