<h1>Tasks</h1>
<h2>1) Develop an Application to Display Targets:</h2>
 <ul>
  <li>Develop a web application that connects to the WebSocket server and reads data about detected targets.</li>
  <li>Display the obtained data on a plot in polar coordinates. Consider using the Plotly library or another graphing library.</li>
</ul>
<a href="">Code listening</a> <br>
<a href="">Output code</a>
<ul><h3>Three-Dimensional Space: Cartesian and Spherical Coordinate Systems</h3>
  <li>Define the coordinates of several points in the spherical coordinate system.</li>
  <li>Convert these coordinates to the Cartesian coordinate system.</li>
  <li>Perform the reverse conversion from the Cartesian coordinate system to the spherical coordinate system.</li>
  <li>Verify the correctness of the calculations by ensuring that the initial coordinates match the ones obtained after the reverse conversion.</li>
</ul>
<a href="https://github.com/Sun-95/Implementation-of-Coordinate-System-Transformations/blob/main/spherical_to_cartesian.cpp">Code listening</a> <br>
<a href="https://github.com/Sun-95/Implementation-of-Coordinate-System-Transformations/blob/main/screenshotes/spherical_to_cartesian.png">Output code</a>
<h2>2) Distance Calculation in the Spherical Coordinate System:</h2>
 <ul>Compute the distance between points in the spherical coordinate system using two methods:
  <li>Cartesian Coordinate System: Use the standard formula for calculating straight-line distance in two-dimensional and three-dimensional spaces.</li>
  <li>Polar Coordinate System: Use the formula for calculating the distance between points in a two-dimensional space.</li>
  <li>Spherical Coordinate System: Compute the distance between points using two methods:</li>
  <ol>
  <li>Through the volume of the sphere: Use the formula for straight-line distance in three-dimensional space.</li>
  <li>Along the surface of the sphere: Use the formula for great-circle distance.</li>
  </ol>
 </ul>
<a href="https://github.com/Sun-95/Implementation-of-Coordinate-System-Transformations/blob/main/distance_calculation.cpp">Code listening</a> <br>
<a href="https://github.com/Sun-95/Implementation-of-Coordinate-System-Transformations/blob/main/screenshotes/distance_calculation.png">Output code</a>
<h2>3) Performance Benchmarks:</h2>
 <ul>Generate an array of coordinate pairs in each coordinate system (Cartesian, polar, spherical).
  <li>Compute the distances between these points for each coordinate system.</li>
  <li>Measure the computation time for each coordinate system.</li>
  <li>Choose an array size that results in minimal variability in benchmarking results between runs (a recommended array size is 10,000 to 100,000 points).</li>
 </ul>
<a href="https://github.com/Sun-95/Implementation-of-Coordinate-System-Transformations/blob/main/perfomance_benchmarks.cpp">Code listening</a> <br>
<a href="https://github.com/Sun-95/Implementation-of-Coordinate-System-Transformations/blob/main/screenshotes/perfomance_benchmarks.png">Output code</a>











Develop a web application that connects to the WebSocket server and reads data about detected targets.
Display the obtained data on a plot in polar coordinates. Consider using the Plotly library or another graphing library.

Data Processing and Visualization:

Process the data received through the WebSocket and display the targets on the plot.
Each target should be represented as a point on the plot with coordinates (angle, distance).
Add the ability to change the radar measurement component's parameters using API requests.

Configuring the Plot:

Display distance in kilometers on the radial axis.
Use different colors or styles for points to indicate different signal power levels returned from the targets.

