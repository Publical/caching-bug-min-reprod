Minimum reproduction for [this NestJS issue](https://github.com/nestjs/nest/issues/6870)


## Setup

1) npm install

## Reproduction

1) npm run start:dev
2) perform GET request on localhost:3000/
3) see that it takes 200+x ms
4) perform the request again
5) see that the request takes much less than 200ms
6) --> Caching is enabled even though ```@CacheTTL(0)``` is set
