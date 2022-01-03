# FrancisK - Portfolio

(Hero image and brief intro)

## Table of Contents

* [Notes pre development](#notes-pre-development)
* [User Stories](#user-stories)
* [Scope Plane](#scope-plane)
* [Structure Plane](#structure-plane)
* [Skeleton Plane](#skeleton-plane)
* [Surface Plane](#surface-plane)
    * [Keywords](#keywords)
    * [Colour Scheme](#colour-scheme)
    * [Typography](#typography)
* [Data Model](#data-model)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Defensive design features](#defensive-design-features)
* [Languages and frameworks](#languages-and-frameworks)
* [Testing](#testing)
* [Deployment](#deployment)


## Notes pre development

Key points to be aware of:
* First personal app using Node and Express, with Nunjucks as the templating language to keep some consistency with previous projects.
* Going to attempt to code the site without Bootstrap so that I can practice my CSS grid and flex skills.
* Need to do research on SEO to try and make the site climb the google rankings.
* Need to work out how to register domain name and integrate with AWS to host static files on production version of the site.

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

## Scope plane

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

## Structure plane

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

### Templates
* index.html
* view_project.html
* add_project.html
* edit_project.html
* login.html

## Skeleton plane

## Surface plane

### Keywords:
* Professional
* Playful

### Colour scheme:
* #f6f1f1
* #dbe9ee
* #c0d6df
* #567bb3
* #405863

### Typography
* Quicksand
* Dosis
