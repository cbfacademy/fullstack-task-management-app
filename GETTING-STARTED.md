# Start Here

In the next sections, we'll look at the design (or specification) of each of the components needed for a given requirement.

Generally speaking, each functionality will be implemented via four types of components:

1. A **controller** 
    > It will be in charge of handling a `HTTP` request, and responding with an appropriate `JSON over HTTP` response.

2. A **query** or a **command**
    > Following the [Command and Query Responsibility Segregation][1] pattern. A command is used to change the state of the system, whereas a query is used to retrieve information about the system.

3. A **domain entity**
    > Which we'll use to model a task and its operations.

4. A **repository**
    > Which we'll use to store and retrieve tasks in the system. For simplicity, we'll use an in-memory repository.


## Requirements

1. [Retrieve tasks][2]
2. [Create a task][3]
3. [Edit a task][4]
4. [Complete a task][5]
5. [Delete a task][6]

### Starting the server

We're using Node.js and [express][7] as a web framework to expose our API. Before starting your implementation, check that the provided setup works. 

First install all the dependencies in the project by running:

```bash
cd server
yarn install
```

Then, to start the server, run the following command:

```bash
yarn dev
```

You should be able to see a similar output to this:

```bash
$ nodemon ./src/index.js
[nodemon] 2.0.13
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./src/index.js`
task management app started on port 4000
```

A `GET` request to `localhost:4000/` (via [Postman][9] for example) should return:

```JSON
200 OK
{
  "name": "task management application"
}
```

### Access the `/tasks` API

Once the server is started locally, you should be able to access the `/tasks` web API on `http://localhost:4000/tasks`.

You can use a client like [Postman][10] to interact with the API, and:
- retrieve all tasks via a `GET /tasks` request
- create a task via a `POST /tasks` request
- edit a task via a `PUT /tasks/{id}` request
- complete a task via a `PUT /tasks/{id}` request
- delete a task via a `DELETE /tasks/{id}` request


[1]: https://martinfowler.com/bliki/CQRS.html
[2]: requirements/1-retrieve-tasks.md
[3]: requirements/2-create-task.md
[4]: requirements/3-edit-task.md
[5]: requirements/4-complete-task.md
[6]: requirements/5-delete-task.md
[7]: https://expressjs.com/
[9]: https://www.postman.com/downloads/
[10]: https://learning.postman.com/docs/getting-started/introduction/

