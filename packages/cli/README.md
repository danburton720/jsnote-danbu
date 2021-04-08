# jsnote-danbu

## Get started
Run `npx jsnote-danbu serve` to start the app.
By default it will run on port 4005 and save
your notes in a file called notebook.js in your
user folder on your file system.

### Options

#### Port
Choose what port to serve the app on by specifying
either the

`--PORT` flag, e.g. `--PORT 5000`

or use the `-p` flag e.g. `-p 5000`


#### Notebook name and location
Provide a name for the notebook by specifying
after the `serve` command.
e.g. 

`serve javascript-notes.js`

or

`serve javascriptnotes/notebook.js`