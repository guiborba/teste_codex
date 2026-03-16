import { useMemo } from 'react';
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
  const { user } = useAuth();
  const cards = useMemo(() => dashboardByRole[user.role] ?? [], [user.role]);

  return (
    <main>
      <h1>Dashboard {user.role}</h1>
      <ul>
        {cards.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
