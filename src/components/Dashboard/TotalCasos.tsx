import useDashboard from "../../hooks/useDashboard";

export default function TotalCasos() {
  const { data } = useDashboard();

  return (
      <div>
        <h2>{data.total}</h2>
        <p>Total de casos registrados</p>
      </div>
  );
}
