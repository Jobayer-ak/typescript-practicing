var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// inheritance
var Parent = /** @class */ (function () {
    function Parent(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Parent.prototype.makeSleep = function (hours) {
        return "This ".concat(this.name, " will sleep for ").concat(hours);
    };
    return Parent;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, address) {
        return _super.call(this, name, age, address) || this;
    }
    return Student;
}(Parent));
var student1 = new Student('Mr.X', 15, 'Nigeria');
student1.makeSleep;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, address, designation) {
        var _this = _super.call(this, name, age, address) || this;
        _this.designation = designation; // different
        return _this;
    }
    Teacher.prototype.makeSleep = function (hours) {
        return "This ".concat(this.name, " will sleep for ").concat(hours);
    };
    Teacher.prototype.conductClasses = function (numberOfClass) {
        // different
        return "This ".concat(this.name, " will conduct ").concat(numberOfClass, " classes!");
    };
    return Teacher;
}(Parent));
var teacher1 = new Teacher('Teacher', 45, 'Bangladesh', 'Head Master');
teacher1.address;
