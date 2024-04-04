A quick way to test using PropelAuth for [ohack.dev](https://ohack.dev) using the [quickstart](https://docs.propelauth.com/getting-started/quickstart-fe) guides for React and Flask.

Each frontend/backend folder needs a .env file

## Frontend
1. `npm i`
2. `npm start`
3. `.env` file
```
REACT_APP_PROPELAUTH_AUTH_URL=<URL> 
```


## Backend
1. `pip install -r requirements`
2. flask run --port=3001
3. `.env` file
```
PROPELAUTH_API_KEY=<KEY>
PROPELAUTH_AUTH_URL=<URL>
```
   
