import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { PortableTextReactComponents } from "@portabletext/react";

const HeadingAnchor = (props: React.ComponentPropsWithoutRef<"a">) => {
  const { children, ...otherProps } = props;
  return (
    <a
      className="after:ml-2 after:opacity-80 hover:after:content-['#']"
      {...otherProps}
    >
      {children}
    </a>
  );
};

const ProseH1 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h1">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h1
        id={id}
        className={cn(
          "font-headings scroll-m-32 text-4xl font-bold tracking-tight lg:text-5xl",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h1>
    );
  }
);

ProseH1.displayName = "ProseH1";

const ProseH2 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h2">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h2
        id={id}
        className={cn(
          "font-headings scroll-m-32 text-3xl font-bold tracking-tight lg:text-4xl",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h2>
    );
  }
);

ProseH2.displayName = "ProseH2";

const ProseH3 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h3">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h3
        id={id}
        className={cn(
          "font-headings scroll-m-32 text-2xl font-bold tracking-tight lg:text-3xl",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h3>
    );
  }
);

ProseH3.displayName = "ProseH3";

const ProseH4 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h4">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h4
        id={id}
        className={cn(
          "font-headings scroll-m-32 text-xl font-semibold tracking-tight lg:text-2xl",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h4>
    );
  }
);

ProseH4.displayName = "ProseH4";

const ProseLead = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<"p">
>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <p
      className={cn("text-xl font-medium leading-normal opacity-80", className)}
      ref={ref}
      {...otherProps}
    >
      {children}
    </p>
  );
});

ProseLead.displayName = "ProseLead";

const ProseSubtle = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<"p">
>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <p
      className={cn("text-slate-500 dark:text-slate-400", className)}
      ref={ref}
      {...otherProps}
    >
      {children}
    </p>
  );
});

ProseSubtle.displayName = "ProseSubtle";

const ProseP = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<"p">>(
  (props, ref) => {
    const { children, className, ...otherProps } = props;
    return (
      <p
        className={cn(
          "text-lg leading-loose [&:not(:first-child)]:mt-4",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </p>
    );
  }
);

ProseP.displayName = "ProseP";

const ProseStrong = forwardRef<HTMLElement, ComponentPropsWithoutRef<"strong">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <strong className="font-semibold" ref={ref} {...otherProps}>
        {children}
      </strong>
    );
  }
);

ProseStrong.displayName = "ProseStrong";

const ProseSmall = forwardRef<HTMLElement, ComponentPropsWithoutRef<"small">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <small
        className="text-sm font-medium leading-relaxed block"
        ref={ref}
        {...otherProps}
      >
        {children}
      </small>
    );
  }
);

ProseSmall.displayName = "ProseSmall";

const ProseAnchor = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <a
      className="font-semibold text-slate-900 underline underline-offset-8 transition-colors hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300"
      ref={ref}
      {...otherProps}
    >
      {children}
    </a>
  );
});

ProseAnchor.displayName = "ProseAnchor";

const QuoteIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 409.294 409.294"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z" />
    </svg>
  );
};

const ProseBlockquote = forwardRef<
  HTMLQuoteElement,
  ComponentPropsWithoutRef<"blockquote">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div className="relative my-4 py-6 px-9 lg:px-16">
      <QuoteIcon className="absolute top-8 left-1 opacity-10 lg:left-6" />
      <blockquote
        className="text-xl font-semibold leading-9 lg:text-2xl lg:leading-loose [&>p]:text-xl [&>p]:leading-loose lg:[&>p]:text-2xl lg:[&>p]:leading-10"
        ref={ref}
        {...otherProps}
      >
        {children}
      </blockquote>
    </div>
  );
});

ProseBlockquote.displayName = "ProseBlockquote";

const ProseUL = forwardRef<HTMLUListElement, ComponentPropsWithoutRef<"ul">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <ul
        className="my-2 ml-4 list-inside list-disc text-lg leading-loose marker:text-slate-500 [&>li]:mt-2 [&>li>p]:inline"
        ref={ref}
        {...otherProps}
      >
        {children}
      </ul>
    );
  }
);

ProseUL.displayName = "ProseUL";

const ProseInlineCode = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"code">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <code
      className="whitespace-nowrap rounded bg-slate-200 py-[0.2rem] px-[0.3rem] font-mono text-base font-medium dark:bg-slate-800 dark:text-slate-400"
      ref={ref}
      {...otherProps}
    >
      {children}
    </code>
  );
});

ProseInlineCode.displayName = "ProseInlineCode";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: (props) => <ProseH1>{props.children}</ProseH1>,
    h2: (props) => <ProseH2>{props.children}</ProseH2>,
    h3: (props) => <ProseH3>{props.children}</ProseH3>,
    h4: (props) => <ProseH4>{props.children}</ProseH4>,
    normal: (props) => <ProseP>{props.children}</ProseP>,
    blockquote: (props) => <ProseBlockquote>{props.children}</ProseBlockquote>,
  },
  list: {
    bullet: (props) => <ProseUL>{props.children}</ProseUL>,
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <ProseStrong>{children}</ProseStrong>
    ),
  },
};

export {
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseLead,
  ProseSubtle,
  ProseP,
  ProseStrong,
  ProseSmall,
  ProseAnchor,
  ProseBlockquote,
  ProseUL,
  ProseInlineCode,
  portableTextComponents,
};
