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

## 61-6 Create Private Route or Require Auth and Navigate home

### Navigate User

- With the `useNavigate()` hook

  - After user logged in we force the user route to a specific route
  - For our case it is home primarily, and later we will give the user flexibility

## 61-7 After Login Redirect Navigate to the right route

### useLocation

- This hook returns the current **`location`** object
- When user trying to routing any route but not logged in then we catch the user's preferred route by using `useLocation` hook and set the user's route on the `state` of `useLocation` hook. It helps us to routing the user after fulfilling the conditions
  - `state` must be dynamic
  - **`replace:`** prevent adding a new URL entry into the history stack

## 61-8 Host your react app to firebase and Show password

### Hosting

- Firebase hosting one time for one computer
  - Globally install firebase
  - Firebase login
- Steps :
  - > firebase init = Initiating for every project
  - > Are you ready to proceed? Y/n
  - > **Select :** Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
  - > select existing project
  - > select production file
  - > Configure as a single-page app (rewrite all urls to /index.html)? Yes
  - > Set up automatic builds and deploys with GitHub? No
- For Deployment
  - > npm run build
  - > firebase deploy

### Live Url

[ema-john-demo](https://ema-jhon-recap-auth.web.app/)
