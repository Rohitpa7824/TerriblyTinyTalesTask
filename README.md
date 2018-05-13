# TerriblyTinyTales Developer Task

The solution of the task is uploaded at [tttwork.eu-4.evennode.com](tttwork.eu-4.evennode.com). 

For development of the solution, the following Technologies are used:
  - [Node.js](https://nodejs.org/) [for Backend Server]
  - [Express.js](https://expressjs.com/) [Application framework for Node.js]
  - HTML/CSS/Javascript([Jquery](https://jquery.com/)) [For Front End Development]
  - [Bootstrap](https://getbootstrap.com/) [FrontEnd Library for Web Development]

### The boiler plate of the application is developed by using [express-generator](https://expressjs.com/en/starter/generator.html)
>The generator creates the boilerplate needed for node.js application and sets up the environment for the application to run.
>It creates the basic server files along with some views.


### Routes

* [tttwork.eu-4.evennode.com/](tttwork.eu-4.evennode.com) - This is the base route of the server, where the index.html file is hosted
* tttwork.eu-4.evennode.com/requestdata - This is the endpoint of the API which will be called each time the user submits the number N, and this Endpoint returns data in the following format :
[["word","frequency"],["word","frequency"],["word","frequency"],....]


### Components

1. Views : index.html is the only view which is used in the project
2. Route Component : the /requestdata api is making use of "[Request](https://github.com/request/request)" library of node.js to make a request to http://terriblytinytales.com/test.txt, for fetching its data. After fetching the data, the data is being splitted into individual words and by using loops the frequency of words is found out and after that those words are sorted accordingly to their frequency. In the end, the required data upto size N is sent back to client as response.
3. Client side data transfer : Ajax call is done when the user presses the submit button and the data is sent to the server. When the server returns the JSON response, the data is parsed and it is added to the view in Tabular Manner.

### Test Cases

* Case #1 : (N=2) ![N=2](https://github.com/Rohitpa7824/TerriblyTinyTalesTask/blob/master/public/images/1.png)


* Case #2 : (N=5) ![N=5](https://github.com/Rohitpa7824/TerriblyTinyTalesTask/blob/master/public/images/2.png)

* Case #3 : (N=10) ![N=10](https://github.com/Rohitpa7824/TerriblyTinyTalesTask/blob/master/public/images/3.png)

* Case #4 : (N=100) ![N=100](https://github.com/Rohitpa7824/TerriblyTinyTalesTask/blob/master/public/images/4.png) ![N=100](https://github.com/Rohitpa7824/TerriblyTinyTalesTask/blob/master/public/images/5.png)

