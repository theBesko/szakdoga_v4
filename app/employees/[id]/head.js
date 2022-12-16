export default async function Head({ params }) {
  return (
    <>
      <title>{`Employee #${params.id}`}</title>
    </>
  );
}
