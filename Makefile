.PHONY: db app start test watch build install

db:
	docker-compose up -d db

app: db
	docker-compose up app

start: db build

test: db
	./npm.sh run test

watch:
	./npm.sh run watch

build:
	./npm.sh run build

install:
	./npm.sh install
