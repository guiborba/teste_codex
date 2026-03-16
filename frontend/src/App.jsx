import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { GenericModulePage } from './components/cards/GenericModulePage';

const modules = [
  'alunos',
  'professores',
  'turmas',
  'disciplinas',
  'notas',
  'frequencias',
  'financeiro',
  'agenda',
  'comunicados',
  'mensagens',
];

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      {modules.map((mod) => (
        <Route
          key={mod}
          path={`/${mod}`}
          element={<GenericModulePage title={mod} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
