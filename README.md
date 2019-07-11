# Mars
React Native Front-end

### How to run:

run on android:
`$react-native run-android`

run on ios:
`$react-native run-ios`


**if theres a problem**

run this beforehand:
`$react-native run`

#### BEFORE WORKING

1. Run `git checkout master` to go on master
2. Run `git pull` to pull latest changes
3. Run `git checkout -b <your branch name>` to create a branch to work on
4. Create a pull request after you added code (see below)


### Common git commands | QUESTIONS? ASK DAVID
<hr>


#### Creating a Pull Request

1. (can be ignored if you have a branch) Run `git checkout -b <your branch name>` to create a branch 
2. Code, work, do stuff
3. Run `git add .`
4. Run `git commit -m "<your commit message>"`
5. Run `git push` (you'll be prompt to update your upstream for the first push)
6. Navigate to Mars on Github, you'll be prompt to `open a pull request`
7. Fill out the `pull request` template
8. Submit it and ask for review

#### To find your current branch
1. Run `git branch`

#### Test someone's pull request

1. Find out the pull request's branch name
2. Run `git branch -a` (-a mean "all")
3. Run or `git checkout --track <the branch name and its path>` or `git checkout <the branch name and its path>`
4. Follow the test plan
5. Review the pull request

#### Pushing your work via git

1. Run `git add .`
2. Run `git commit -m "<your commit message>"`
3. Run `git push` (you'll be prompt to update your upstream for the first push)

#### Merging master to your branch

Alert: There is a possibility that you'll have to rebase. Message David if you have any confusion. He'll explain everything in-person

1. Commit your changes first
2. Run `git checkout master`
3. Run `git pull` to pull latest changes
4. Run `git checkout <your branch>`
5. Run `git merge master` 
