prepare:
	cp .env .env.example
	yarn install

start:
	docker-compose -f provision/docker-compose.yml rm -v -f
	docker-compose -f provision/docker-compose.yml build
	docker-compose -f provision/docker-compose.yml up

build:
	docker-compose -f provision/docker-compose.yml build

down:
	docker-compose -f provision/docker-compose.yml rm -v -f

up:
	docker-compose -f provision/docker-compose.yml up
	
dev:
	yarn dev
