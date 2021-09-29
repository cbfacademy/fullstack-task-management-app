# Complete a task

Implete the four components shown in the sequence diagram, in such a way that:
- an existing task is completed
- a subsequent request to retrieve tasks returns a non-empty list of tasks, with the newly edited task marked as completed.

> Given the new (partial) details of an existing task below <br/>
> When I request to complete a task via the `PUT /tasks/1` endpoint <br/>
> Then I should get a `204 NO CONTENT HTTP` response. <br/>

```JSON
{
    "completed": true
}
```

Once the existing task completed, a request to get all the tasks should return the following:

```JSON
[
    {
        "id": 1,
        "title": "Contact checkout and customer service",
    "description": "Inform the checkout and the customer service teams about the new version of our API.",
        "completed": true
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

![Complete a task sequence diagram][1]

[1]: ../resources/4-complete-task.png