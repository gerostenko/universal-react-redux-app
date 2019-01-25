var Jasmine = require('jasmine');
var JUNITReporter = require('jasmine-junit-reporter');

var reporter = new JUNITReporter();
var jasmine = new Jasmine();

var changedSpec = process.argv[2];

var config = require('../test/jasmine.json');

if (changedSpec) {

    var index = changedSpec.indexOf(config.spec_dir);
    var relativeSpec = changedSpec.substring(index + config.spec_dir.length + 1);
    config.spec_files = [relativeSpec];
}

jasmine.loadConfig(config);

jasmine.env.addReporter(reporter);

jasmine.execute();
