'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    constructor: function () {
        console.log(yosay(chalk.blue('AngularJS module generator') + '\n\n'
            + chalk.yellow('John Papa code style') + '\n\n'
            + chalk.yellow('Names should be lowercase and can be multiple words separated by periods.')));

        // Take the module name as a command-line argument
        yeoman.Base.apply(this, arguments);
        this.argument('name', {
            desc: 'Module name',
            type: String,
            required: false
        });
    },

    prompting: function () {
        // Prompt for the module name if the user didn't supply it on the command line
        if (!this.name) {
            var prompts = [{
                type: 'input',
                name: 'name',
                message: 'Module name:'
            }];

            return this.prompt(prompts).then(function (props) {
                this.name = props.name;
            }.bind(this));
        }
    },

    writing: function () {
        // Grab the 'name' command-line argument or property
        var name = this.name;

        console.log('Creating module ' + chalk.cyan(name) + '...');

        this.fs.copyTpl(this.templatePath('your.module.js'), this.destinationPath(name + '.module.js'), {name: name});
    }

});
