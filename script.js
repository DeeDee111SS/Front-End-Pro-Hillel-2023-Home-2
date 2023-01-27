const   a = 10,
        b = 12,
        n = 17,
        h = 0.1176470588235294, //(a + b)/n
        
        y1 = function f1(x) { return 4*Math.pow(Math.E, Math.abs(x)) + 2; },
        y2 = function f2(x) { return 1 - Math.pow(Math.E, x); },
        y3 = function f3(x) { return Math.sin(x) * Math.cos(x); },
        y4 = function f4(x) { return Math.pow(Math.E, Number(x) + 2) - Math.tan(x) + 3; },
        y5 = function f5(x) { return Math.pow(Math.abs(Number(x) + 4), 5); }
        
 
        console.log(`
        Results for a = ${a}, b = ${b}, n = ${n}, f(x) = 4e^|x| + 2 :
        `);

        for (let x = a; x <= b; x += h)
            console.log(`  x(i): ${x}, f(x): ${y1(x)}`);

        console.log(`
        Results for a = ${a}, b = ${b}, n = ${n}, f(x) = 1 - e^x :
        `);

        for (let x = a; x <= b; x += h)
            console.log(`  x(i): ${x}, f(x): ${y2(x)}`);

        console.log(`
        Results for a = ${a}, b = ${b}, n = ${n}, f(x) = sin x * cos x :
        `);

        for (let x = a; x <= b; x += h)
            console.log(`  x(i): ${x}, f(x): ${y3(x)}`);

        console.log(`
        Results for a = ${a}, b = ${b}, n = ${n}, f(x) = e^(x + 2) - tg x + 3 :
        `);

        for (let x = a; x <= b; x += h)
            console.log(`  x(i): ${x}, f(x): ${y4(x)}`);

        console.log(`
        Results for a = ${a}, b = ${b}, n = ${n}, f(x) = |x + 4|^5 :
        `);

        for (let x = a; x <= b; x += h)
            console.log(`  x(i): ${x}, f(x): ${y5(x)}`);