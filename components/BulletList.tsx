type Bullet = { text: string; linkText?: string; linkUrl?: string };

export function BulletList({ bullets }: { bullets: Bullet[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1 flex-none text-teal">▹</span>
          <span>
            {bullet.text}{" "}
            {bullet.linkText && bullet.linkUrl && (
              <a
                href={bullet.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline decoration-teal/40 underline-offset-2 hover:decoration-teal"
              >
                {bullet.linkText}
              </a>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
