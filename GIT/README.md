# Git

- Git is the industry-standard version control system for web developers.

## Commands

- **--**: can be used in place of the HEAD.
- **git init**: initalizes git repository, sets up all tools Git needs to begin tracking changes made to the project.
- **git status**: detects change from repository.
- **git add**: adds file to staging area.
  - git add filename1 filename2
  - git add .
- **git diff**: check the differences between the working directory and the staging area.
- **git commit**: permanently stores changes from the staging area inside the repository.
  -**-m**: message option, standard conventions for commit messages are that it must be written in present tense and should be brief (50 characters or less).
- **git log**: Commits are stored chronologically in the repository and can be viewed with git log.
  - A 40-character code, called a SHA, that uniquely identifies the commit. This appears in orange text.
  - The commit author.
  - The date and time of the commit.
  - The commit message.
- **git show HEAD**: the commit you are currently on.
- **git checkout HEAD filename**: will restore the file in your working directory to look exactly as it did when you last made a commit.
- **git reset HEAD filename**: resets the file in the staging area to be the same as the HEAD commit.
- **git reset commit_SHA**: uses the first 7 characters of the SHA of a previous commit, to set HEAD to that previous commit.
- **git branch**: shows which branch the master is on.
  - **git branch branch_name**: creates a new branch, branch names can’t contain whitespaces.
  - **git checkout branch_name**: switches to a different branch.
  - **git merge branch_name**: merges branch into master branch.
  - **git branch -d branch_name**: will delete the specified branch from your Git project.
- **git clone remote_location clone_name**: remote_location tells Git where to go to find the remote. This could be a web address, or a filepath. clone_name is the name you give to the directory in which Git will clone the repository.
- **git remote -v**: see a list of a Git project’s remotes.
- **git fetch**: see if changes have been made to the remote and bring the changes down to your local copy. This command will not merge changes from the remote into your local repository. It brings those changes onto what’s called a remote branch.
- **git merge origin/master**: integrates origin/master into your local master branch.
- **git push origin your_branch_name**: pushes a local branch to the origin remote
- **git remote**: finds remote name
  - **git remote show origin**: shows origin information
  - **git remote rm origin**: removes remote to origin
  - **git remote add origin path_to_new_remote**: adds new remote / used for repository name change

## Notes

![Git Workflow](https://github.com/karyma101/handbook/blob/master/GIT/workflow.png "Git Workflow")

- **Git Workflow**
  - A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files.
  - A Staging Area: where you’ll list changes you make to the working directory.
  - A Repository: where Git permanently stores those changes as different versions of the project.

![Git Reset](https://github.com/karyma101/handbook/blob/master/GIT/reset.png "Git Reset")

- **Git Reset**

![Git Workflow](https://github.com/karyma101/handbook/blob/master/GIT/branching.png "Git Workflow")

- **Git Branching**
 - Git branching allows users to experiment with different versions of a project by checking out separate branches to work on.

- A **remote** is a shared Git repository that allows multiple collaborators to work on the same Git project from different locations.