export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-6 flex items-center whitespace-nowrap text-xl font-bold text-lightest-slate sm:text-2xl">
      <span className="mr-3 font-mono text-lg text-teal sm:text-xl">{number}.</span>
      {title}
      <span className="ml-6 h-px flex-1 bg-navy-lighter" />
    </h2>
  );
}
