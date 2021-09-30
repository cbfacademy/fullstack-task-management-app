# Delete a task

Implement the three components shown in the sequence diagram, in such a way that:
- an existing task is deleted
- a subsequent request to retrieve tasks returns a non-empty list of tasks, without the deleted task.

> Given a task in our system has become obsolete <br/>
> When I request to delete it via the `DELETE /tasks/2` endpoint <br/>
> Then I should get a `204 NO CONTENT HTTP` response. <br/>


Once the existing task deleted, a request to get all the tasks should return the following:

```JSON
[
    {
        "id": 1,
        "title": "Contact checkout and customer service",
    "description": "Inform the checkout and the customer service teams about the new version of our API.",
        "completed": true
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

![Delete a task sequence diagram][1]

[1]: ../resources/5-delete-task.png