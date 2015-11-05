var Vehicle = (function () {
    function Vehicle(name) {
        this.name = name;
    }
    return Vehicle;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="Vehicle.ts"/>
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(name) {
        _super.call(this, name);
        this.meo = name;
    }
    Car.prototype.test = function () {
        alert(meo.toString());
    };
    return Car;
})(Vehicle);
var meo = new Car("test");
meo.test();
