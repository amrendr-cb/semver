# Things to remember

* **Don't** use `merge` commit except for cutting releases
* **Don't** `merge` `main` or `rc` branches to PR or local branches
* **Always** `rebase` PR or local branches instead of `merge`
# Cutting a release

## Visual

![image](./GitGraph-semver.png)


* **STEP 1:** first checkout `rc` ensure it is up to date.
* **STEP 2:** then merge `origin/main` to `rc`

```zsh
    git fetch
    git rebase
    git merge origin/main --no-ff
    ... resolve conflicts
    git push
```
You will have merge conflicts, please resolve them. Some guidance for the following files
   
* **STEP 3:** `CHANGELOG.md` -> accept all incoming changes
* **STEP 4:** `package.json` -> accept incoming changes for version entry
* **STEP 5:** Resolve conflict and push changes to the origin

**After resolving merge conflicts, Push changes to the origin and ensure the `rc` branch builds properly, any test passes, and/or any validation.**


### Once the RC branch is validated

* **STEP 6:** checkout `main`, ensure it is up to date.
* **STEP 7:** then merge `origin/rc` to `main`

```zsh
    git fetch
    git rebase
    git merge origin/rc --no-ff
    ... resolve conflicts
    git push
```
* **STEP 8:** You may have merge conflicts. Resolve them and push changes to origin.


## Get the `rc` branch ready for the next development

* **STEP 09:** New version is available on the main branch
* **STEP 10:** checkout `rc`, and ensure it is up to date.
* **STEP 11:** then merge `origin/main` to `rc`

```zsh
    git fetch
    git rebase
    git merge origin/main --no-ff
    ... resolve conflicts
    git commit --allow-empty -m "feat(pre-release): Starting next rc branch" 
    git push
```
You will have merge conflicts, please resolve them. Some guidance for the following files
   
* **STEP 12:** `CHANGELOG.md` -> accept all incoming changes
* **STEP 13:** `package.json` -> accept all incoming changes
* **STEP 14:** Add a empty (dummy) feature commit
* **STEP 15:** push changes to origin
