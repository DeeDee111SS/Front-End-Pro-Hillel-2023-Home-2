const   a = 10,
        b = 12,
        n = 17,
        h = 0.1176470588235294, //(a + b)/n
        
        y1 = function f1(x) { return 4*Math.pow(Math.E, Math.abs(x)) + 2; },
        y2 = function f2(x) { return 1 - Math.pow(Math.E, x); },
        y3 = function f3(x) { return Math.sin(x) * Math.cos(x); },
        y4 = function f4(x) { return Math.pow(Math.E, Number(x) + 2) - Math.tan(x) + 3; },
        y5 = function f5(x) { return Math.pow(Math.abs(Number(x) + 4), 5); }
        
        function showResult(a, b, n, f, fStringName) {
            console.log(`\nResults for a = ${a}, b = ${b}, n = ${n}, f(x) = ${fStringName} :`);

            for (let x = a; x <= b; x += h)
                console.log(`  x(i): ${x}, f(x): ${f(x)}`);
        }
        
showResult(a, b, n, y1, "4e^|x| + 2");
showResult(a, b, n, y2, "1 - e^x");
showResult(a, b, n, y3, "sin x * cos x");
showResult(a, b, n, y4, "e^(x + 2) - tg x + 3");
showResult(a, b, n, y5, "|x + 4|^5");