# NTRLLYSHRT - A URL Shortener Microservice

A full-stack JavaScript application as part of the [Free Code Camp](https://freecodecamp.com "Free Code Camp") curriculum. API Basejump #3 - URL Shortener Microservice.

Check out the working app here: [https://timolawl-url-shortener.herokuapp.com/api/whoami](https://timolawl-url-shortener.herokuapp.com/api/whoami "URL Shortener Microservice").

#### User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

##### Example creation usage:
* [https://timolawl-url-shortener.herokuapp.com/new/https://www.google.com](https://timolawl-url-shortener.herokuapp.com/new/https://www.google.com)

##### Example creation output:
* { "original_url": "https://www.google.com", "short_url": "https://timolawl-url-shortener.herokuapp.com/0868", "createdAt": "2016-04-07T08:59:07.495Z" }

##### Example outcome:
* https://timolawl-url-shortener.herokuapp.com/0868 will redirect to https://www.google.com
