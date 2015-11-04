# Intro To Rails

Rails has excellent learning resources available online. Today, you'll look at your first of many <a href="http://guides.rubyonrails.org/" target="_blank">Rails Guides</a>: their <a href="http://guides.rubyonrails.org/getting_started.html" target="_blank">Getting Started Guide</a>.  Explore Rails Guides as you approach new topics in Rails!


## Homework

Create a `rails-info.md` file inside your `2x-homework/USERNAME` directory. 

In a different directory (outside `2x-homework`), read and complete the tutorial steps up to and including <a href="http://guides.rubyonrails.org/getting_started.html#showing-articles" target="_blank">Section 5.7: Showing Articles</a>.  Don't worry about deeply understanding everything you do. 

**As you work through the guide**, answer the following questions in your `rails-info.md` file. **Each answer should be 8 words or less!** 

1. What is a strength of Rails (or something you like about Rails)?

1. What is the name of the server Rails comes with, and what is the name of the database it comes with?

1. What is a "resource"?

1. What is a "controller"? How is it different from a "route"?

1. What is a "migration"?

1. In Express, our server.js defined our routes. Where was controller logic defined in our Express projects?

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

1. List at least one question you have about Rails (can go over 8 word max if needed).

## Submission

After you write your **short** answers to the questions above in `rails-info.md`, follow normal submission procedures (`git add`, `git commit`, `git push`, pull request) to submit your answers.
