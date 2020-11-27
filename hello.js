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
