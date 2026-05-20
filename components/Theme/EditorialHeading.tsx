interface EditorialHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
}

export default function EditorialHeading({
  eyebrow,
  title,
  description,
  as = "h2",
}: EditorialHeadingProps) {
  const HeadingTag = as;

  return (
    <header>
      {eyebrow ? <p className="editorial-eyebrow">{eyebrow}</p> : null}
      <HeadingTag className="editorial-title">{title}</HeadingTag>
      {description ? <p className="editorial-description">{description}</p> : null}
    </header>
  );
}
