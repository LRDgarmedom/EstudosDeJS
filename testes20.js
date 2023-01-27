num = [8, 7, 6]
me = 0
ma = 0
for (c in num) {
    if (c == 0) {
        ma = num[0]
        me = num[c]
    }
    else {
        for (c1 in num) {
            if (num[c1] > ma) {
                ma = num[c1]
            }
        }
        for (c1 in num) {
            if (num[c1] < me) {
                me = num[c1]
            }
        }
    }
}
console.log(me, ma)