import Link from "next/link";
import type { HTMLAttributes } from "react";

export interface ArchiveTableColumn {
  key: string;
  label: string;
  className?: string;
}

export interface ArchiveTableRow {
  id: string;
  href?: string;
  values: Record<string, string>;
}

interface ArchiveTableProps extends HTMLAttributes<HTMLDivElement> {
  caption?: string;
  columns: ArchiveTableColumn[];
  rows: ArchiveTableRow[];
}

export default function ArchiveTable({
  caption,
  columns,
  rows,
  className = "",
  ...rest
}: ArchiveTableProps) {
  if (columns.length === 0 || rows.length === 0) {
    return null;
  }

  return (
    <div
      className={`overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--surface)] ${className}`.trim()}
      {...rest}
    >
      <table className="w-full min-w-[560px] border-collapse text-left">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-[var(--line)]">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-4 py-3 text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] ${column.className ?? ""}`.trim()}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-[var(--line)] last:border-b-0">
              {columns.map((column, columnIndex) => {
                const rawValue = row.values[column.key] ?? "";
                const isFirstColumn = columnIndex === 0;

                return (
                  <td
                    key={`${row.id}-${column.key}`}
                    className={`px-4 py-3 text-[13px] text-[var(--text)] ${column.className ?? ""}`.trim()}
                  >
                    {isFirstColumn && row.href ? (
                      <Link
                        href={row.href}
                        className="underline decoration-[var(--line)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                      >
                        {rawValue}
                      </Link>
                    ) : (
                      rawValue
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
