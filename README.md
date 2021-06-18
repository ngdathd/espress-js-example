# express-js-example

Example expressJS

1. Init project (use Yarn)
   yarn init

2. Add Prettier Plugin to format code
   yarn add --dev eslint-config-prettier eslint-plugin-prettier prettier

3. Init ExpressJs
   yarn add express

4. Init Eslint Airbnb
   yarn add --dev eslint eslint-config-airbnb-base eslint-plugin-import

5. 5.1. Babel import
   yarn add --dev @babel/cli @babel/core @babel/node @babel/plugin-transform-modules-commonjs @babel/preset-env babel-plugin-module-resolver nodemon
   5.2. Permission
   chmod +x scripts/dev.sh

6. Add dotenv-safe to hide code
   yarn add dotenv-safe

7. Sort import
   yarn add --dev eslint-plugin-simple-import-sort

8. Add mongodb, postgres, sequelize
   yarn add mongoose pg pg-hstore sequelize

9. How to run
   9.1. Install dependencies:
   yarn
   9.2. Set environment variables:
   cp .env.example .env
   9.3. Running Locally:
   yarn dev
