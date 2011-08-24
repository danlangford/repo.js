the idea here is that you could use your browsers console as sort of a command line interface to your environment.
this specific piece, repo.js, sets forth some ideas around populating a local repository,
browsing and searching your repo, and loading scripts from your repo into your current environment for use. 

repo.add( {"catalog":[{"name":"myLibName","url":"http://my.lib.com/min.js"}]} );

repo.list()

repo.install('myLibName')

in these tools we will FAVOR dislaying content to the console as if it where a command line.
to facilitate that all functions should return a summary String so that it appears in the console
also functions will use console.log, hopefully in a manner that wont blow up

the lib itself, repo.js, will not modify the DOM in anyway

things to consider:
    adding version numbers and min identifiers to the catalog
    look at patterns that already exist in CDNs like ajax.googleapis.com
        (http://code.google.com/apis/libraries/devguide.html#Libraries)
