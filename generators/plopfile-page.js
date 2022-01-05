module.exports = (plop) => {
  plop.setGenerator("page", {
    description: "Cria uma nova página",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual é o nome da nova página?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "template-page/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/styles.ts",
        templateFile: "template-page/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "template-page/test.tsx.hbs",
      },
      {
        type: "add",
        path: "../pages/{{pascalCase name}}/__mocks__/{{pascalCase name}}.tsx",
        templateFile: "template-page/mock.tsx.hbs",
      },
      {
        type: "modify",
        path: "../libs/i18next/locales/pt.ts",
        pattern: /(";\n\n)/,
        template:
          '";\nimport { pt as i18n{{pascalCase name}} } from "pages/{{pascalCase name}}/i18n{{pascalCase name}}";\n\n',
      },
      {
        type: "modify",
        path: "../libs/i18next/locales/pt.ts",
        pattern: /(translation: {)/g,
        template: "$1\n    ...i18n{{pascalCase name}},",
      },
      {
        type: "modify",
        path: "../libs/i18next/locales/en.ts",
        pattern: /(";\n\n)/,
        template:
          '";\nimport { en as i18n{{pascalCase name}} } from "pages/{{pascalCase name}}/i18n{{pascalCase name}}";\n\n',
      },
      {
        type: "modify",
        path: "../libs/i18next/locales/en.ts",
        pattern: /(translation: {)/g,
        template: "$1\n    ...i18n{{pascalCase name}},",
      },
    ],
  });
};
