import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Memorandum and Articles of Association",
        description: "Madhav Marbles and Granites Limited",
        fileId: "1l3X1h13rLUS4zXQb9eYvQvvarPzP_bBr",
    },
];

const MemorandumAndArticlesOfAssociation = () => {
    return (
        <InvestorDocuments
            title="Memorandum and Articles of Association"
            intro="Memorandum and Articles of Association of the company."
            documents={documents}
        />
    );
};

export default MemorandumAndArticlesOfAssociation;
