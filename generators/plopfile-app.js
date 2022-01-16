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
        path: "../app/use{{pascalCase name}}/use{{pascalCase name}}.ts",
        templateFile: "template-app/hook.tsx.hbs"
      },
      {
        type: "add",
        path: "../app/use{{pascalCase name}}/use{{pascalCase name}}.d.ts",
        templateFile: "template-app/types.d.ts.hbs"
      },
      {
        type: "add",
        path: "../app/use{{pascalCase name}}/use{{pascalCase name}}.test.ts",
        templateFile: "template-app/test.tsx.hbs"
      }
    ]
  });
};
