import React from 'react';
import Section from '@/components/section';
import PageHeader from '@/components/pageheader';

// Each report has either a url (exchange filing) or a fileId (Google Drive PDF)
const reportGroups = [
    {
        heading: "2026-2027",
        reports: [
            {
                period: "September 30, 2026",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_202573_21102026112115_iXBRL_WEB.html",
            },
            {
                period: "June 30, 2026",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_175875_19072026223146_iXBRL_WEB.html",
            },
        ],
    },
    {
        heading: "2025-2026",
        reports: [
            {
                period: "March 31, 2026",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_152968_26042026204155_iXBRL_WEB.html",
            },
            {
                period: "December 31, 2025",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_137230_24012026135454_iXBRL_WEB.html",
            },
            {
                period: "September 30, 2025",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_120306_17102025022213_iXBRL_WEB.html",
            },
            {
                period: "June 30, 2025",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_105946_26072025165438_iXBRL_WEB.html",
            },
        ],
    },
    {
        heading: "2024-2025",
        reports: [
            {
                period: "March 31, 2025",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_GOVERNANCE_86741_25042025125926_iXBRL_WEB.html",
            },
            {
                period: "December 31, 2024",
                url: "https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_76237_21012025224258_iXBRL_WEB.html",
            },
            {
                period: "September 30, 2024",
                url: "https://www.bseindia.com/stock-share-price/madhav-marbles--granites-ltd/madhav/515093/322351/corporate-governance/sep-2024/qtrid/123.0",
            },
            {
                period: "June 30, 2024",
                url: "https://www.bseindia.com/stock-share-price/madhav-marbles--granites-ltd/madhav/515093/318813/corporate-governance/jun-2024/qtrid/122.0",
            },
        ],
    },
    {
        heading: "2023-2024",
        reports: [
            {
                period: "March 31, 2024",
                url: "https://www.bseindia.com/stock-share-price/madhav-marbles--granites-ltd/madhav/515093/314884/corporate-governance/mar-2024/qtrid/121.0",
            },
            {
                period: "December 31, 2023",
                url: "https://www.bseindia.com/stock-share-price/madhav-marbles--granites-ltd/madhav/515093/310502/corporate-governance/dec-2023/qtrid/120.0",
            },
            {
                period: "September 30, 2023",
                url: "https://www.bseindia.com/stock-share-price/madhav-marbles--granites-ltd/madhav/515093/307587/corporate-governance/sep-2023/qtrid/119.1",
            },
            {
                period: "June 30, 2023",
                fileId: "1tZ3yT1WuxudxSc1N0cgFRNtYRo5IWb56",
            },
        ],
    },
    {
        heading: "2022-2023",
        reports: [
            {
                period: "March 31, 2023",
                fileId: "1FcPTmQCtTPPj3POSsWdndimzSGmrP-Yk",
            },
            {
                period: "December 31, 2022",
                fileId: "1cJgPzdAa7o0sZCwMP4JbXtNrd6NOOVzq",
            },
            {
                period: "September 30, 2022",
                fileId: "15iSzgFn0QV74Pa5tTr_m3QCui1M2qfM4",
            },
            {
                period: "June 30, 2022",
                fileId: "1YMC_qhEXUcbpWs9WLmyT_3PwLPCBNzLw",
            },
        ],
    },
    {
        heading: "2021-2022",
        reports: [
            {
                period: "March 31, 2022",
                fileId: "1Q6VRp45soiudH-svX-guuTrzsv4PKjFD",
            },
            {
                period: "December 31, 2021",
                fileId: "1Y8GtL0Whx-lJpQ5V6Y443PG4CjSgGQX2",
            },
            {
                period: "September 30, 2021",
                fileId: "1vmb9vywMjkWVLFZm1aj8G1C1Rl8BelxI",
            },
            {
                period: "June 30, 2021",
                fileId: "1Ubq3lIrk2WAaojAS2L0BBMC8fg3vgWXu",
            },
        ],
    },
    {
        heading: "Earlier Reports",
        reports: [
            {
                period: "December 2017",
                fileId: "1zBRZjHkyhcLftebl8U3wZVw6AZ7iNY60",
            },
            {
                period: "September 2017",
                fileId: "1SGtIDx40KYmlIRCacvhsgtc-irSEO6lq",
            },
            {
                period: "June 30, 2017",
                fileId: "1I8vz-Rfy6iYXQ8TjVGtqGh20pHoIWsQy",
            },
            {
                period: "2016-2017",
                fileId: "1FVypa5-0ILgy7HTo0hraA29Lgu-SRWNx",
            },
            {
                period: "March 31, 2016",
                fileId: "1djdMf7bbu_asNSrK5OSMMrD6THF_NNdw",
            },
            {
                period: "December 2015",
                fileId: "1J6RwfXuap7FzXZt55OOp9c4kVJc3ytxc",
            },
            {
                period: "March 31, 2013 to September 30, 2015",
                fileId: "1l5okYLZYMe3mEytGXPhmo06pdZuaIe44",
            },
        ],
    },
];

const CorporateGovernanceReport = () => {
    return (
        <div>
            <PageHeader
                title="Corporate Governance Report"
                src="/assets/bg.webp"
                path="Corporate Governance Report"
            />

            <Section>
                <div className="max-w-5xl mx-auto space-y-10">
                    {reportGroups.map((group) => (
                        <div key={group.heading}>
                            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
                                {group.heading}
                            </h2>

                            <div className="space-y-5">
                                {group.reports.map((report) => (
                                    <div key={report.period}>
                                        <p className="text-gray-700 mb-1">
                                            {report.period}:
                                        </p>
                                        <a
                                            href={report.url ?? `https://drive.google.com/file/d/${report.fileId}/view`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm md:text-base text-primary underline underline-offset-2 break-all hover:text-primary/80 transition-colors duration-200"
                                        >
                                            {report.url ?? 'View PDF'}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default CorporateGovernanceReport;
