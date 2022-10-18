FROM golang:latest AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download 

COPY *.go ./
RUN apt-get update && apt-get install -f upx -y
RUN GOARCH=386 go build -a -gcflags=all="-l -B -wb=false" -ldflags="-w -s" ./main.go
RUN upx main
FROM busybox:stable-uclibc

WORKDIR /

COPY --from=build /app/main /main

CMD ./main