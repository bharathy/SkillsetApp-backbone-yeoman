# Single page SkillSet App using Backbone + Underscore + Jasmine + Bootstrap + SASS Using Yeoman

# Brief about SkillsetApp : 
* Add Skill
* List Skill
* Delete Skill
* Add rating Score in a scale of 0 to 5.
* Unique and Case Insensitive SkillName

## Overview
Yeoman generated webapp with:

* Jquery
* Underscore
* Backbone
* Backbone.LocalStorage
* Twitter Bootstrap
* SASS
* Jasmine

Note : Used Backbone.LocalStorage for storage of model without rest API. 

## Installation

* [Install yo, bower, grunt.](http://yeoman.io/gettingstarted.html)

* Clone the repo and run

    ```shell
    npm install && bower install
    ```

## Build

### To Preview locally

```shell
grunt server
```

### To Preview distribution or Production Code

```shell
grunt server:dist
```

### Build distribution or production, without tests

```shell
grunt build
```

## Test

```shell
grunt test
```

### ScreenShots:

![Alt text](/app/images/screenshot.png?raw=true)

![Alt text](/app/images/jasmine-screenshot.png?raw=true)