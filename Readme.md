# Projeto desenvolvido para o teste técnico da empresa PowerKr

---
- O projeto foi desenvolvido na versão 50 do expo, a mais atual no momento da criação do projeto
- O gerenciador de pacotes usado no projeto foi o yarn

Para executar o projeto faça o clone do repositorio em sua maquina local com o comando 
```shell
git clone git@github.com:DiegoRamosGomes/powerkr.git
```

após o clone entre na pasta powerkr criada e instale as dependencias com o comando 
```shell
yarn install
```

agora basta executar o projeto localmente pelo expo
```shell
npx expo start
```

Observações técnicas:
- para fazer o mock das requisições escolhi usar arquivos .json localizados dentro da pasta `/src/mocks`, 
cada requisição tem seu arquivo .json e .ts referente a ela, o arquivo json possui os dados hard coded e o 
arquivo .ts possui uma função que simula a requisição dando um tempo entre 200 e 250ms de espera, para mostrar
o loading dos componentes