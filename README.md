# teste-mz-group
Teste MZ Group

This is a challenge by Coodesh

Steps:

1 step was setup the front-end/backend/database environment. I decided to use ReactJS, NodeJS with typescript, and PrismaORM to manage the interactions with the database which is POSTGRESQL. to run everything togheter I used Docker-compose, which allow to run the Front-end/Backend/database at the same time with only one command. I also assured that api is able to receive requisitions and add Data to the database.

2 step was to read the description of the application rules, gather the maximum amount of information that I could and organize the ideias of what I was reading and what I should do in each stack of the application (Front-end/Backend). 

In the 3 step I decided to add the first real route to the application, the upload sales file route, configure multer to receive a txt file and prepare a usecase to deal with the data that will be received from the uploaded file.

4 step was add initial Jest Setup to allow tests inside our application.

5 step was create the interface of the first repository inside the application and create the first entity to represent what the parsed File should look like in the Database.

6 step was code the first rules inside the parseTextFromSalesFile use case, rules to prepare the data to be sent to api, and write tests to it.

7 step was create the repositories functionalities and add SalesHistory Entity test 
