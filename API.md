# CCC-Server APIv1.0.0

__Release Date:__ 2016-03-25
## Ranking
### GET /ranking
#### Requests [x-www-form-urlencoded]
NONE
#### Response [application/json]

##### 200 - OK
```
[{
  "id" : 5,
  "name" : "Moai",
  "point" : 31,
  "update_time" : "2016-12-31T00:00:00.000Z"
}, {
  "id" : 2,
  "name" : "Howie",
  "point" : 29,
  "update_time" : "2016-12-30T00:00:00.000Z"
}, {
  "id" : 9,
  "name" : "Jerry",
  "point" : 29,
  "update_time" : "2016-12-31T00:00:00.000Z"
}]
```

### POST /ranking
#### Requests [x-www-form-urlencoded]

* [String] name (Required)
* [Number] point (Required)

#### Response [application/json]

##### 204 - No Content
NO CONTENT
