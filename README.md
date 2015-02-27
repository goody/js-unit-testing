# js-unit-testing
[The Blog Post](http://community.rightpoint.com/blogs/viewpoint/archive/2015/02/27/the-tools-you-need-to-get-rolling-with-unit-testing-your-javascript.aspx)

To run this test code clone the project.

Then run:

`npm install`

Then run:

`karma init`

Then edit karma.conf.js:

```
files: [
  'js/*.js',
  'tests/*.js'
],
```
The run:

`karma start karma.conf.js`

You should get 1 error in 4 tests.  10 doesn't equal 8!?@
