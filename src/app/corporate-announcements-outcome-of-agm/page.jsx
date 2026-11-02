import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [];

const OutcomeOfAGM = () => {
    return (
        <InvestorDocuments
            title="Outcome Of AGM"
            intro="Outcomes of annual general meetings."
            documents={documents}
        />
    );
};

export default OutcomeOfAGM;
