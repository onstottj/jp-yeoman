jp-yeoman
=========

Yeoman generators for Angular 1 that follow the John Papa code style.

Installation
------------

1.  Install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/) (we assume you have
    pre-installed [node.js](https://nodejs.org/)).

    `npm install -g yo`

2.  Checkout this project using Git

3.  Run `npm link` from the project's folder, which makes the yeoman generators available on your command line
    anywhere.  In the future you can pull in commits to this project and they'll be instantly available when you 
    run the generator.

Usage
-----

In any project, navigate to the folder where you'd like to add files.  Then run one of these actions from
the command line.

**Yeoman generators:**

 -  `yo jp:module <name>`: generates an Angular module in its own file, per the John Papa code style
 -  `yo jp:controller <name>`: generates an Angular controller per the John Papa code style
 -  `yo jp:directive <name>`: generates an Angular directive which includes a HTML template in the John Papa code style
 -  `yo jp:service <name>`: generates an Angular service/factory per the John Papa code style

You can specify the name of the thing to create as part of the command (e.g. `yo jp:service myNewService`), but by 
specifying it later, you'll get tips about naming conventions.

Generator development
---------------------

[Learn about Yeoman](http://yeoman.io/)

**Creating a generator**

1.   If this is the first time you've done this, run `npm install -g generator-generator`
2.   From the root of this project, run `yo generator:subgenerator <name>`
3.   A sub-generator is created under generators/\<name\> which users can run using `yo jp:<name>`
4.   Add your generator to the list of generators above

**Testing & Usage**

To test out your new generator (or changes to an existing generator), run `npm link` from the root of this project if 
you haven't already.  That command makes `yo jp:<name>` available.
