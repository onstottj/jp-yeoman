'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yoUtils = require('../../yo-utils.js');

module.exports = yeoman.Base.extend({

    constructor: function () {
        console.log(yosay(chalk.blue('AngularJS service/factory generator') + '\n\n'
            + chalk.yellow('John Papa code style')));

        // Take the service name as a command-line argument
        yeoman.Base.apply(this, arguments);
        this.argument('name', {
            desc: 'Service name (camel case, no spaces)',
            type: String,
            required: false
        });
    },

    prompting: function () {
        var prompts = [];

        // Ask for the service name if it wasn't specified on the command-line
        if (!this.name) {
            prompts.push({
                type: 'input',
                name: 'name',
                message: 'Service name (camel case, no spaces):'
            });
        }

        prompts.push({
            type: 'input',
            name: 'module',
            message: 'Service module name:'
        });

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        var name = this.name || this.props.name;
        var filename = yoUtils.changeCamelCaseToHyphenated(name);
        var module = this.props.module;

        console.log('Creating service/factory ' + chalk.cyan(name) + '...');

        this.fs.copyTpl(
            this.templatePath('your.factory.js'),
            this.destinationPath(filename + '.factory.js'), {
                module: module,
                service: name
            });
    }

});
