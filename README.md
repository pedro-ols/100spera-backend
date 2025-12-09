# 🍔⏳100Spera - Gestão de Comandas para Restaurantes⏳🍔
## 📖 API 100spera - Documentação Sprint

## 🎯 Informações Gerais
**Base URL:** `http://localhost:4000/100spera`  
**Tecnologias:** Node.js, Express, Prisma, PostgreSQL, JWT

---

## 📊 Banco de Dados

### Tabelas
- **User** - Usuários (garçons, cozinheiros)
- **Category** - Categorias de pratos
- **Dish** - Pratos do cardápio
- **Table** - Mesas do restaurante
- **Order** - Pedidos
- **OrderItem** - Itens dos pedidos

### Relacionamentos
- Category → Dish (1:N)
- User → Order (1:N)
- Table → Order (1:N)
- Order → OrderItem (1:N)
- Dish → OrderItem (1:N)

---

## 🌐 Endpoints

### 👤 Usuários `/users`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/users` | Lista todos usuários | - |
| GET | `/users/:id` | Busca usuário por ID | - |
| POST | `/users/register` | Registra usuário | `name`, `type`, `accessCode` |
| POST | `/users/login` | Login | `accessCode` |
| PUT | `/users/:id` | Atualiza usuário | `name`, `type`, `accessCode` |
| DELETE | `/users/:id` | Remove usuário | - |

**Login retorna:** `token` (JWT), `userExists` (dados do usuário)

---

### 📂 Categorias `/categories`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/categories` | Lista todas categorias | - |
| GET | `/categories/:id` | Busca categoria por ID | - |
| POST | `/categories` | Cria categoria | `name` |
| PUT | `/categories/:id` | Atualiza categoria | `name` |
| DELETE | `/categories/:id` | Remove categoria | - |

---

### 🍽️ Pratos `/dishes`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/dishes` | Lista todos pratos | - |
| GET | `/dishes/:id` | Busca prato por ID | - |
| POST | `/dishes` | Cria prato | `name`, `price`, `categoryId`, `description?` |
| PUT | `/dishes/:id` | Atualiza prato | `name`, `price`, `categoryId`, `description?` |
| DELETE | `/dishes/:id` | Remove prato | - |

---

### 🪑 Mesas `/tables`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/tables` | Lista todas mesas | - |
| GET | `/tables/:number` | Busca mesa por número | - |
| POST | `/tables` | Cria mesa | `number`, `status?` |
| PUT | `/tables/:number` | Atualiza mesa | `status` |
| DELETE | `/tables/:number` | Remove mesa | - |

**Status válidos:** `disponível`, `ocupada`, `reservada`

---

### 📋 Pedidos `/orders`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/orders` | Lista todos pedidos | - |
| GET | `/orders/:id` | Busca pedido por ID | - |
| POST | `/orders` | Cria pedido | `tableNumber`, `userId`, `status?` |
| PUT | `/orders/:id` | Atualiza pedido | `tableNumber`, `userId`, `status?` |
| DELETE | `/orders/:id` | Remove pedido | - |

**Status válidos:** `pendente`, `em preparo`, `pronto`, `entregue`, `pago`, `cancelado`

---

### 🍴 Itens de Pedido `/order-items`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| GET | `/order-items` | Lista todos itens | - |
| GET | `/order-items/:id` | Busca item por ID | - |
| POST | `/order-items` | Cria item | `orderId`, `dishId`, `quantity`, `observations?` |
| PUT | `/order-items/:id` | Atualiza item | `orderId`, `dishId`, `quantity`, `observations?` |
| DELETE | `/order-items/:id` | Remove item | - |

---

## 🔐 Autenticação

**Login:** `POST /users/login` com `accessCode`  
**Retorna:** Token JWT válido por 24h  
**Uso:** Header `Authorization: Bearer {token}`

---

## 📝 Códigos HTTP

| Código | Descrição |
|--------|-----------|
| 200 | OK |
| 201 | Criado |
| 400 | Dados inválidos |
| 401 | Não autorizado |
| 404 | Não encontrado |
| 500 | Erro servidor |

---

## ⚠️ Regras de Cascade

- Deletar **Category** → deleta **Dishes**
- Deletar **Dish** → deleta **OrderItems**
- Deletar **Order** → deleta **OrderItems**
- Deletar **Table** → deleta **Orders**
- Deletar **User** → deleta **Orders**
