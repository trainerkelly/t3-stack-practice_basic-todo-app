# Practice T3 Stack To-Do App

## Introduction

I decided that I was going to try and do a slightly more complex to-do app than the tutorial I followed by Jack Herrington on YouTube (https://youtu.be/qCLV0Iaq9zU?si=EMc0hd_FDdetVBZE). And by "slightly more complex", I mean add timestamps and different sections for incomplete / complete tasks. I wanted to try building the to-do app using the current T3 Stack, as opposed to the video which was outdated by about a year. So...this is my attempt.

## Goals

- [x] create 4 different components for each part of the application
- [x] set up database
- [ ] create routes (tRPC)
      -- [ ] create getTasks
      --- [ ] test route
      -- [ ] create addTasks
      --- includes timestamp
      --- [ ] make the "add task" functionality work
      --- [ ] test route
      -- [ ] create setComplete
      --- includes timestamp when updated
      --- [ ] make the checkboxes work
      --- [ ] test route
- [ ] style app

## Step 1: Set Up

### Create Components

Created four components:

- AddToDo (adds tasks)
- CurrentToDo (current tasks)
- CompletedToDo (completed tasks)
- ToDoApp (brings everything together)

Each section as a div that contains a header.

### Update page.tsx contain the Home component

Updated the page.tsx containing the Home component with the ToDoApp.tsx component.

### Updated Meta Data on layout.tsx

Updated the title to "Practice T3 Stack To-Do App". I kept everything else the same...for now.

### Set-Up Database

I initially had trouble setting up the database – I only realized after that the reason for that is I needed to go and create the actual database and update the URL accordingly. Drizzle was looking for a database at a URL and would not create it without the database already being created. I created a database called practice-sites in pgAdmin. I updated the database URL accordingly (including with the password).

So the database URL looks like:

```DATABASE_URL="postgresql://POSTGRESUSERNAME:POSTGRESSPASSWORD@localhost:5432/practice-sites"

```

(obviously that postgresusername and postgresspassword isn't my actual postgres username nor password lol swap them out with yours)
