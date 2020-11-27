# Emailly
Welcome to My Project! It's still in construction. I will use Express to be my server provider, MongoDB to persist data, PassportJS to apply Google OAuth strategy, React to my frontend with Redux to apply Flux architecture and other technology like Payment API, Email Provider ...

To view the project in production [clicke here](https://aqueous-shore-60006.herokuapp.com/), however it may be out of date at this point, I am still developing on my computer.

## How to Run this Project in your machine
1) Clone this repository
```bash
   git clone git@github.com:OliveiraCleidson/emailly.git
   or
   git clone https://github.com/OliveiraCleidson/emailly
```

2) Create dev.js file in /config folder with the next content:
```javascript
   module.exports = {
      googleClientId: 'your-google-clientID',
      googleClientSecret: 'your-client-secret',
      mongoURI: 'mongodb+srv://<username>:<password>@<cluster>/<dbname>',
      cookieKey: 'your Secret Cookie Key',
      stripePublishableKey: 'your-stripe-pk',
      stripeSecretKey: 'your-stripe-secret-key',
      sendGridApiKey: 'your-send-grid-api-key'
    }
```
Get Google Credentials: [click here](https://console.developers.google.com/projectselector2/apis/credentials)

Get Stripe Credentials: [click here](https://stripe.com/br)

Get Send Grid Credentials: [click here](https://app.sendgrid.com/guide/integrate/langs/nodejs)

This is to run in dev enviroment 
