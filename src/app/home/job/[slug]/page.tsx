export default function JobDetails({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Job: {params.slug}</h1>
      <p>Job details UI goes here.</p>
    </div>
  );
}
