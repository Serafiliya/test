class BaseClass {
    get a() {
        return this._a;
    }
    set a(value) {
        this._a = -value;
    }
    get b() {
        return this._b;
    }
    set b(value) {
        this._b = -value;
    }
}

class MyClass extends BaseClass {
    test(a, b) {
        this.a = a;
        this.b = b;

        return 100 - this.a + this.b;
    }
}

const m = new MyClass();

console.log(m.test(50, 40) === 110); // true
console.log(m.test(10, 90) === 20); // true
