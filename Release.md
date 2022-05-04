# Cutting a release

* first checkout `rc` ensure it is up to date.
* then merge `origin/main` to `rc`

```zsh
    git fetch
    git rebase
    git merge origin/main --no-ff
    ... resolve conflicts
    git push
```
You will have merge conflict, please resolve them. Some guidance for the following files
    
* `CHANGELOG.md` -> accept all incoming changes
* `package.json` -> accept incoming changes for version entry 

**After resolving merge conflicts, Push change to origin and ensure `rc` branch builds properly, test passes, and/or any validation.**


### Once RC branch is validated

* checkout `main`, ensure it is up to date.
* then merge `origin/rc` to `main`

```zsh
    git fetch
    git rebase
    git merge origin/rc --no-ff
    ... resolve conflicts
    git push
```
**You may have merge conflict. Resolve them and push changes to origin.**


## Get `rc` branch ready for next development

* New version is avaialble on main branch
* checkout `rc` ensure it is up to date.
* then merge `origin/main` to `rc`

```zsh
    git fetch
    git rebase
    git merge origin/main --no-ff
    ... resolve conflicts
    ... add a dummy feature commit
    git push
```
You will have merge conflict, please resolve them. Some guidance for the following files
    
* `CHANGELOG.md` -> accept all incoming changes
* `package.json` -> accept all incoming changes 
* Add a dummy feature commit
* push changes to origin
