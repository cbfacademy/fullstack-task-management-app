# Retrieve tasks

Implement the four components shown in the sequence diagram, in such a way that the **first** request to retrieve tasks returns a non-empty list of tasks.

> Given there are 2 tasks in our task management system <br/>
> When I request to see their details via the `GET /tasks` endpoint <br/>
> Then I should get a `200 OK HTTP` response with: <br/>

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

**Sequence Diagram**

![Retrieve tasks sequence diagram][1]

[1]: ../resources/1-retrieve-tasks.png
