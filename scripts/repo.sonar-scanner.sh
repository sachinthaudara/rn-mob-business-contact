echo "\n\033[1;34m BusinessContacts application test executing...\033[0m\n"
npx npm test -u --coverage
echo "\n\033[1;32m Successfully executed BusinessContacts application test cases. :)\033[0m\n"

echo "\n\033[1;34m BusinessContacts sonnar code scanning ...\033[0m\n"

source ./scripts/read-env.sh
SONAR_ENV_FILE='.sonarqube.env'

sonar-scanner \
  -Dsonar.projectKey=business-contacts \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dproject.settings=repo-sonar.properties \
  -Dsonar.login=$(get_env SONAR_AUTH_KEY $SONAR_ENV_FILE)

echo "\n\033[1;32m Successfully executed BusinessContacts sonnar code scan. :)\033[0m\n"