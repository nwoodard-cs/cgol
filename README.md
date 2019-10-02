# CGOL
Conway's Game of Life Implementation

## Building the Docker Container
Build the container
```
docker build ./ -t cgol
```
Run the container. Bind container port 8080 to host port 8081.
```
docker run -p 8081:8080 cgol
```
