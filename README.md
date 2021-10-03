# Task Management App

[![JavaScript Language](https://img.shields.io/badge/language-JavaScript-F7DF1E.svg?logo=JavaScript)][1]
[![NodeJS Platform](https://img.shields.io/badge/platform-NodeJS-339933.svg?logo=Node.js)][2]
[![Express Web Framework](https://img.shields.io/badge/web%20framework-express-000000.svg?logo=Express)][11]
[![Jest Testing Framework](https://img.shields.io/badge/testing%20framework-Jest-C21325.svg?logo=Jest)][3]
[![Yarn Package Manager](https://img.shields.io/badge/package%20manager-Yarn-2C8EBB.svg?logo=Yarn)][4]


The purpose of this project is to build a simple web (JSON over HTTP) API to manage tasks, following a **test-driven development** approach. 

We want to ensure that the emphasis is on practicing all the test-driven development concepts covered by the course. Therefore, in building this simple API, we will focus on **happy path scenarios** only.

- [Retrieve tasks][5]
- [Create a task][6]
- [Edit a task][7]
- [Complete a task][8]
- [Delete a task][9]
- [Getting started][10]


## Retrieve tasks

> *As a user (through a client of this web API) <br/>*
> *I want to be able to retrieve all the tasks <br/>*
> *So that I can plan and organise my day.*

#### <u>Example</u>

Given there are 2 tasks in our task management system <br/>
When I request to see their details via the `GET /tasks` endpoint <br/>
Then I should get a `200 OK` HTTP response with: <br/>

```JSON
[
    {
        "id": 1,
        "title": "Contact checkout",
        "description": "Inform the checkout team about the new version of our API.",
        "completed": false
    },
    {
        "id": 2,
        "title": "Contract phase",
        "description": "Prepare the contract phase of the old API.",
        "completed": false
    }
]

```


## Create a task

> *As a user (through a client of this web API) <br/>*
> *I want to be able to create a new task as needed <br/>*
> *So that I keep track of all the work to be done.*

#### <u>Example</u>

Given the details of a new task below <br/>
When I request to create a new task via the `POST /tasks` endpoint <br/>
Then I should get a `201 CREATED` HTTP response. <br/>

```JSON
{
    "title": "Contract tests",
    "description": "Write provider contract tests for the new version of our API.",
    "completed": false
}
```


## Edit a task

> *As a user (through a client of this web API) <br/>*
> *I want to be able to edit the description of a task <br/>*
> *So that I keep an accurate record of my tasks.*

#### <u>Example</u>

Given the new (partial) details of an existing task below <br/>
When I request to update a task via the `PUT /tasks/{id}` endpoint <br/>
Then I should get a `204 NO CONTENT` HTTP response. <br/>

```JSON
{
    "title": "Contact checkout and customer service",
    "description": "Inform the checkout and the customer service teams about the new version of our API."
}
```


## Complete a task

> *As a user (through a client of this web API) <br/>*
> *I want to be able to mark a task as done <br/>*
> *When I have completed it.*


#### <u>Example</u>

Given the new partial details of an existing task below <br/>
When I request to complete a task via the `PUT /tasks/{id}` endpoint <br/>
Then I should get a `204 NO CONTENT` HTTP response. <br/>

```JSON
{
    "completed": true
}
```


## Delete a task

> *As a user (through a client of this web API) <br/>*
> *I want to be able to delete a task <br/>*
> *When it has become obsolete.*

#### <u>Example</u>

Given a task in our system has become obsolete <br/>
When I request to delete it via the `DELETE /tasks/{id}` endpoint <br/>
Then I should get a `204 NO CONTENT` response. <br/>



[1]: https://www.javascript.com/
[2]: https://nodejs.org/en/
[3]: https://jestjs.io/
[4]: https://classic.yarnpkg.com/en/

[5]: #retrieve-tasks
[6]: #create-a-task
[7]: #edit-a-task
[8]: #complete-a-task
[9]: #delete-a-task
[10]: GETTING-STARTED.md
[11]: https://expressjs.com/