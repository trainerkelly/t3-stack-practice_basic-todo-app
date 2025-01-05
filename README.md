# Practice T3 Stack To-Do App

## Introduction

I decided that I was going to try and do a slightly more complex to-do app than the tutorial I followed by Jack Herrington on YouTube (https://youtu.be/qCLV0Iaq9zU?si=EMc0hd_FDdetVBZE). And by "slightly more complex", I mean add timestamps and different sections for incomplete / complete tasks. I wanted to try building the to-do app using the current T3 Stack, as opposed to the video which was outdated by about a year. So...this is my attempt.

## Goals

- [x] create 4 different components for each part of the application
- [x] set up database
- [ ] create routes (tRPC)
  - [ ] create getTasks
    - [ ] test route
    - [ ] create addTasks
    - includes timestamp
  - [ ] make the "add task" functionality work
    - [ ] test route
    - [ ] create setComplete
  - includes timestamp when updated
    - [ ] make the checkboxes work
    - [ ] test route
- [ ] style app

## Step 1: Set Up

### Create Components

Created four components:

- AddToDo (adds tasks)
- CurrentToDo (current tasks) ~~=> toDos (tasks display – used for two sections: Current Tasks and Completed Tasks. Imports different data based on the props.)~~
- ~~CompletedToDo (completed tasks)~~ (decided to drop because I realized that I could just use the CurrentToDo layout and just swap out what info it displays with a function (maybe through a prop???))
- ToDoApp (brings everything together)

Each section as a div that contains a header.

#### SIDE NOTE: Changing CurrentToDo and CompletedToDo

I realized earlier in the day that I could just use the same layout for the CurrentToDo and CompletedToDo and just swap what gets called, most likely through props or something. Like, use the route function to display the data I'm looking for in each section (CurrentToDo or CompletedToDo). I copied the code from CompletedToDo into CurrentToDo and...WAIT A MINUTE!!! Hang on, hang on....!!!!!

Let me restore the CompletedToDo component and then create ANOTHER component that gets put into them. OOO!! OOO!!!!

So there will be:

- CurrentToDo
- CompletedToDo
- ToDos

ToDos is the base component. CurrentToDo and CompletedToDo are the adapted component (I don't know what to call it lol) that are then applied to the home component. Okay...okay...let me do this!!

Okay, so I set up the CurrentToDo and I passed the title as a prop (since that's all I have right now)...and it's giving me an error. Clearly, I did not do that right. Let me go ook up what I'm supposed to do in this case. A brief look at the React docs (https://react.dev/learn/passing-props-to-a-component) shows me I typed it incorrectly. I definitely had the right idea, but not the right execution...so let me go fix that. (It looks like I was supposed to put everything in {} and I didn't – so the prop as a parameter is in {} and the components on the other pages are meant to be in {} too.)

And...IT WORKED!! (Now I have another problem: making it typesafe. Oops.)

Brief experiment: do I need the curly braces when I fill in the info or nah? Let me see...surprising to me, it's a "nah"! o_o I was certainly it was going to be required, but I guess not?! O_O Maybe it's because it's a string...? (When I say "fill in the info", I'm talking about props. When I fill in the props on the component, it doesn't look like I need it for the string. Let me double check by restarting npm run dev aaaaand...still works perfectly. Okay that's cool. Now to typesafe it.)

I'm pretty proud of myself for initially figuring out how to make it typesafe (I wrote title: string and it worked perfectly...before the curly braces), but after correcting my error (no curly braces).

Making the props typesafe:

- https://www.pluralsight.com/resources/blog/guides/defining-props-in-react-function-component-with-typescript (use interface seems to be the answer)
- https://akoskm.com/how-to-type-react-props-with-typescript/ (this seems to be a good answer too that looks simple...let's see if I can just put :string after the curly braces to make it work for right now and I'll set up an interface once I have more props to add.) (Okay, just adding "string" did not work. Let me make the interface then and add it.) (Interface worked perfectly. That was pretty simple!)

### Update page.tsx contain the Home component

Updated the page.tsx containing the Home component with the ToDoApp.tsx component.

### Updated Meta Data on layout.tsx

Updated the title to "Practice T3 Stack To-Do App". I kept everything else the same...for now.

### Set-Up Database

I initially had trouble setting up the database – I only realized after that the reason for that is I needed to go and create the actual database and update the URL accordingly. Drizzle was looking for a database at a URL and would not create it without the database already being created. I created a database called practice-sites in pgAdmin. I updated the database URL accordingly (including with the password).

So the database URL looks like:

`DATABASE_URL="postgresql://POSTGRESUSERNAME:POSTGRESSPASSWORD@localhost:5432/practice-sites"`

(obviously that postgresusername and postgresspassword isn't my actual postgres username nor password lol swap them out with yours)

I did run the commands for generating and migrating the database. (npm run db:generate, npm run db:migrate) That's how I realized I had a problem initially with setting up the database, but I got it now.

### Creating the Routes

First thing I did was try to see the similarities and differences between the setups for this T3 Stack scaffolding and the one I did from scratch following the tutorial I previously mentioned. I ended up finding that there is a sample post router inside of the API folder inside of a folder called ROUTERS. These contain various routers. It was only later when I was trying to put the functions together for the app following what I've previously written that I realized that I didn't know what this t3-stack-app used for the const "trpc" that was in the original tutorial. It looks like it uses "api" as the const inside of the react.tsx.

...or not. It's giving me a type error.

...aaaaaaand I am stumped. I don't know what I'm doing...^^; It may be easier to just set this up from scratch...

## Other Notes

- had to update the README a few times because I don't really know how to use markdown, lol
- yes, I'm effectively writing a blog post with this...I hope the insights can help people.
