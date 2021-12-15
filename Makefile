build:
	docker-compose -p sams-stickers -f docker-compose.yml up -d

down:
	docker-compose -p sams-stickers -f docker-compose.yml down
	
start:
	docker-compose -p sams-stickers -f docker-compose.yml start

stop: 
	docker-compose -p sams-stickers -f docker-compose.yml stop

client-install:
	docker-compose -p sams-stickers -f docker-compose.yml exec client yarn install

client-dev:
	docker-compose -p sams-stickers -f docker-compose.yml exec client yarn dev

strapi-install:
	docker-compose -p sams-stickers -f docker-compose.yml exec api yarn install

strapi-develop:
	docker-compose -p sams-stickers -f docker-compose.yml exec api yarn run develop

strapi-build:
	docker-compose -p sams-stickers -f docker-compose.yml exec api strapi build

strapi-start:
	docker-compose -p sams-stickers -f docker-compose.yml exec api strapi start