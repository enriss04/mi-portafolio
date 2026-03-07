up: ## Construye y levanta los contenedores sin usar caché
	docker compose build --no-cache
	docker compose up -d

prune_images: ## Elimina imágenes huérfanas/sin uso para liberar espacio
	docker image prune -f

deploy: up prune_images ## Ejecuta el flujo completo de despliegue: build + up + limpieza

down: ## Detiene y elimina los contenedores
	docker compose down

restart: ## Reinicia los servicios
	docker compose restart

logs: ## Visualiza los logs en tiempo real
	docker compose logs -f