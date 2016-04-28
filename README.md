# About

This is a super fantastic game about establishing a village and helping it grow! It uses HTML5 and AngularJS, with styling coming primarily from Bootstrap.

## Project Setup

Read [the wiki page](https://github.com/Arodang/Moroja/wiki/Project-Setup-Instructions).

## Git Workflow

### tl;dr

*Every separate task or new feature should be worked on in its own branch.*

*Then, once you finish working, you can submit a pull request from your task's branch to `dev`.*

### Longer version

First, make sure you have the `dev` branch checked out:

    git checkout dev

Then create your new branch:

    git checkout -b relevant_branch_name

Now you can make your changes!

When you're ready to have your code reviewed, push your changes to the remote branch:

    git push

And then do a pull request from there, using the GitHub website.

## Running

    gulp watch

## Testing

    # Run unit tests
    gulp unit

    # Run end to end tests 
    gulp e2e

## Directory Layout


## Technologies

[git](http://git-scm.com/)  
[npm](https://www.npmjs.org/)  
[node](http://nodejs.org)  
[protractor](https://github.com/angular/protractor)  
[jasmine](http://jasmine.github.io)  
[karma](http://karma-runner.github.io)  
[travis](https://travis-ci.org/)  
[browserify](http://browserify.org/)  
[angular](http://angularjs.org)
