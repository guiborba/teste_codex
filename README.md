# Sistema Completo de Gestão e Comunicação Escolar

Projeto full-stack (Web + Mobile + API) para gestão acadêmica, financeira e comunicação escola-família.

## Stack
- **Backend:** Node.js + NestJS + Prisma + MySQL (XAMPP)
- **Frontend Web:** React + Vite
- **Mobile:** React Native (Expo)
- **Auth:** JWT + bcrypt
- **Notificações:** Expo Notifications + Firebase Cloud Messaging
- **Uploads locais:** `backend/src/uploads`

## Estrutura de pastas

```txt
backend/src
  modules/
    auth users alunos turmas disciplinas notas frequencias tarefas
    mensalidades comunicados mensagens ocorrencias agenda
  common/
    decorators guards filters dto
  database/prisma/schema.prisma
  uploads/
    boletos documentos tarefas

frontend/src
  pages/
    dashboard alunos professores turmas disciplinas notas frequencias
    financeiro agenda comunicados mensagens
  components/
    cards tables forms charts
  context/
    authContext userContext
  services/
    api authService alunoService turmaService notaService frequenciaService financeiroService

mobile/src
  screens
  services
  context
```

## RBAC (perfis)
- ADMINISTRADOR
- DIRETOR
- COORDENADOR
- PROFESSOR
- RESPONSAVEL
- ALUNO

A autorização por perfil está centralizada por decorator `@Roles()` + `RolesGuard` no backend.

## Módulos implementados no backend
- Autenticação (`/auth/login`)
- Usuários (`/users` com criação e listagem protegida)
- Alunos, turmas, disciplinas, notas, frequências, tarefas, mensalidades, comunicados, mensagens, ocorrências e agenda (scaffold inicial com endpoint `/overview` para extensão)

## Banco de dados
O arquivo `backend/src/database/prisma/schema.prisma` contém os modelos principais:
- Usuários e perfis
- Acadêmico (alunos, turmas, disciplinas, notas, frequência, tarefas)
- Financeiro (mensalidades + boletos)
- Comunicação (comunicados e mensagens)
- Agenda e ocorrências

## Como rodar (resumo)

### 1) MySQL no XAMPP
1. Inicie Apache e MySQL no XAMPP.
2. Crie o banco `escola`.
3. Copie `backend/.env.example` para `backend/.env`.

### 2) Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```

### 3) Frontend web
```bash
cd frontend
npm install
npm run dev
```

### 4) Mobile (Expo)
```bash
cd mobile
npm install
npm run start
```

## Próximos passos recomendados
1. Implementar repositories dedicados por módulo (CRUD completo).
2. Adicionar testes unitários/e2e no backend.
3. Conectar frontend e mobile ao backend real com login e refresh de token.
4. Implementar upload de arquivos em `/uploads/boletos`, `/uploads/documentos`, `/uploads/tarefas`.
5. Integrar Firebase Cloud Messaging para push em produção.
