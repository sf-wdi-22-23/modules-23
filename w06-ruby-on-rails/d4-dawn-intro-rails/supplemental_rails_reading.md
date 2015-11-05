# What is Rails?

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004.

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions. Even though Rails comes with its own set of tools and settings, you're certainly not limited to the included library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

## [Understanding Rails Guiding Principles](http://railsapps.github.io/what-is-ruby-rails.html)
The popularity of Rails is an outgrowth of the Rails “philosophy” or guiding principles.

#### Rails is Opinionated
In the mid-1990s, web applications were often written in Perl, a programming language that promised, “There’s more than one way to do it.” Perl is a prime example of “non-opinionated” software; there’s no “right way” or “best way” to solve programming problems in Perl. Famously, Perl’s documentation states, “In general, [Perl’s built-in functions] do what you want, unless you want consistency.”

In contrast, Rails is said to be “opinionated.” There is a “Rails way” for many of the problems that must be solved by a web application developer. If you follow the Rails conventions, you’ll have fewer decisions to make and you’ll find more of what you need is already built. The benefit is faster development, improved collaboration, and easier maintenance.

#### Rails is Omakase
Omakase is a Japanese phrase that means “I’ll leave it to you.” Customers at sushi restaurants can order omakase, entrusting the chef to make a pleasing selection instead of making their own à la carte choices. In a famous essay Heinemeier Hansson declared Rails is Omakase, and said, “A team of chefs picked out the ingredients, designed the APIs, and arranged the order of consumption on your behalf according to their idea of what would make for a tasty full-stack framework…. When we, or in some cases I — as the head chef of the omakase experience that is Rails — decide to include a dish, it’s usually based on our distilled tastes and preferences. I’ve worked in this establishment for a decade. I’ve poured well in the excess of ten thousand hours into Rails. This doesn’t make my tastes right for you, but it certainly means that they’re well formed.”

Understanding that Rails is omakase means accepting that many of the opinions enshrined in the Rails API are the decisions of a Benevolent Dictator for Life, informed by discussion with other developers who have made significant contributions to the Rails code base. For the most part, Heinemeier Hansson’s “opinions” will serve you well.

#### Convention Over Configuration
“Convention over configuration” is an example of Rails as “opinionated software.” It is an extension of the concept of a default, a setting or value automatically assigned without user intervention. Some software systems, notably Java web application frameworks, need multiple configuration files, each with many settings. For example, a configuration file might specify that a database table named “sales” corresponds to a class named “Sales.” The configuration file permits flexibility (a developer can easily change the setting if the table is named “items_sold”). Instead of relying on extensive configuration files, Rails makes assumptions. By convention, if you create a model object in Rails named “User,” it will save data to a database table named “users” without any configuration required. Rails will also assume the table name is plural if the class name is singular.

“Convention over configuration” means you’ll be productive. You won’t spend time setting up configuration files. You’ll spend less time thinking about where things go and what names to assign. And, because other developers have learned the same conventions, it is easier to collaborate.

#### Don’t Repeat Yourself
Known by the acronym DRY, “Don’t Repeat Yourself” is a principle of software development formulated by Andy Hunt and Dave Thomas and widely advocated among Rails developers. In its simplest form, it is an admonition to avoid duplication. When code is duplicated, an application becomes more complex, making it more difficult to maintain and more vulnerable to unintended behavior (bugs). The DRY principle can be extended to development processes as well as code. For example, manual testing is repetititive; automated testing is DRY. Software design patterns that introduce abstraction or indirection can make code more DRY; for example, by eliminating repetitive if-then logic.

Code reuse is a fundamental technique in software development. It existed long before Andy Hunt and Dave Thomas promoted the DRY principle. Rails takes advantage of Ruby’s metaprogramming features to not just reuse code but eliminate code where possible. With a knowledge of Rails conventions, it’s possible to create entire simple web applications with only a few lines of code.

## [The MVC Architecture](http://guides.rubyonrails.org/v3.2.21/getting_started.html#the-mvc-architecture)
At the core of Rails is the Model, View, Controller architecture, usually just called MVC. MVC benefits include:

