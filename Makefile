clean-backend:
	@docker-compose rm

install-backend:
	@docker-compose run --rm web ./manage.py migrate

run-backend:
	@docker-compose up

stop-backend:
	@docker-compose down

run-frontend:
	@./node_modules/.bin/webpack-dev-server \
		--no-info \
		--colors \
		--hot \
		--inline

build-frontend:
	@./node_modules/.bin/webpack --progress
