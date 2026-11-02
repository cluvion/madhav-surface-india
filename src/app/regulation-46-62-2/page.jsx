import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Composition of Committees of Board of Directors",
        fileId: "15eZJyJj221n4vafRmDJQufRPs7YD5fHF",
    },
    {
        title: "Familiarization Programme of Independent Directors",
        fileId: "1dqWRrhRu1iHMnoiLmCn3FOE4AZM_zNZP",
    },
    {
        title: "Contact Us for Investor Relations",
        fileId: "1djP-zDk7_90pvv9grNbAyf9rbbdIM5ep",
    },
];

const Regulation4662 = () => {
    return (
        <InvestorDocuments
            title="Regulation 46 & 62"
            intro="Disclosures under Regulation 46 and 62 of SEBI (LODR) Regulations, 2015."
            documents={documents}
        />
    );
};

export default Regulation4662;
