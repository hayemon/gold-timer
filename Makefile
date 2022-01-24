.PHONY: start
start:
	docker build -f Dockerfile.development -t app-dev .
	docker run -it -p 3000:3000 --rm -v ${PWD}:/app -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name app-dev app-dev

.PHONY: build
build:
	docker build -f Dockerfile.production -t app-prod .
	docker run -p 3001:80 --rm --name app-prod app-prod