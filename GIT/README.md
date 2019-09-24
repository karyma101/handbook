# Git

- Git is the industry-standard version control system for web developers

## Commands

- **--**: can be used in place of the HEAD
- **git init**: initalizes git repository, sets up all tools Git needs to begin tracking changes made to the project
- **git status**: detects change from repository
- **git add**: adds file to staging area
  - git add filename1 filename2
  - git add .
- **git diff**: check the differences between the working directory and the staging area
- **git commit**: permanently stores changes from the staging area inside the repository
  -**-m**: message option, standard conventions for commit messages are that it must be written in present tense and should be brief (50 characters or less)
- **git log**: Commits are stored chronologically in the repository and can be viewed with git log
  - A 40-character code, called a SHA, that uniquely identifies the commit. This appears in orange text.
  - The commit author
  - The date and time of the commit
  - The commit message
- **git show HEAD**: the commit you are currently on
- **git checkout HEAD filename**: will restore the file in your working directory to look exactly as it did when you last made a commit
- **git reset HEAD filename**: resets the file in the staging area to be the same as the HEAD commit
- **git reset commit_SHA**: uses the first 7 characters of the SHA of a previous commit, to set HEAD to that previous commit
- **git branch**: shows which branch the master is on

## Notes

![Git Workflow](https://github.com/karyma101/handbook/blob/master/GIT/workflow.png "Git Workflow")

- **Git Workflow**
  - A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files
  - A Staging Area: where you’ll list changes you make to the working directory
  - A Repository: where Git permanently stores those changes as different versions of the project

![Git Reset](https://github.com/karyma101/handbook/blob/master/GIT/reset.png "Git Reset")

- **Git Reset**

![Git Workflow](https://github.com/karyma101/handbook/blob/master/GIT/branching.png "Git Workflow")

- **Git Branching**