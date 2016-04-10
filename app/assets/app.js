var app=angular.module("app",["ngRoute"]);console.log("In the MODULAR Angular files in 'ng' directory");var app=angular.module("app");app.controller("LoginCtrl",["$scope","UserSvc",function(t,o){t.login=function(t,e){o.login(t,e).then(function(t){console.log(t)})}}]);var app=angular.module("app");app.controller("PostsCtrl",["$scope","PostsSvc",function(t,o){t.addPost=function(){t.postBody&&(post={username:"MookersService",body:t.postBody},o.create(post).success(function(o){t.posts.unshift(o),t.postBody=null}),t.postBody=null)},o.fetch().success(function(o){t.posts=o})}]);var app=angular.module("app");app.service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("api/posts")},this.create=function(o){return t.post("api/posts",o)}}]);var app=angular.module("app");app.config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]);var app=angular.module("app");app.service("UserSvc",["$http",function(t){var o=this;o.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},o.login=function(e,n){return t.post("/api/sessions",{username:e,password:n}).then(function(t){return o.token=t.data,o.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImxvZ2luLmN0cmwuanMiLCJwb3N0cy5jdHJsLmpzIiwicG9zdHMuc3ZjLmpzIiwicm91dGVzLmpzIiwidXNlci5zdmMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiVXNlclN2YyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJ1c2VyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJwb3N0IiwiYm9keSIsImNyZWF0ZSIsInN1Y2Nlc3MiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJoZWFkZXJzIiwiWC1BdXRoIiwidG9rZW4iLCJ2YWwiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFJQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLE9BQUEsV0FFQUMsU0FBQUMsSUFBQSxpRENEQSxJQUFBSixLQUFBQyxRQUFBQyxPQUFBLE1BRUFGLEtBQUFLLFdBQUEsYUFBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsTUFBQSxTQUFBQyxFQUFBQyxHQUVBSCxFQUFBQyxNQUFBQyxFQUFBQyxHQUVBQyxLQUFBLFNBQUFDLEdBQ0FULFFBQUFDLElBQUFRLFFDVEEsSUFBQVosS0FBQUMsUUFBQUMsT0FBQSxNQUVBRixLQUFBSyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFPLEdBRUFQLEVBQUFRLFFBQUEsV0FFQVIsRUFBQVMsV0FFQUMsTUFDQVAsU0FBQSxpQkFDQVEsS0FBQVgsRUFBQVMsVUFHQUYsRUFBQUssT0FBQUYsTUFXQUcsUUFBQSxTQUFBSCxHQUVBVixFQUFBYyxNQUFBQyxRQUFBTCxHQUlBVixFQUFBUyxTQUFBLE9BR0FULEVBQUFTLFNBQUEsT0FPQUYsRUFBQVMsUUFHQUgsUUFBQSxTQUFBQyxHQUNBZCxFQUFBYyxNQUFBQSxNQzNDQSxJQUFBcEIsS0FBQUMsUUFBQUMsT0FBQSxNQUtBRixLQUFBdUIsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FFQUMsS0FBQUgsTUFBQSxXQUNBLE1BQUFFLEdBQUFFLElBQUEsY0FFQUQsS0FBQVAsT0FBQSxTQUFBRixHQUNBLE1BQUFRLEdBQUFSLEtBQUEsWUFBQUEsTUNYQSxJQUFBaEIsS0FBQUMsUUFBQUMsT0FBQSxNQUVBRixLQUFBMkIsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQ0F4QixXQUFBLFlBQ0F5QixZQUFBLGVBRUFELEtBQUEsYUFDQXhCLFdBQUEsZUFDQXlCLFlBQUEsa0JBRUFELEtBQUEsVUFDQXhCLFdBQUEsWUFDQXlCLFlBQUEsaUJDZEEsSUFBQTlCLEtBQUFDLFFBQUFDLE9BQUEsTUFFQUYsS0FBQXVCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBRUEsR0FBQU8sR0FBQU4sSUFFQU0sR0FBQUMsUUFBQSxXQUVBLE1BQUFSLEdBQUFFLElBQUEsY0FDQU8sU0FBQUMsU0FBQVQsS0FBQVUsVUFJQUosRUFBQXZCLE1BQUEsU0FBQUMsRUFBQUMsR0FFQSxNQUFBYyxHQUFBUixLQUFBLGlCQUFBUCxTQUFBQSxFQUFBQyxTQUFBQSxJQUtBQyxLQUFBLFNBQUF5QixHQUVBLE1BREFMLEdBQUFJLE1BQUFDLEVBQUFDLEtBQ0FOLEVBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYW5pZWxuaWNsYXMgb24gMS80LzE2LlxuICovXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJ10pOyAgICAgICAgICAgIC8vICA8PCAgU0VUVEVSIE1PRFVMRSAtLSAgQ2FsbGVkIE9OTFkgT05DRSBhbmQgRklSU1RcblxuY29uc29sZS5sb2coXCJJbiB0aGUgTU9EVUxBUiBBbmd1bGFyIGZpbGVzIGluICduZycgZGlyZWN0b3J5XCIpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBkYW5pZWxuaWNsYXMgb24gNC84LzE2LlxuICovXG5cblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcblxuYXBwLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSxVc2VyU3ZjKXtcbiAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKXtcblxuICAgICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKSAgICAgICAgICAgLy8gIGxvZ2luLmN0cmwuanMgID4+ICBVc2VyU3ZjLmxvZ2luKCkgID4+IHJldHVybnMgVVNFUiA8PDw8PFxuXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTsgICAgICAgICAgICAgICAgICAgLy8gIERJU1BMQVkgVVNFUiAgPDwgIFRoaXMgZnVuY3Rpb24gZGlzcGxheXMgZGF0YS4gIERvZXMgbm90IFJFVFVSTiBhbiBldmFsdWF0ZWQgZXhwcmVzc2lvblxuICAgICAgICAgICAgfSlcbiAgICB9XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsbmljbGFzIG9uIDEvNC8xNi5cbiAqL1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpOyAgICAgICAgICAvLyAgR0VUVEVSIE1PRFVMRVxuXG5hcHAuY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgUG9zdHNTdmMpIHtcblxuICAgICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24oKXtcblxuICAgICAgICBpZigkc2NvcGUucG9zdEJvZHkpeyAgICAgICAgICAgICAgICAvL3Bvc3RCb2R5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgZmllbGRcblxuICAgICAgICAgICAgcG9zdCA9IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogICdNb29rZXJzU2VydmljZScsXG4gICAgICAgICAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUocG9zdClcblxuXG4gICAgICAgICAgICAgICAgLy8kaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgeyAgICAgIC8vICAkaHR0cCByZXF1ZXN0IHRvIEVORFBPSU5UICAtLSAgVG8gTm9kZSBBUElcbiAgICAgICAgICAgICAgICAvLyAgICAvLyAgcG9zdCgxLDIpICAgMS4gIC9hcGkvcG9zdC8gZW5kcG9pbnQgTm9kZSBBUEksIDIuICBPQkpFQ1QgdG8gcG9zdFxuICAgICAgICAgICAgICAgIC8vICAgIC8vICBDUkVBVEUgT0JKRUNUOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgdXNlcm5hbWU6ICAnTW9va2VycycsXG4gICAgICAgICAgICAgICAgLy8gICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XG4gICAgICAgICAgICAgICAgLy99KVxuXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdCkgeyAgICAgICAgICAgICAgICAgICAgLy8gICRodHRwIFJFVFVSTlMgQSBQUk9NSVNFIE9CSkVDVCAhISEhXG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdCk7ICAgICAvLyAgaWYgY3JlYXRpbmcgbmV3IE9CSkVDVCBpcyBzdWNjZXNzIC0+IEFkZCBvYmplY3QgdG8gW3Bvc3RzXSBBUlJBWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBhcnJheS51bnNoaWZ0KCkgLS0gIGFkZCBuZXcgaXRlbXMgdG8gdGhlIGJlZ2lubmluZyBvZiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBBbmd1bGFyIGlzIG1hbmFnaW5nIHRoZSBBUlJBWSAhISEgIGFzIHBhcnQgb2YgJHNjb3BlXG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDsgICAgICAgICAgLy8gIHNldCBwb3N0Qm9keSB2YWx1ZSB0byBOVUxMXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMnKSAgICAgICAgLy8gIEdldCBbcG9zdHNdIEFSUkFZICAodGhpcyBjb2RlIHJlcGxhY2VzIHRoZSBbcG9zdF0gQVJSQVkgYmVsb3dcblxuICAgIFBvc3RzU3ZjLmZldGNoKClcblxuXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0cykgeyAgICAgICAgICAgICAgICAgICAgIC8vICAkaHR0cCByZXR1cm5zIGEgUFJPTUlTRSBPQkpFQ1RcbiAgICAgICAgICAgICRzY29wZS5wb3N0cyA9IHBvc3RzXG4gICAgICAgIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkYW5pZWxuaWNsYXMgb24gMS80LzE2LlxuICovXG5cblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTsgICAgICAvLyAgR0VUVEVSIE1PRFVMRVxuXG5cbi8vICBTZXJ2aWNlOlxuXG5hcHAuc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJ2FwaS9wb3N0cycpOyAgICAgICAgICAgICAgICAgLy8gICRodHRwLmdldCgpIFNFUlZJQ0UgIC0tIHJldHVybnMgYSBQUk9NSVNFXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7ICAgICAgICAgICAgICAgICAgICAgLy8gICRodHRwLnBvc3QoKSBTRVJWSUNFIC0tICByZXR1cm5zIGEgUFJPTUlTRVxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnYXBpL3Bvc3RzJywgcG9zdClcbiAgICB9XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsbmljbGFzIG9uIDQvOC8xNi5cbiAqL1xuXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cbmFwcC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnXG4gICAgICAgIH0pXG4gICAgICAgIC53aGVuKCcvcmVnaXN0ZXInLCB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgLndoZW4oJy9sb2dpbicsIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJ1xuICAgICAgICB9KVxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhbmllbG5pY2xhcyBvbiA0LzgvMTYuXG4gKi9cblxuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xuXG5hcHAuc2VydmljZSgnVXNlclN2YycsZnVuY3Rpb24oJGh0dHApe1xuXG4gICAgdmFyIHN2YyA9IHRoaXM7XG5cbiAgICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2Vycycse1xuICAgICAgICAgICAgaGVhZGVyczogeydYLUF1dGgnOiB0aGlzLnRva2VufSAgICAgICAgIC8vICA/PyAgY2FuIHRoaXMudG9rZW4gYmUgcmVwbGFjZWQgd2l0aCBzdmMudG9rZW4gPz9cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCl7ICAgICAgIC8vIDw8ICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKSAgSU5WT0tFRCBpbiBDb250cm9sbGVyICA8PDw8ICBuZy1zdWJtaXQgaW4gbG9naW4uaHRtbFxuXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSkgICAgICAgICAvLyAgMS4gIFJFU09MVkUgVEhJUyAgKFJFVFVSTilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICA8PCAgQ1VSTCAtLSBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkgcmV0dXJucyBhIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgUE9TVCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgPj4gIGNvbXBhcmUgcGFzc3dvcmQgd2l0aCBIQVNIIHBhc3N3b3JkID4+ICBnZW5lcmF0ZSBKV1QgVE9LRU5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICA8PCAgQ1VSTCEhICBjaGVjazogIHNlcnZlci1hdXRoLmpzXG5cbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWwpeyAgICAgICAgICAgICAgICAgICAvLyAgdmFsIGlzIHRoZSBPQkpFQ1QgcmV0dXJuZWQgZnJvbSAkaHR0cC5wb3N0ID4+ICB7dmFsfVxuICAgICAgICAgICAgICAgICAgICBzdmMudG9rZW4gPSB2YWwuZGF0YTsgICAgICAgICAgIC8vICB2YWwuZGF0YSA9IEpXVCBUT0tFTiAgYXNzaWduIHRvOiAgIFVzZXJTdmMudG9rZW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7ICAgICAgICAgICAvLyAgSU5WT0tFIFVzZXJTdmMuZ2V0VXNlcigpICBhbmQgPj4+Pj4+IFJFVFVSTiB0aGUgVVNFUiB7T0JKRUNUfSAgPDwgIFJFU09MVkUgVEhJU1xuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxufSk7XG5cbi8vICBSRVRVUk4gIDw8ICBhbnl0aGluZyBhZnRlciBSRVRVUk4gaXMgUkVTT0xWRUQgYW5kIHJldHVybmVkIHRvIHRoZSBJTlZPS0FUSU9OIHN0YXRlbWVudFxuXG5cblxuLy8gIExvZ2luIGhhcyB0d28gc3RlcHM6XG4vLyAgMS4gIENhbGwgUE9TVCAvYXBpL3Nlc3Npb25zIHRvIGdldCA+PiBKV1QgVE9LRU5cbi8vICAyLiAgR0VUIC9hcGkvdXNlcnMgIHRvIGdldCBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uXG5cblxuLy8gIENoZWNrIE5FVFdPUksgVEFCIGluIENIUk9NRSAgPj4gIHNlc3Npb25zID4+ICB3aWxsIHNob3cgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBiZWluZyBQQVNTRURcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
