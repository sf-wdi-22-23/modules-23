# Making a Pull Request

Pull requests are one tool GitHub gives us to collaborate on code.  They're most frequently used when you're working on code you don't own and/or where contributions are usually reviewed before being incorporated into the project. It might be an open source project, or the live "production" repository at a company you work for.   <a href="https://help.github.com/articles/using-pull-requests/" target="_blank">Check out GitHub's documentation on using pull requests.</a>


**If you forget to fork a repo, and instead you clone it directly to your computer, you can fix that!** *(Shoutout WDI 23! -Brianna)*  Fork the original repo to get a copy on your GitHub account, but don't clone your forked copy onto your computer.  Just copy your fork's github clone url.  Next, in your Terminal, change the url of your `origin` remote repo to point to your fork instead of the orginal repository. Use `git remote set-url origin PASTE_YOUR_FORKS_GITHUB_CLONE_URL`. You'll still want to add the original repo as an "upstream" remote (see below).

**If you're working on someone else's repo**, you'll generally want to:
- fork the repository you want to contribute to
- clone your forked copy from your GitHub account onto your local computer
- add the original repo as a second remote called "upstream" for your local repo `git remote add upstream PASTE_THE_ORIGINAL_REPO_CLONE_URL`
- make and test your changes, committing along the way
- pull changes from the original repo and fix any merge conflics  `git pull upstream master`
- push your changes to your GitHub account  `git push origin master`
- make a pull request to let the original repository's owners know about the changes you've made

 


**If you're working on a team** and someone else is reviewing your code before it's included, your team might decide to make everyone collaborators with direct access to the repo.
- clone a copy of the repo onto your computer    
- make a branch named for the feature you're working on  `git checkout -b featuretastic`
- make and test your changes, committing along the way
- pull changes from the team repo and fix any merge conflicts  `git pull origin master`
- push your changes to the team GitHub repo `git push origin featuretastic`
- create a pull request to merge your branch into the appropriate existing branch (usually master for us)
