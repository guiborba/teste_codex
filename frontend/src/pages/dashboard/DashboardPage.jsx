import { useMemo, useState } from 'react';
import { useAuth } from '../../context/authContext';

const dashboardByRole = {
  ADMINISTRADOR: ['Usuários ativos', 'Financeiro consolidado', 'Indicadores pedagógicos'],
  DIRETOR: ['Desempenho por turma', 'Ocorrências críticas', 'Resumo financeiro'],
  COORDENADOR: ['Rendimento por disciplina', 'Frequência média', 'Plano de ação'],
  PROFESSOR: ['Minhas turmas', 'Pendências de notas', 'Tarefas para corrigir'],
  RESPONSAVEL: ['Boletim do aluno', 'Agenda semanal', 'Mensalidades'],
  ALUNO: ['Minhas notas', 'Frequência', 'Comunicados da turma'],
};

export function DashboardPage() {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cards = useMemo(() => (user ? dashboardByRole[user.role] ?? [] : []), [user]);

  if (!user) {
    return (
      <main>
        <h1>Login</h1>
        <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => login(email, password)}>Entrar</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Dashboard {user.role}</h1>
      <button onClick={logout}>Sair</button>
      <ul>
        {cards.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
