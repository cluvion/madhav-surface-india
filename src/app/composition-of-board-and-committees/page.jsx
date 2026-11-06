import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Composition of Board and Committees",
        fileId: "1vs4XFtK4zsxNh4NgMJSvCaa3MoEPNs4b",
    },
];

const CompositionOfBoardAndCommittees = () => {
    return (
        <InvestorDocuments
            title="Composition of Board and Committees"
            intro="Composition of the Board of Directors and its committees."
            documents={documents}
        />
    );
};

export default CompositionOfBoardAndCommittees;
