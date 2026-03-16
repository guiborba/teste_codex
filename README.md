# Sistema Completo de Gestão e Comunicação Escolar

Projeto full-stack (Web + Mobile + API) para gestão acadêmica, financeira e comunicação escola-família.

## Stack
- **Backend:** Node.js + NestJS + Prisma + MySQL (XAMPP)
- **Frontend Web:** React + Vite
- **Mobile:** React Native (Expo)
- **Auth:** JWT + bcrypt + refresh token
- **Notificações:** Expo Notifications + Firebase Cloud Messaging (Firebase Admin no backend)
- **Uploads locais:** `backend/src/uploads/{boletos,documentos,tarefas}`

## Entregas desta fase
1. Repositories dedicados com CRUD completo para módulos: alunos, turmas, disciplinas, notas, frequências, tarefas, mensalidades, comunicados, mensagens, ocorrências e agenda.
2. Testes unitários e e2e iniciais no backend (`auth.service.spec.ts` e `app.e2e-spec.ts`).
3. Login/refresh conectados ao backend em frontend e mobile.
4. Upload de arquivos implementado para:
   - boletos (`POST /mensalidades/:id/boleto`)
   - documentos (`POST /ocorrencias/:id/documento`)
   - tarefas (`POST /tarefas/:id/anexo`)
5. Integração FCM em produção com:
   - registro de token de device (`POST /notifications/register-device`)
   - envio (`POST /notifications/send`)

## Como rodar (resumo)

### 1) MySQL no XAMPP
1. Inicie Apache e MySQL no XAMPP.
2. Crie o banco `escola`.
3. Copie `backend/.env.example` para `backend/.env` e configure JWT + credenciais Firebase.

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
