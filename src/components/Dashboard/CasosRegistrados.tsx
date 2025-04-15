import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from 'recharts';
import useDashboard from '../../hooks/useDashboard';

export default function CasosRegistrados() {
  const { data } = useDashboard();
  return (
      <div>
        <h2>Casos registrados</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data.grafico_mensual}>
            <XAxis dataKey="mes" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="casos" fill="#FBBF24" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p>El gráfico muestra la frecuencia de casos de denuncia registrados en los últimos 6 meses.
        </p>
      </div>
  );
}
