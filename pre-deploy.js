var copy = require('recursive-copy');
var fs = require('fs-extra');

fs.emptyDirSync('migrations');

var options = {
    filter: [
        '**/*.js'
    ],
    rename: function (filePath) {
        var parts = filePath.split('/');

        return parts[0] + '-' + parts[1];
    },
};

copy('scripts', 'migrations', options)
    .on(copy.events.COPY_FILE_COMPLETE, function (copyOperation) {
        console.info('Copied to ' + copyOperation.dest);
    })
    .on(copy.events.ERROR, function (error, copyOperation) {
        console.error('Unable to copy ' + copyOperation.dest);
    })
    .then(function (results) {
        console.info(results.length + ' file(s) copied');
    })
    .catch(function (error) {
        return console.error('Copy failed: ' + error);
    });