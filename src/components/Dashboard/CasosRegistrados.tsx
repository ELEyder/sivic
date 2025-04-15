import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from 'recharts';
import useDashboard from '../../hooks/useDashboard';

export default function CasosRegistrados() {
  const { data } = useDashboard();
  const ultimos6Meses = data.grafico_mensual;
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
        <p>El gráfico muestra la frecuencia de casos de denuncia registrados.
        </p>
      </div>
  );
}
