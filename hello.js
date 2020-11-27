function max(arg1, arg2) {
    let arg1isLarger = arg1 > arg2;
    console.log(arg1isLarger);
    if (arg1isLarger) {
        return arg1;
    } else {
        return arg2;
    }
}

function max2(arg1, arg2, arg3) {
    return max(max(arg1, arg2), arg3);
}

var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
}.inherits(Mammal).method('purr', function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
}).method('get_name', function () {
    return this.says() + ' ' + this.name +
        ' ' + this.says();
});