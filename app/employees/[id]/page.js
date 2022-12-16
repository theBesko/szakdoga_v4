export default async function Page({ params }) {
  const response = await fetch(
    `http:localhost:3000/api/employees/${params.id}`,
    {
      method: "GET",
    }
  );

  const employee = await response.json();

  return <h3>{JSON.stringify(employee)}</h3>;
}
