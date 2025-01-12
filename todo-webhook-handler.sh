#!/bin/bash

echo "Pulling the latest Docker image..."
docker pull hknhj/todoapp:latest

echo "Stopping and removing the old container..."
docker stop todoapp || true

echo "Starting a new container..."
docker run -d --rm --name todoapp --env-file /home/ubuntu/TodoAPP/.env -p 3000:3000 hknhj/todoapp:latest

echo "Deployment complete."
