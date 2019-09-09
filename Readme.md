## Application available [here](http://34.245.192.86/)

## For local deployment in docker:
* Add .env file in root folder with next variables: 
    * SQLUSER - user name
    * SQLPASS - user password
    * SQLDB - database name (airports)
* Add .env file in client folder with VUE_APP_API_BASE=http://localhost:3000/api
* run docker-compose up - will run all parts of application, but you still need to perform data migration
* run scripts from db/migrate.sql inside db container

by default, API will be accessible on http://localhost:3000/api, UI - http://localhost:80 

API requires SQLUSER, SQLPASS, SQLDB, SQLHOST to be set for proper work

## For production:
API:
* Implements metrics and health check
* Add API documentation
* Add e2e testing 

FE:
* Add error handling
* Design should be improved :)
* Increase number of tests