# Francis Kershaw - Dev Portfolio

![heroimage](https://res.cloudinary.com/dqdjr1d4f/image/upload/v1654879900/Portfolio/ihgdlgy0qt11i9exqjrn.png)

This project is designed to showcase all of the work I produced while retraining on my Code Institute diploma, as well as any future personal applications I decide to work on. It uses a custom Express and MongoDB backend so that the building blocks are in place for version 2 to have complete CRUD (create, read, update, delete) capability so that I'll be able to manage all projects and skills from the frontend. I chose to make this my first React JS (and therefore a MERN stack) project as a means to practice skills learnt in my day job.

You can find the link the repository [here](https://github.com/franciskershaw/franciskportfolio), and the live website can be viewed [here](https://www.franciskershaw.com/)

## Table of Contents

* [Notes pre development](#notes-pre-development)
* [User Stories](#user-stories)
* [UX Design](#ux-design)
    * [Scope Plane](#scope-plane)
    * [Structure Plane](#structure-plane)
    * [Skeleton Plane](#skeleton-plane)
    * [Surface Plane](#surface-plane)
* [Technologies Used](#technologies-used)
* [Version 2 notes](#notes-for-version-2)


## Notes pre development

The project has already gone through several iterations, having been most recently reworked from the ground up to break the backend and frontend into separate directories so that React could be employed on the frontend. However, the ideas and requirements detailed below have remained consistent from the start.

## User stories

### User stories (site owner)
1. As the owner of the portfolio site, I want people to see my work presented in an aesthetically pleasing manner.
2. As the owner of the site, I want people to see a summary of myself and my skill set
3. As the owner of the site, I want people to be able to contact me if they want to get in touch.
4. As the owner of the site, I want to be able to add, edit, or delete projects from the site with ease so that I can update the content when needed.

### User stories (visitors)
1. As a visitor, I want a convenient place to find this developer's previous or current work so that I can assess the quality of their coding skills.
2. I want the projects to have navigation to the repository and the live site, as well as some descriptive information of what the project entailed.
3. I want an easy means of contacting the site owner if I am suitably impressed so that we can talk about opportunities.
4. I want to know a bit more about the site owner’s personal history so that I can get a more well rounded view of the person outside of the work they have produced.
5. I want to be able to download their full CV so that I can see an official breakdown of their previous work history.
6. I would like to navigate to the site owner’s social accounts (like LinkedIn or Github).

## UX Design

### Scope plane

### Required functional specifications
* A picture of me
* A description of who I am and what I do
* Summary of my skills
* My projects past and present
* A means of contacting me
* Links to my GitHub and LinkedIn

### Content requirements
* Need to present a ‘vibe’ that properly captures who I am and what I could bring in a work context.
* Need the means to add, edit, or delete projects as and when I need to (I need a backend)

### Nice to have
* Blog
* Complete crud functionality

### Structure plane

* Most of the site is going to fit onto one page, with a fixed navigation bar that directs you to the correct part of the page.
* Start with a picture of me and a short description of what I do, followed by a call to action to ‘get in touch’ or ‘view projects’ which are the two most important things I want to get out of this site.
* Short description of my work history can come beneath this potentially?
* Beneath the description section will be the meat of the website, my past projects - these are represented by relatively small cards containing the README hero image, the title of the project, and 2 buttons: more details, live site.
* More details will load a template for that specific project containing essentially the introduction given on the GitHub repo. One button will direct people to the repository, one will link to the live site, one will redirect back to the main portfolio page. Should contain some screenshots of the picture
* Beneath this work section can be a summary of my skills, represented by their logos
* Beneath the projects will be the contact form, the fields are name, email address, and message field.
* To add a new project, admin users can handle that side of things
* The navigation bar will have my name on the top left, the main navigation elements in the middle, and social links + CV on the right
* The footer will have the same content as the navigation bar

### Skeleton plane

![mainwireframe](https://res.cloudinary.com/dqdjr1d4f/image/upload/v1655021189/Portfolio/portfolio-main-wireframe_qiywnj.png)

![crudwireframe](https://res.cloudinary.com/dqdjr1d4f/image/upload/v1655021189/Portfolio/porftolio-crud-wireframe_sr2fmv.png)

### Surface plane

#### Colour scheme:
Still deciding this

#### Typography
* Quicksand
* Dosis

## Technologies used
* React as a the frontend framework
* SCSS for styling
* Express / Node.JS to handle the backend logic
* MongoDB / Mongoose to handle and store data
* Digital Ocean for cloud hosting
* Cloudinary for image hosting

## Notes for version 2

The first version of this stie that has been pushed live in June 2022 is the bare minimum viable product I deemed acceptable for deployment. However I will be scaling up the project exponentionally as time goes on, and future versions will include the following:

* Adding, editting, deleting, reordering projects from the frontend.

* An about section, directly beneath the hero section, which will give a bio of me and the services I offer.

* Individual project pages/routes which you can view to 'find out more'


