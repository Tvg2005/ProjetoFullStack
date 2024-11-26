# Usando uma imagem base do Node.js
FROM node:14

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de dependências
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando os arquivos da aplicação
COPY . .

# Build da aplicação
RUN npm run build

# Usando uma imagem Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiando os arquivos build para o diretório padrão do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
