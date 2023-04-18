# Module-61-Private-Route-Recap-with-Ema-Jhon

## 61-1 Module Introduction firebase setup and git clone

### Git Clone Problem

- `fatal: remote origin already exists` is a common Git error that occurs when we clone a repository from GitHub, or an external remote repository, into our local machine and then try to update the pointing `origin` URL to our own repository
  - to solve it there are several way
    - `git remote remove origin` will remove the existing origin
    - Now you can run `git remote add origin [url].git` without encountering the `fatal: remote origin already exists` error
    - `set-url` command, followed by the handler name (which is origin in our case) and the new URL
    - the command is : `git remote set-url origin [new-url]`

## 61-2 Create Login component and style Login form

- Create login and sign up page using tailwind and daisy ui

## 61-3 Setup Auth Context under UserContext to share auth info

## 61-4 Implement create user and Sign in user and Sign Out

## 61-5 Understand onAuthState Changed observer

### Monitor user

- Observer help us to monitor currently signed in user
