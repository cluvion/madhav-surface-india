import React from 'react';
import Section from '@/components/section';
import PageHeader from '@/components/pageheader';

const ItemLink = ({ item }) => {
    if (!item?.fileId) {
        return item?.label ?? null;
    }

    return (
        <a
            href={`https://drive.google.com/file/d/${item.fileId}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors duration-200"
        >
            {item.label}
        </a>
    );
};

// sections: [{ heading, columns: [{ year, items }] }] shows a table, [{ heading, items }] shows a list
// items: [{ label, fileId }] where fileId is the Google Drive file ID; an item without one shows as plain text
const AnnouncementTables = ({ title, sections = [] }) => {
    return (
        <div>
            <PageHeader
                title={title}
                src="/assets/bg.webp"
                path={title}
            />

            <Section>
                <div className="max-w-6xl mx-auto space-y-12">
                    {sections.map((section) => (
                        <div key={section.heading}>
                            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                                {section.heading}
                            </h2>

                            {section.columns ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[800px] border-collapse text-sm md:text-base">
                                        <thead>
                                            <tr>
                                                {section.columns.map((column) => (
                                                    <th
                                                        key={column.year}
                                                        scope="col"
                                                        className="border border-gray-300 bg-foreground/5 px-3 py-2 text-left font-semibold text-foreground whitespace-nowrap"
                                                    >
                                                        {column.year}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: Math.max(...section.columns.map((column) => column.items.length)) }, (_, row) => (
                                                <tr key={row}>
                                                    {section.columns.map((column) => (
                                                        <td
                                                            key={column.year}
                                                            className="border border-gray-300 px-3 py-2 text-gray-700 whitespace-nowrap"
                                                        >
                                                            <ItemLink item={column.items[row]} />
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                                    {section.items.map((item) => (
                                        <li key={item.label}>
                                            <ItemLink item={item} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default AnnouncementTables;
