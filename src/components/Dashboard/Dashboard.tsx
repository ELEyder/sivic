import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const dataMensual = [
  { mes: 'Ene', casos: 10 },
  { mes: 'Feb', casos: 20 },
  { mes: 'Mar', casos: 14 },
  { mes: 'Abr', casos: 25 },
  { mes: 'May', casos: 18 },
  { mes: 'Jun', casos: 15 },
  { mes: 'Jul', casos: 12 },
];

const dataEstados = [
  { nombre: 'Recibido', valor: 70, color: '#FBBF24' },
  { nombre: 'Atendido', valor: 20, color: '#9CA3AF' },
  { nombre: 'Resuelto', valor: 10, color: '#EF4444' },
];

export default function DashboardCasos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Gráfico de barras */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Casos registrados</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dataMensual}>
            <XAxis dataKey="mes" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="casos" fill="#FBBF24" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-center text-sm mt-4">
          <span className="font-semibold">30%</span> Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      {/* Gráfico de pastel */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Estado de casos hasta el 2025</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dataEstados}
              dataKey="valor"
              nameKey="nombre"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
            >
              {dataEstados.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-4 text-sm">
          {dataEstados.map((estado, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: estado.color }}></div>
              {estado.nombre}
            </div>
          ))}
        </div>
      </div>

      {/* Total de casos */}
      <div className="bg-white rounded-2xl shadow p-4 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">1100</p>
        <p className="text-lg text-gray-600">Total de casos registrados</p>
      </div>
    </div>
  );
}
