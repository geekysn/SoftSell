export default function SectionTitle({
  title,
  description,
  color = "blue",
}: {
  title: string;
  description: string;
  color?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-${color}-600`}>
        {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
} 