How to start:

1.  npm install
2.  npm run start

Mongodb is used from mongodb atlas.

                                   Example request:
                                       Users:

All users: http://localhost:4000/users,
One user: http://localhost:4000/users/{id},
Create user: http://localhost:4000/users
body: {
"name": "Harish",
"login": "XXX",
"password": "3333"
},
Update user: http://localhost:4000/users/{id}, body {"name": "Olga", "login": "Zorro", "password": "777"},
Delete user: http://localhost:4000/users/{id}.

                                        Tasks:

All tasks: http://localhost:4000/tasks,
One task: http://localhost:4000/tasks{id},
Create task: http://localhost:4000/tasks
body: {
"title": "create task",
"userId": "777777777",
"priority": "low",
"description": "create function"
},
Update task: http://localhost:4000/tasks{id}
body: {
"title": "update task",
"userId": "9999999999999999999",
"priority": "medium",
"description": "update function"
},
Delete task: http://localhost:4000/tasks{id}.
