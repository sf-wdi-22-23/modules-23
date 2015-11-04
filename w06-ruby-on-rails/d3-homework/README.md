# Intro To Rails

Rails has excellent learning resources available online. Today, you'll look at your first of many <a href="http://guides.rubyonrails.org/" target="_blank">Rails Guides</a>: 

  * <a href="http://guides.rubyonrails.org/getting_started.html" target="_blank">Getting Started Guide</a> (up through section 5.7)
  * <a href="http://guides.rubyonrails.org/active_record_basics.html" target="_blank">ActiveRecord Basics</a> (chapters 1, 2, and 5)

Get in the habit of exploring Rails Guides as you approach new topics in Rails!


## Homework

Create a `rails-info.md` file inside your `2x-homework/USERNAME` directory. 

In a different directory (outside `2x-homework`), read and complete the Getting Started tutorial steps up to and including <a href="http://guides.rubyonrails.org/getting_started.html#showing-articles" target="_blank">Section 5.7: Showing Articles</a>.  Don't worry about deeply understanding everything you do. 

Also, read chapters 1, 2, and 5 of the ActiveRecord Basics guide.  You don't need to incorporate these into your Getting Started project, just look over the syntax.

**As you work through the guides**, answer the following questions in your `rails-info.md` file. **Each answer should be 8 words or less!** 

1. What is a strength of Rails (or something you like about Rails)?

1. What is the name of the server Rails comes with, and what is the name of the database it comes with?

1. What is a "resource"?

1. What is a "controller"? How is it different from a "route"?

1. In Express, `server.js` contained our routes. Where was controller logic defined in our Express projects?

1. Look at `app/views/layouts/application.html.erb`. What does this file remind you of / what does it contain?

1. The `app/controllers/articles_controller.rb` file looks like:

	```ruby
	class ArticlesController < ApplicationController
	 	def new
		end
		
		def create
		  @article = Article.new(article_params)
		 
		  @article.save
		  redirect_to @article
		end

		def show
		  @article = Article.find(params[:id])
		end
		 
		private
		  def article_params
		    params.require(:article).permit(:title, :text)
		  end
	end
	```

  * What does the first line `ArticlesController < ApplicationController` mean?
  * How does `ArticlesController#new` know which view to display?
  * Why does `@article` have that `@`?

1. What is ActiveRecord? What was the equivalent tool we used with Express?

1. What is a "migration"?

1. List at least one question you have about Rails (can go over 8 word max if needed).

## Submission

After you write your **short** answers to the questions above in `rails-info.md`, follow normal submission procedures (`git add`, `git commit`, `git push`, pull request) to submit your answers.
