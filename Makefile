.PHONY: build run

build:
	@./node_modules/.bin/webpack --progress

run:
	@./node_modules/.bin/webpack-dev-server \
		--no-info \
		--colors \
		--hot \
		--inline
