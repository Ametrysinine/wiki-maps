### Wiki Map

### User Stories

* As a public user, I want to be able to see a list of maps, because I want to view the map of my city.

* As a public user, I want to see titles, description and images on the point of the map I choose, because it will give me a better idea of the location.

* As a public user, I shouldn't be able to create, edit or delete a map, because I am not an authenticated user.

* As an authenticated user, I want to be able to show my favourite maps and the maps that I have contributed to, because I want to share my local knowledge.

* As an authenticated user, I want to be able to favorite a map on the website, so I can look at them later.

* As an authenticated user, I want to be able to add or edit or delete points on an existing map, because they may be incorrect.

### Stretch User Stories
* As an admin, I want to be able to undo edits to the map.
* As an admin, I want to able to revoke a user's access.

### Nouns
* Authenticated_users
PK id
email
password

* Maps
PK id
FK creator_id

* Map points
PK id
FK map_id
(FK contributor_id)

* Favorite_maps
PK id
FK user_id
FK map_id

### ERD

The user stories provide you with nouns (eg. user, posts, favourites)
Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)

### Routes
B GET  -> /, /maps
R GET  -> /maps/:id
E POST -> /maps/:id
A POST -> /maps
D POST -> /maps/:id/delete

MVP vs MVD
There is a concept in development of an MVP, the Minimum Viable Product
An MVP has just enough features to be useful to a user
This concept helps streamline the development process and help keep the team on target
For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
If you aren't going to demo it, don't build it

### Wireframes
Draw out the structure of your web pages
This will make it much easier to build out these pages later
This is also a great opportunity to get input from all of the team members
Design matters... however you are a developer, not a designer
Get inspiration from websites you visit
User Login
Don't do it
We know that you know how to register and login users
// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

Tech Choices
We have made all the tech choices for you
Back End: Node and Express
Front End: HTML, CSS, JS, jQuery, Bootstrap

The Mid-term Skeleton
Use the provided node-skeleton as a template for your project
This will get you up and running quickly

SPA vs Multi-page App
These concepts are not mutually exclusive
You can choose one or the other or both

Git
Use Git best practices (ask a mentor for clarification if you need it)
Use branches
DO NOT CODE ON MASTER

Splitting up the Work
Horizontally - whole team working on front-end or back-end at the same time
Vertically - divide the work between front-end and back-end
Pair Programming - working together on the same tasks

Communication
Make sure to communicate with your team members
Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page

Github Projects
Github has a built-in project board (similar to a kanban board)

Deployment
Decide if you want/need to deploy your application to the cloud
Ask a mentor for assistance/advice if your team decides to deploy