* Isolation of business logic from the user interface
* Ease of keeping code DRY
* Making it clear where different types of code belong for easier maintenance

![MVC img](https://camo.githubusercontent.com/f315ed8c47a7f129e1ba190352a3fef313b266d1/687474703a2f2f656c6962696c646e65722e66696c65732e776f726470726573732e636f6d2f323031322f30362f73637265656e2d73686f742d323031322d30362d30352d61742d322d31322d31382d616d2e706e67)

#### Models
A model represents the information (data) of the application and the rules to manipulate that data. In the case of Rails, models are primarily used for managing the rules of interaction with a corresponding database table. In most cases, each table in your database will correspond to one model in your application. The bulk of your application’s business logic will be concentrated in the models.

#### Views
Views represent the user interface of your application. In Rails, views are often HTML files with embedded Ruby code that perform tasks related solely to the presentation of the data. Views handle the job of providing data to the web browser or other tool that is used to make requests from your application.

#### Controllers
Controllers provide the “glue” between models and views. In Rails, controllers are responsible for processing the incoming requests from the web browser, interrogating the models for data, and passing that data on to the views for presentation.

## [File Structure of a Rails App](http://www.tutorialspoint.com/ruby-on-rails/rails-directory-structure.htm)

```
/app
.../assets
.../controller
.../helpers
.../models
.../views
/components
/config
/db
/doc
/lib
/log
/public
/script
/test
/tmp
/vendor
```

**app:** This organizes your application components. It's got subdirectories that hold the view (views and helpers), controller (controllers), and the backend business logic (models).

**app/assets:** Contains javascript files, stylesheets, and images that will be served to the client.

**app/controllers:** The controllers subdirectory is where Rails looks to find controller classes. A controller handles a web request from the user.

**app/helpers:** The helpers subdirectory holds any helper classes used to assist the model, view, and controller classes. This helps to keep the model, view, and controller code small, focused, and uncluttered.

**app/models:** The models subdirectory holds the classes that model and wrap the data stored in our application's database. In most frameworks, this part of the application can grow pretty messy, tedious, verbose, and error-prone. Rails makes it dead simple!

**app/view:** The views subdirectory holds the display templates to fill in with data from our application, convert to HTML, and return to the user's browser.

**app/view/layouts:** Holds the template files for layouts to be used with views. This models the common header/footer method of wrapping views. In your views, define a layout using the <tt>layout :default</tt> and create a file named default.rhtml. Inside default.rhtml, call <% yield %> to render the view using this layout.

**components**: This directory holds components tiny self-contained applications that bundle model, view, and controller.

**config:** This directory contains the small amount of configuration code that your application will need, including your database configuration (in database.yml), your Rails environment structure (environment.rb), and routing of incoming web requests (routes.rb). You can also tailor the behavior of the three Rails environments for test, development, and deployment with files found in the environments directory.

**db:** Usually, your Rails application will have model objects that access relational database tables. You can manage the relational database with scripts you create and place in this directory.

**doc:** Ruby has a framework, called RubyDoc, that can automatically generate documentation for code you create. You can assist RubyDoc with comments in your code. This directory holds all theR ubyDoc-generated Rails and application documentation.

**lib:** You'll put libraries here, unless they explicitly belong elsewhere (such as vendor libraries).

**log:** Error logs go here. Rails creates scripts that help you manage various error logs. You'll find separate logs for the server (server.log) and each Rails environment (development.log, test.log, and production.log).

**public:** The only folder seen by the world as-is. Contains static files and compiled assets.

**script:** This directory holds scripts to launch and manage the various tools that you'll use with Rails. For example, there are scripts to generate code (generate) and launch the web server (server).

**test:** The tests you write and those Rails creates for you all go here. You'll see a subdirectory for mocks (mocks), unit tests (unit), fixtures (fixtures), and functional tests (functional).

**tmp:** Rails uses this directory to hold temporary files for intermediate processing.

**vendor:** Libraries provided by third-party vendors (such as security libraries or database utilities beyond the basic Rails distribution) go here.
