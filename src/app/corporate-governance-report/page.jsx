import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Corporate Governance Report - December 2017",
        fileId: "1zBRZjHkyhcLftebl8U3wZVw6AZ7iNY60",
    },
    {
        title: "Corporate Governance Report - September 2017",
        fileId: "1SGtIDx40KYmlIRCacvhsgtc-irSEO6lq",
    },
    {
        title: "Corporate Governance Report - June 30, 2017",
        fileId: "1I8vz-Rfy6iYXQ8TjVGtqGh20pHoIWsQy",
    },
    {
        title: "Corporate Governance Report 2016-2017",
        fileId: "1FVypa5-0ILgy7HTo0hraA29Lgu-SRWNx",
    },
    {
        title: "Corporate Governance Report - March 31, 2016",
        fileId: "1djdMf7bbu_asNSrK5OSMMrD6THF_NNdw",
    },
    {
        title: "Corporate Governance Report - December 2015",
        fileId: "1J6RwfXuap7FzXZt55OOp9c4kVJc3ytxc",
    },
    {
        title: "Corporate Governance Report - March 31, 2013 to September 30, 2015",
        fileId: "1l5okYLZYMe3mEytGXPhmo06pdZuaIe44",
    },
];

const CorporateGovernanceReport = () => {
    return (
        <InvestorDocuments
            title="Corporate Governance Report"
            intro="Quarterly and annual corporate governance reports."
            documents={documents}
        />
    );
};

export default CorporateGovernanceReport;
