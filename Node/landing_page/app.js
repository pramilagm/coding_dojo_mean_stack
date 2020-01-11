const http = require('http'); //http library for responding to web requests
const fs = require('fs'); //filesystem library for reading files
const server = http.createServer(function (request, response) {
    console.log('Client request Url:', request.url);

    if (request.url == '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'content-Type': 'text/html'
            });
            response.write(contents); //send response body
            response.end();

        });

    } else if (request.url == '/ninjas') {
        fs.readFile('views/ninjas.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'content-Type': 'text/html'
            });
            response.write(contents); //send response body
            response.end();

        });
    } else if (request.url == '/dojos/new') {
        fs.readFile('views/dojos.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'content-Type': 'text/html'
            });
            response.write(contents); //send response body
            response.end();

        });
    } else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/css'
            });
            response.write(contents);
            response.end();
        })
    }
    //url for cars 
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});
server.listen(7070); //tell your server which port to run on 