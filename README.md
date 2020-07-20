### Basic Type ORM 

To install dependencies:
```
yarn install
```

Sample `.env` file will look like;
```
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = 0.0.0.0
TYPEORM_USERNAME = xxxx
TYPEORM_PASSWORD = xxxx
TYPEORM_DATABASE = typeorm
TYPEORM_PORT = 3306
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = dist/entity/**/*.js
```

To run the project (runs in port `5000`):
```
yarn start
```

This project contains basic `CRUD` operation using `TypeORM` and `Express` with typescript configuration. 

API:
- `GET photo` get all photos
- `GET photo/:id` get one photo
- `POST photo/` insert into photo
- `DELETE photo/:id` delete from photo
- `PUT photo/:id` update photo
