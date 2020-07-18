# Emailly
Welcome to My Project! It's still in construction. I will use Express to be my server provider, MongoDB to persist data, PassportJS to apply Google OAuth strategy, React to my frontend with Redux to apply Flux architecture and other technology like Strike, Email Provider ...

## How to Run this Project in your machine

1) Create keys.js file in /config folder with the next content:
```javascript
   module.exports = {
      googleClientId: 'your-google-clientID',
      googleClientSecret: 'your-client-secret',
      mongoURI: 'mongodb+srv://<username>:<password>@<cluster>/<dbname>',
      cookieKey: 'your Secret Cookie Key'
    }
```