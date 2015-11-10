# How to Collaborate with Github

Github is a powerful tool for versioning and collaborating on code. In this article we will focus on how to collaborate using Github by **creating pull requests** for repos we would like to make changes for. There are two main scenarios for collaborating on coding projects: either you are a collaborator, or not. If you are a collaborator on the repo, you can clone the project to create pull requests (but be careful -- you could also push directly to origin/master, which is not recommended). If you are not a collaborator on the repo, you will have to fork the project in order to make a pull request.

Use the following collaboration scenarios to do the following with a partner.

1. Create a rails project, push it to github, and make your partner a collaborator. (2 projects total!)
1. On your own project add an index page for a single resource - whatever you like. Get creative.
1. Clone the project your partner created, make a new branch, add a splash page to it and make the branch into a pull request.
1. On your own project in github, accept and merge your partner's pull request.

You should both have a project with a splash page and a `posts#index` page.

## Collaborator Scenario

Imagine you and Jessica, Sally, and John want to build an app together. John bootstraps a rails project and pushes it to Github and adds the other three as <a href="https://help.github.com/articles/adding-collaborators-to-a-personal-repository/" target="_blank">collaborators</a>. You divvy up tasks and set to work. Your first task is to add user authentication.  At the same time, Jessica is doing API integration, Sally is writing tests, and John is going to be git master and put together a style guide and the splash page.

1. You clone the project John pushed up to Github after he makes you a collaborator. This creates a local repository with a `remote` called `origin` which is the original repo John created and that is technically owned by John. From within your local repository, you can check the urls of all remote repos it's connected to.
  ```
  $ git remote -v
  ```

2. Make a new branch called `auth`. Feature branches help organize work on a project.
  ```
    $ git checkout -b auth
  ```

3. Now you build the entire auth feature with sign up, login, logout, etc. How do you get your new code up to the main group project?

4. Switch back to the local/master branch, then pull from origin/master to bring your local master up to date.
  ```
    $ git checkout master
    $ git pull origin master
  ```

5. Now switch back to your local/auth branch and merge local/master into it. This will give you a chance to resolve all conflicts with the most up to date master version before pushing your branch to origin/master. Watch git's output in your terminal to see which files have merge conflicts.
  ```
    $ git checkout auth
    $ git merge master
  ```

6. Once you have resolved all the conflicts, add and commit your changes locally and push your feature branch to the remote repo.
  ```
    $ git push origin auth
  ```

7. Now navigate in your browser to original remote repo's GitHub page. GitHub will detect that you just pushed a new branch and give you a prompt to make that branch into a pull request. Go for it! This will notify all the collaborators that a pull request is waiting to be merged. In industry, the next step would be for someone else on the team to review your code and suggest any changes needed before it's merged in.  As soon as you've created the pull request, though, John or another member of the team can try to merge it in.

8. If there are no other pull requests in the queue, John can merge your pull request in cleanly with the most up to date master. Otherwise, John might choose to merge a few pull requests before yours, and those pull requests might create merge conflicts with yours. In that case, GitHub will show that there are merge conflicts. John can pull down your pull request branch and merge them locally to remove all conflicts, or he can ask you to and you can repeat the last few steps here (starting with `git pull origin master` in your local repo) to get the newest changes from the group repo and then merge again. Remember its not the owner of git success to fix all merge conflicts! (How could they do that? They didn't write the code! Each branch owner is responsible to get a clean pull request queued up)

## Fork

Forking is used when you are not a collaborator on a project. Just read the following scenario.

Say you want to add some better test coverage to a wonderful and popular starter project for Express. You don't own the repo, and you haven't been added as a collaborator.  This is the most common way for individuals and companies to interact with open source projects' code on GitHub.  

1. First, <a href="https://help.github.com/articles/fork-a-repo/" target="_blank">fork</a> the repo. This will create a duplicate remote repo in GitHub under your GitHub account. Then, clone the new repo from your GitHub account to your local computer.
2. Now make a new branch called `more-test-coverage`. Add your tests. How will you get your changes back to the original project from a fork?
3. It's not always necessary, but it's good practice to update your project from the original in case changes occurred in the original repo while you were working. This is the equivalent of pulling from origin/master before pushing, except now there are two different remote repositories on GitHub to manage. Add the original project remote as `upstream` by copying the clone address of the original repo.
  ```
  $ git remote add upstream <PASTE ORIGINAL GITHUB REPO CLONE URL HERE>
  $ git checkout master
  $ git pull upstream master
  ```
4. Merge the changes from local/master into your local/more-test-coverage branch.
  ```
  $ git checkout more-test-coverage
  $ git merge master
  ```
4. When you are satisfied, push the branch to your origin (since you forked, this will be your forked repo, not the original project).
  ```
  $ git push origin more-test-coverage
  ```
5. Navigate your browser to the Github page of your remote. Github will recognize that this project is forked from another and ask if you would like to submit the `more-test-coverage` branch to the original project as a pull request. Say "oh yeah!"
6. Whoever owns the repo for the starter express project will now receive an email saying that you submitted a pull request. They will be able to pull down your pull request branch to examine it and merge it into the project if appropriate. Watch for messages from the repo owner asking questions or suggesting changes to the new code you wrote!

## Code Review

To do review merges that do not have conflicts use Github's "Diff" functionality in the browser.

## Resolving Merge Conflicts Locally

1. Fetch the remote branch: `git fetch <<remote branch name>>`
2. Checkout the new local branch: `git checkout <<branch name>>`
3. Merge master into the local branch: `git merge master`
4. Resolve conflicts.
5. Push the branch to remote: `git push origin <<branch name>>`
6. Now Github will be "happy" and the green button will be there to merge without conflicts.
