import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from 'recharts';
import useDashboard from '../../hooks/useDashboard';

export default function CasosRegistrados() {
  const { data } = useDashboard();
  const ultimos6Meses = data.grafico_mensual;

  if (!ultimos6Meses || ultimos6Meses.length === 0) {
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
          {/* 👇 Mostrar solo la inicial del mes en el eje X */}
          <XAxis dataKey="mes" tickFormatter={(mes) => mes.charAt(0)} />

          <YAxis hide />
          <Tooltip
            formatter={(value) => [`${value} casos`, 'Casos']}
            labelFormatter={(label) => label} // mes completo
          />
          <Bar dataKey="casos" fill="#FBBF24" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p>El gráfico muestra la frecuencia de casos de denuncia registrados.</p>
    </div>
  );
}
