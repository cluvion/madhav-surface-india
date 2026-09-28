"use client";
import React from 'react';
import Section from '@/components/section';
import PageHeader from '@/components/pageheader';
import { FileText, Download, Eye } from 'lucide-react';

const financialResults = [
    {
        id: 1,
        title: "Madhav Natural Stone Surfaces Private Limited",
        description: "Financial Results as on 31st March 2026",
        viewUrl: "https://drive.google.com/file/d/1tWthpeWKsYQsNdIKy5LBW1LW4cB09WPp/view",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1tWthpeWKsYQsNdIKy5LBW1LW4cB09WPp",
        previewUrl: "https://drive.google.com/file/d/1tWthpeWKsYQsNdIKy5LBW1LW4cB09WPp/preview",
    },
    {
        id: 2,
        title: "Madhav Ashok Ventures Private Limited - Standalone",
        description: "Standalone Financial Results as on 31st March 2026",
        viewUrl: "https://drive.google.com/file/d/1zGAyOuqvCbWGJKrBNOMCik27B_NcRK61/view",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1zGAyOuqvCbWGJKrBNOMCik27B_NcRK61",
        previewUrl: "https://drive.google.com/file/d/1zGAyOuqvCbWGJKrBNOMCik27B_NcRK61/preview",
    },
    {
        id: 3,
        title: "Madhav Ashok Ventures Private Limited - Consolidated",
        description: "Consolidated Financial Results as on 31st March 2026",
        viewUrl: "https://drive.google.com/file/d/17qo-uFEf8lcAJCbeMIlWpwBvxj5lr_qN/view",
        downloadUrl: "https://drive.google.com/uc?export=download&id=17qo-uFEf8lcAJCbeMIlWpwBvxj5lr_qN",
        previewUrl: "https://drive.google.com/file/d/17qo-uFEf8lcAJCbeMIlWpwBvxj5lr_qN/preview",
    },
];

const FinancialResults = () => {
    return (
        <div>
            <PageHeader
                title="Financial Results"
                src="/assets/bg.webp"
                path="Financial Results"
            />

            <Section>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Financial Results
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Access and download the latest financial results and reports of our group companies.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {financialResults.map((result) => (
                            <div
                                key={result.id}
                                className="group bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-foreground/20 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-foreground/20 transition-colors duration-300">
                                            <FileText className="w-6 h-6 text-foreground" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                                                {result.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {result.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:flex-shrink-0 pl-16 md:pl-0">
                                        <a
                                            href={result.viewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground bg-foreground/5 border border-foreground/20 rounded-lg hover:bg-foreground/10 transition-colors duration-200"
                                        >
                                            <Eye className="w-4 h-4" />
                                            View
                                        </a>
                                        <a
                                            href={result.downloadUrl}
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
                </div>
            </Section>
        </div>
    );
};

export default FinancialResults;
