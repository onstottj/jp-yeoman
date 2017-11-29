'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var y   oUtils = require('../../yo-utils.js');

module.exports = yeoman.Base.extend({

    constructor: function () {
        console.log(yosay(chalk.blue('AngularJS directive generator') + '\n\n'
            + chalk.yellow('John Papa code style') + '\n\n'
            + chalk.yellow('Creates an accompanying HTML template')));

        // Take the directive name as a command-line argument
        yeoman.Base.apply(this, arguments);
        this.argument('name', {
            desc: 'Directive name (camel case, no spaces)',
            type: String,
            required: false
        });
    },

    prompting: function () {
        var prompts = [];

        // Ask for the directive name if it wasn't specified on the command-line
        if (!this.name) {
            prompts.push({
                type: 'input',
                name: 'name',
                message: 'Directive name (camel case, no spaces):'
            });
        }
        prompts.push({
            type: 'input',
            name: 'module',
            message: 'Directive module name:'
        });
        prompts.push({
            type: 'input',
            name: 'path',
            message: 'Path to the HTML template relative to the web root:'
        });

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        var name = this.name || this.props.name;
        var filename = yoUtils.changeCamelCaseToHyphenated(name);
        var controllerName = yoUtils.capitalizeFirstLetter(name) + 'Controller';

        var module = this.props.module;

        console.log('Creating directive ' + chalk.cyan(name) + ' in module ' + chalk.cyan(module) + '...');

        this.fs.copyTpl(
            this.templatePath('your.directive.js'),
            this.destinationPath(filename + '.directive.js'), {
                controller: controllerName,
                module: module,
                directive: name,
                filename: filename,
                path: this.props.path
            });

        this.fs.copyTpl(
            this.templatePath('your.directive.html'),
            this.destinationPath(filename + '.directive.html'), {
                name: name
            });
    }

});
