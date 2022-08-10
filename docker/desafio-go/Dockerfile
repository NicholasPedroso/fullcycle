FROM golang AS builder

WORKDIR /usr/src/app

RUN go mod init example/hello && go mod tidy && go mod download && go mod verify

COPY . .
RUN go build -o /usr/local/bin/app

FROM scratch

COPY --from=builder /usr/local/bin/app .

ENTRYPOINT [ "./app" ]