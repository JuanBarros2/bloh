module.exports = (plop) => {
  plop.setGenerator("hook", {
    description: "Criar um novo hook de aplicação",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual é o nome do hook (sem o prefixo 'use')?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/application/use{{pascalCase name}}/use{{pascalCase name}}.ts",
        templateFile: "template-application/hook.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/application/use{{pascalCase name}}/use{{pascalCase name}}.d.ts",
        templateFile: "template-application/types.d.ts.hbs"
      },
      {
        type: "add",
        path: "../src/application/use{{pascalCase name}}/use{{pascalCase name}}.test.ts",
        templateFile: "template-application/test.tsx.hbs"
      }
    ]
  });
};
