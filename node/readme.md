The following formulas pertain to a circle:

Perimeter of a circle: 		2 * PI * radius
Area of a circle is: 		PI * radius * radius
Volume of a sphere: 		(4 * PI * radius * radius * radius)/3

A console Node.js app named app.js that works like this: 

       node app.js p 10  

Output: The perimeter of a circle with radius 10 is 62.83 

       node app.js a 10  

Output: The area of a circle with radius 10 is 314.16 

       node app.js v 10 

Output: The volume of a circle with radius 10 is 4188.79

The functions that calculate the perimeter, area and volume must be placed in a sub-folder named calc.
Use the toFixed() function to display the results in two decimal places.
Add appropriate validation to ensure that only arguments p, a and v are allowed. Also, the last argument must be numeric.

Create a file named server.js in the root of your previous lab application that serves a web page. The server listens on port 3000. It uses the same modules as before but is web-based and produces results as follows:

To display the perimeter of a circle with radius 10 the URL would be http://localhost:3000/p/10

To display the area of a circle with radius 10 the URL would be http://localhost:3000/a/10

To display the volume of a circle with radius 10 the URL would be http://localhost:3000/v/10

Display the results in two decimal places.
Add appropriate validation to ensure that only arguments p, a and v are allowed. Also, the last argument must be numeric


