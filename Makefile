SHELL := /bin/bash

.PHONY: help
help: ## help message, list all command
	@echo -e "$$(grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' -e 's/^\(.\+\):\(.*\)/\\x1b[36m\1\\x1b[m:\2/' | column -c2 -t -s :)"

.PHONY: install 
install: ## install all dependencies
	npm install

.PHONY: dev 
dev: ## run dev webserver on localhost
	npm run develop

.PHONY: clean 
clean: ## clean dev environment
	npm clean

.PHONY: build 
build: ## build project locally
	npm build