import { HTMLAttributes } from "react";

function Article({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={`col-span-3 sm:grid-cols-2 pb-10 ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}

function ArticleHeader({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`text-h5 md:text-h4 text-[#424747] ${className}`}
      {...props}
    />
  );
}

export { Article, ArticleHeader };
