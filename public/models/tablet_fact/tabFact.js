app.factory("tabfactory", function ($http, $q) {
    var getJSON = function () {
        var pr = $q.defer();
        $http.get("http://localhost:7777/tablets").then(function (data) {
            console.log("Success data");
            pr.resolve(data);
        }, function (er) {
            pr.reject(er);
        });
        return pr.promise;
    }
    var addToCart = function (name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.rem = false;
        this.add=[];
    }
    var buyProd=function(name,image,address){
            this.product=name;
            this.image=image;
            this.address=address;
        }
    return {
        "getjson": getJSON,
        "Cart": addToCart,
        "Buy":buyProd
    };
});
