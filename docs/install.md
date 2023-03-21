#### Installation guide

# Check versions

```bash
# Node
node -v
# npm
npm -v
# git
git --version
# Angular CLI
ng v
```

- Ignore ssl warnings `npm config set strict-ssl false`

- [Download and install Abanca tools](http://core.morphe.abanca.io/fundamentos/herramientas/herramientas-angular/)

## Clone demo project

```bash
git clone minsait-ng_dev-23_03
cd minsait-ng_dev-23_03
npm install
npm start
```

- [Compatibility versions table](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3)

- [Angular CLI versions](https://www.npmjs.com/package/@angular/cli?activeTab=versions)

## Create practice project

Add version specific version to `@angular/cli` if needed

```bash
# Option 1: global install
npm install -g @angular/cli
ng new your-project-name
cd your-project-name
ng serve
# Option 2: remote execution
npx @angular/cli new your-project-name
cd your-project-name
npx @angular/cli serve
```
