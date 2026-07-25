export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-10 flex items-center whitespace-nowrap text-2xl font-bold text-lightest-slate sm:text-3xl">
      <span className="mr-3 font-mono text-xl text-teal sm:text-2xl">{number}.</span>
      {title}
      <span className="ml-6 h-px flex-1 bg-navy-lighter" />
    </h2>
  );
}
