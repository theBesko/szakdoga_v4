export default async function Page({ params }) {
  const response = await fetch(`https://dummyjson.com/users/${params.id}`, {
    method: "GET",
  });

  const employee = await response.json();

  return <h3>{JSON.stringify(employee)}</h3>;
}
