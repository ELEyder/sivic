import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from 'recharts';
import useDashboard from '../../hooks/useDashboard';

export default function CasosRegistrados() {
  const { data } = useDashboard();
  const ultimos6Meses = data.grafico_mensual;

  // Verificamos si ultimos6Meses tiene datos
  if (ultimos6Meses.length === 0) {
    return (
      <div>
        <h2>Casos registrados</h2>
        <p>No hay datos disponibles para mostrar.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Casos registrados</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={ultimos6Meses}>
          <XAxis dataKey="mes" />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="casos" fill="#FBBF24" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p>El gráfico muestra la frecuencia de casos de denuncia registrados.</p>
    </div>
  );
}
