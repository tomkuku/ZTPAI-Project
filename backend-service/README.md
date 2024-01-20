## How to run service locally

1. Navigate to the backend service directory:
```shell
cd backend-service
```
2. Build the project:
```shell
./gradlew clean build
```
Mention above command doesn't include integration tests.
If you want run build and integration tests in one command use:
```shell
./gradlew clean build testIntegration
```
3. To run application from terminal:
```shell
java -jar -Dspring.profiles.active=local build/libs/backend-*.jar
```

Alternatively you can use IDE tools to run application with the appropriate profile.