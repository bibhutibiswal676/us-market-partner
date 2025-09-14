'use client';
import React from 'react';

type Column = { key: string; label: string };
type Row = { label: string; values: Record<string, string | boolean> };

export default function ComparisonTable({
  columns,
  rows,
  title,
}: {
  columns: Column[];
  rows: Row[];
  title?: string;
}) {
  return (
    <section className="container mx-auto px-4 py-12">
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border-b border-gray-200">
                Feature
              </th>
              {columns.map((c) => (
                <th
                  key={c.key}
                  className="text-center p-3 border-b border-gray-200"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border-t border-gray-200 font-medium text-gray-800">
                  {r.label}
                </td>
                {columns.map((c) => (
                  <td
                    key={c.key}
                    className="p-3 border-t border-gray-200 text-center"
                  >
                    {typeof r.values[c.key] === 'boolean'
                      ? r.values[c.key]
                        ? '✔︎'
                        : '—'
                      : (r.values[c.key] as string)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
