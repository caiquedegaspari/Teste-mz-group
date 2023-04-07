Teste MZ Group

A project that allow a user to upload a .txt file, processData in api and return it to front-end in a sorted list 

Technologies: NodeJS, Typescript, Express, Prisma.IO, PostgreSQL, ReactJS, CSS, HTML5.

To run this project:

  1 - Clone this project.
  
  2 - Run yarn command in client and api repositories to install node_modules.
  
  3 - run docker-compose up (if you don't have docker-compose you need to install it in your computer (https://docs.docker.com/compose/install/).
  
  4 - To create the connection between the api and the database you need to create a connection in a database administration tool(DBeaver is the one a     choose).
  
  5 - follow the example in .env.example to create a database connetion.
  
  6 - run yarn migrate:dev in terminal.

This is a challenge by Coodesh

Steps:

1 step was setup the front-end/backend/database environment. I decided to use ReactJS, NodeJS with typescript, and PrismaORM to manage the interactions with the database which is POSTGRESQL. to run everything togheter I used Docker-compose, which allow to run the Front-end/Backend/database at the same time with only one command. I also assured that api is able to receive requisitions and add Data to the database.

2 step was to read the description of the application rules, gather the maximum amount of information that I could and organize the ideias of what I was reading and what I should do in each stack of the application (Front-end/Backend). 

In the 3 step I decided to add the first real route to the application, the upload sales file route, configure multer to receive a txt file and prepare a usecase to deal with the data that will be received from the uploaded file.

4 step was add initial Jest Setup to allow tests inside our application.

5 step was create the interface of the first repository inside the application and create the first entity to represent what the parsed File should look like in the Database.

6 step was code the first rules inside the parseTextFromSalesFile use case, rules to prepare the data to be sent to api, and write tests to it.

7 step was create the repositories functionalities and add SalesHistory Entity test.

8 step was to create controller/usecase/repository structure in api to listSales ordering by seller.

9 Step was setup all front end pages/components/services, do api conections and add styling to components and pages.

10 Step was to add unit tests to assure listSales usecase is working properly
