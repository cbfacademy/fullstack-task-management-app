# Create a task

Implement the four components shown in the sequence diagram, in such a way that:
- a new task is added to the application
- a subsequent request to retrieve tasks returns a non-empty list of tasks, with the newly created task.

> Given the details of a new task below <br/>
> When I request to create a new task via the `POST /tasks` endpoint <br/>
> Then I should get a `201 CREATED HTTP` response. <br/>

```JSON
{
    "title": "Contract tests",
    "description": "Write provider contract tests for the new version of our API.",
    "completed": false
}
```

Once the new task created, a request to get all the tasks should return the following:

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
    },
    {
        "id": 3,
        "title": "Contract tests",
        "description": "Write provider contract tests for the new version of our API.",
        "completed": false
    }
]
```

**Sequence Diagram**

![Create a task sequence diagram][1]

[1]: ../resources/2-create-task.png