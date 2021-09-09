app.factory("mobFactory", function ($http, $q) {
    var getJSON = function () {
        var defered = $q.defer();
        $http.get("https://shopping-cart-bhavya.herokuapp.com/mobiles").then(function (data) {
            defered.resolve(data);
        }, function (er) {
            defered.reject(er);
        });
        return defered.promise;
    }
    var addToCart = function (name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.rem = false;
        this.add = [];
    }
    var buyProd = function (name, image, address) {
        this.product = name;
        this.image = image;
        this.address = address;
    }
    return { "getjson": getJSON, "Cart": addToCart, "Buy": buyProd };
});
