API de Restaurantes
Criar, ler os Restaurantes, ler um restaurante específico, atualizar, excluir
Buscar um restaurante pelo nome
Filtrar os restaurantes por categoria

Entidade:
Restaurante
id - númerico
name - texto
category - texto
createdAt - data
updatedAt - data

Rotas:
/restaurants
POST / (body: name, category)
GET / (query: search, category)
GET /:id
PATCH /:id (body: name?, category?)
DELETE /:id

Express / Typescript
