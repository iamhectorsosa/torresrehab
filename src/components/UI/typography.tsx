export function TypographyH1({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h1
      id={id}
      className="font-zilla scroll-m-36 md:scroll-m-40 text-4xl font-extrabold tracking-tight lg:text-5xl"
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-zilla mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-zilla scroll-m-20 text-2xl font-medium tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-zilla scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-7 font-light [&:not(:first-child)]:mt-6">
      {children}
    </p>
  );
}

export function TypographyList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="my-6 ml-6 list-disc space-y-2 font-light">{children}</ul>
  );
}

export function TypographyLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl text-slate-700 dark:text-slate-400 font-light">
      {children}
    </p>
  );
}

export function TypographyLarge({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg font-semibold text-slate-900 dark:text-slate-50">
      {children}
    </div>
  );
}

export function TypographySmall({ children }: { children: React.ReactNode }) {
  return <small className="text-sm leading-relaxed block">{children}</small>;
}

export function TypographySubtle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-slate-500 dark:text-slate-400 font-light">{children}</p>
  );
}
