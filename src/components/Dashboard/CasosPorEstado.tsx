import {
   Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import useDashboard from '../../hooks/useDashboard';

export default function CasosPorEstado() {
  const { data } = useDashboard();

  return (
      <div>
        <h2>Estado de casos hasta el 2025</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data.estados}
              dataKey="valor"
              nameKey="nombre"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.estados.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div style={{
          display : "flex",
          justifyContent : "space-evenly"
        }}>
          {data.estados.map((estado, i) => (
            <div key={i} style={{
              display: "flex",
              gap: 5
            }}>
              <div style={{
                backgroundColor : estado.color,
                width: 20,
                height: 20,
              }}></div>{estado.nombre}
            </div>
          ))}
        </div>
      </div>
  );
}
