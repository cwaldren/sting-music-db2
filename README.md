How to set up
------------

* Install wamp/xamp/whatever.
* Install Github for windows/mac
* Hit clone in desktop button on github on this repo
* Open c:\wamp(or whatever)\bin\apache\Apache2.4.4\conf\httpd.conf
* Search for 
	* `DocumentRoot "`

* Replace both tags with your github project's directory like
	* `DocumentRoot "C:/Users/blah/Documents/GitHub/sting-music-db"`
	* `<Directory "C:/Users/blah/Documents/GitHub/sting-music-db">`

* Save, restart the webserver. Then just edit stuff, commit, etc. 