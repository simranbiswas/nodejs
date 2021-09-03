var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l="+l+" and b="+b);

    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("Perimeter: " + rectangle.perimeter());
            console.log("Area: " + rectangle.area());
        }
    });
    console.log("After execution..maybe?");
}

solveRect(2,4);

solveRect(3,5);

solveRect(0,5);

solveRect(-3,5);