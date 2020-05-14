# Stashing

Save uncommited work. The stash is safe from destructive operations.

- **git stash**: stash changes
- **git stash list**: list changes
- **git stash show stash@{0}**: show the contents
- **git stash apply**: apply the last stash
- **git stash apply stash@{0}**: apply a specific stash
- **git stash --include-untracked**: keep untracked files
- **git stash --all**: keep all files
- **git stash save "message"**: name stashes for easy reference 
- **git stash branch <optional branch name>**: starts a new branch from a stash
- **git checkout <stash name> -- <filename>**: grab a single file from a stash
- **git stash pop**: remove the last stash and apply changes unless theres a merge conflict
- **git stash drop**: remove the last stash
- **git stash drop stash@{n}**: remove the nth stash
- **git stash clear**: removes all stashes