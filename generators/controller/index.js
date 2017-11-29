'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yoUtils = require('../../yo-utils.js');

module.exports = yeoman.Base.extend({

    constructor: function () {
        console.log(yosay(chalk.blue('AngularJS controller generator') + '\n\n'
            + chalk.yellow('John Papa code style')));

        // Take the controller name as a command-line argument
        yeoman.Base.apply(this, arguments);
        this.argument('name', {
            desc: 'Controller name (in UpperCamelCase)',
            type: String,
            required: false
        });
    },

    prompting: function () {
        var prompts = [];

        // Prompt for the controller name if the user didn't supply it on the command line
        if (!this.name) {
            prompts.push({
                type: 'input',
                name: 'name',
                message: "Controller name (in UpperCamelCase):"
            });
        }
        prompts.push({
            type: 'input',
            name: 'module',
            message: 'Controller module name:'
        });

        return this.prompt(prompts).then(function (props) {
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        // Grab the 'name' command-line argument or property
        var name = this.name || this.props.name;
        var filename = yoUtils.changeCamelCaseToHyphenated(name);
        var module = this.props.module;

        console.log('Creating controller ' + chalk.cyan(name) + '...');

        this.fs.copyTpl(
            this.templatePath('your.controller.js'),
            this.destinationPath(filename + '.controller.js'), {
                controller: name,
                module: module
            });
    }

});
