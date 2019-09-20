# CLI

## Bash

### General

- **pwd**: print working directory
- **ls**: list files and directories
  - **ls -a**: list all files including files and directories that start with a dot. Files starting a dot are hidden.
  - **ls -l**: lists all contents of a directory in long format
    - Access Right / Number of Hard Links / Username / Group Name / Size / Date & Time Modified / Name
  - **ls -t**: order files and directories by the time they were last modified
  - **ls -alt**: combination of -a -l -t
- **touch**: create a new file
- **mkdir**: creates a directory
- **cp**: copies a file into a directory or file content to another file
- **mv**: moves file into a directory or rename file
- **rm**: deletes file or directories
  -**rm -r**: the r stands for recursive, used to delete directory and all of its child directories and files
- **cat:** outputs the contents of a file to the terminal.

### Redirection

- **>**: redirection, takes the standard output of the command on the left, and redirects it to the file on the right. 
- **>>** takes the standard output of the command on the left and appends (adds) it to the file on the right
- **|**: is a “pipe”. The | takes the standard output of the command on the left, and pipes it as standard input to the command on the right.
- **wc**: command outputs the number of lines, words, and characters
- **sort**: takes the standard input and orders it alphabetically for the standard output
- **uniq**: stands for “unique” and filters out adjacent, duplicate lines in a file
- **grep**: stands for “global regular expression print”. It searches files for lines that match a pattern and returns the results.
  - **grep -i**: enables the command to be case insensitive
  - **grep -R**: searches all files in a directory and outputs filenames and lines containing matched results
  - **grep -Rl**: searches all files in a directory and outputs only filenames with matched results
- **sed**: stands for “stream editor”. It accepts standard input and modifies it based on an expression, before displaying it as output data. 
  - sed ' "s" stands for substitution / the search string / the replacement string / ["g" stands for globally without this only substitute first instance]'


### Definitions

- **standard input**: abbreviated as stdin, is information inputted into the terminal through the keyboard or input device
- **standard output**: abbreviated stdout, is the information outputted after a process is run
- **standard error**: abbreviated stderr, is an error message outputted by a failed process
- **redirection**: reroutes standard input, standard output, and standard error.