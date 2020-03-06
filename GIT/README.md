# Git

Git is the industry-standard version control system for web developers.

## Notes

### Git Workflow

![Git Workflow](https://github.com/karyma101/handbook/blob/master/GIT/img/workflow.png "Git Workflow")

  - A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files.
  - A Staging Area: where you’ll list changes you make to the working directory.
  - A Repository: where Git permanently stores those changes as different versions of the project.

### Git Reset

![Git Reset](https://github.com/karyma101/handbook/blob/master/GIT/img/reset.png "Git Reset")

- A **remote** is a shared Git repository that allows multiple collaborators to work on the same Git project from different locations.

## Git Areas

#### Working Area

The files in your working area that are also not in the staging area are not handled by git. Also called untracked files.

#### Staging Area

What files are going to be part of the next commit. The staging area is how git knows what will change in between the current commit and the next commit.

**Unstaging a file**
```bash
git reset HEAD <file>
```

#### The Repository

The file git knows about. Contains all of your commits.
