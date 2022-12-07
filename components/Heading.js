export default function Heading({ title }) {
  return (
    <div>
      <div className="mt-28 mx-2 pb-16">
        <h1 className="text-center text-5xl md:text-6xl dark:text-white mb-2 md:mb-10 font-extrabold uppercase tracking-widest leading-snug">
          {title}
        </h1>
      </div>
    </div>
  );
}
