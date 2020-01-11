const http = require('http'); //http library for responding to web requests
const fs = require('fs'); //filesystem library for reading files
const server = http.createServer(function (request, response) {
    console.log('Client request Url:', request.url);

    if (request.url == '/cars') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'content-Type': 'text/html'
            });
            response.write(contents); //send response body
            response.end();

        });

    } else if (request.url == '/cars/new') {
        fs.readFile('views/new_cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'content-Type': 'text/html'
            });
            response.write(contents); //send response body
            response.end();

        });
    } else if (request.url.startsWith('/images/cars/')) {
        fs.readFile('.' + request.url, function (errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
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
    else if (request.url == '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'content-Type': 'text/html'
            });
            response.write(contents); //send response body
            response.end();

        });
    } else if (request.url.startsWith('/images/cats/')) {
        fs.readFile('.' + request.url, function (errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents); //send response body
            response.end();

        });


    } else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});
server.listen(6789); //tell your server which port to run on 