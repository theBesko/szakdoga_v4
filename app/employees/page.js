import Link from "next/link";

export default async function Page() {
  const employeeArray = [];

  for (let i = 1; i <= 100; i++) {
    employeeArray.push(`Employee #${i}`);
  }

  return (
    <div>
      {employeeArray.map((e, i) => (
        <h1 key={i}>
          <Link href={`employees/${i + 1}`}>{e}</Link>
        </h1>
      ))}
    </div>
  );
}
