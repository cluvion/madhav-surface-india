import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [];

const EOGM = () => {
    return (
        <InvestorDocuments
            title="EOGM"
            intro="Corporate announcements related to extraordinary general meetings."
            documents={documents}
        />
    );
};

export default EOGM;
