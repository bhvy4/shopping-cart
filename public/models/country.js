app.factory("coutFact",function($http,$q){
     var getJSON=function(){
        var pr=$q.defer();
        $http.get("https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/city.json").then(function(data){
            pr.resolve(data);
        },function(er){
            pr.reject(er);
        });
        return pr.promise;
    }
    return{"getjson":getJSON};
});