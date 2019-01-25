var Jasmine = require('jasmine');
var JUNITReporter = require('jasmine-junit-reporter');

var reporter = new JUNITReporter();
var jasmine = new Jasmine();

//console.log(process.argv);
var changedSpec = process.argv[2];

var config = require('../test/jasmine.json');

if (changedSpec) {

    var index = changedSpec.indexOf(config.spec_dir);
    var relativeSpec = changedSpec.substring(index + config.spec_dir.length + 1);
    //console.log(relativeSpec);
    config.spec_files = [relativeSpec];
}

jasmine.loadConfig(config);
//var env = jasmine.getEnv();
//console.log(jasmine.env.addReporter);

jasmine.env.addReporter(reporter);

jasmine.execute();
