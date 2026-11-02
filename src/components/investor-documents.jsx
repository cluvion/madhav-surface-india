import React from 'react';
import Section from '@/components/section';
import PageHeader from '@/components/pageheader';
import { FileText, Download, Eye } from 'lucide-react';

// documents: [{ title, description, fileId }] where fileId is the Google Drive file ID
const InvestorDocuments = ({ title, intro, documents = [] }) => {
    return (
        <div>
            <PageHeader
                title={title}
                src="/assets/bg.webp"
                path={title}
            />

            <Section>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {title}
                        </h2>
                        {intro && (
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                {intro}
                            </p>
                        )}
                    </div>

                    {documents.length === 0 ? (
                        <div className="text-center bg-white border border-gray-200 rounded-xl p-10 text-gray-500">
                            No documents are available at the moment.
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {documents.map((doc) => (
                                <div
                                    key={doc.fileId}
                                    className="group bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-foreground/20 transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-foreground/20 transition-colors duration-300">
                                                <FileText className="w-6 h-6 text-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                                                    {doc.title}
                                                </h3>
                                                {doc.description && (
                                                    <p className="text-sm text-gray-500">
                                                        {doc.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 md:flex-shrink-0 pl-16 md:pl-0">
                                            <a
                                                href={`https://drive.google.com/file/d/${doc.fileId}/view`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground bg-foreground/5 border border-foreground/20 rounded-lg hover:bg-foreground/10 transition-colors duration-200"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View
                                            </a>
                                            <a
                                                href={`https://drive.google.com/uc?export=download&id=${doc.fileId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-colors duration-200"
                                            >
                                                <Download className="w-4 h-4" />
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
};

export default InvestorDocuments;
