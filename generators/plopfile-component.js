module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Criar um novo componente",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual é o nome do novo componente?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "template-component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/styles.ts",
        templateFile: "template-component/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "template-component/test.tsx.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/{{pascalCase name}}.d.ts",
        templateFile: "template-component/types.d.ts.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/i18n{{pascalCase name}}.ts",
        templateFile: "template-component/i18n.ts.hbs",
      },
      {
        type: "add",
        path: "../components/{{pascalCase name}}/__mocks__/{{pascalCase name}}.tsx",
        templateFile: "template-component/mock.tsx.hbs",
      },
      {
        type: "modify",
        path: "../libs/i18next/locales/pt.ts",
        pattern: /\n(export)/,
        template:
          'import { pt as i18n{{pascalCase name}} } from "components/{{pascalCase name}}/i18n{{pascalCase name}}";\n\nexport',
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
        pattern: /\n(export)/,
        template:
          'import { en as i18n{{pascalCase name}} } from "components/{{pascalCase name}}/i18n{{pascalCase name}}";\n\nexport',
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
