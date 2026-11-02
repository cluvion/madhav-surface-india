import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Code of Internal Procedures and Conduct - Insider Trading",
        fileId: "16AJyBsReoxIzVfiKXw2AzIs0kDwGZlnM",
    },
    {
        title: "Policy on Related Party Transactions",
        fileId: "19rZalY82p47f6fgOSunrHKPx69prx1m8",
    },
    {
        title: "Policy on Vigil Mechanism",
        fileId: "1EtbSWOFgsmSvwgjyLqGyzc4Z-MzLdwCO",
    },
    {
        title: "Corporate Social Responsibility Policy",
        fileId: "1PJzp4wnYcPFiT-F_uAYRkCNTn2ufjBWt",
    },
    {
        title: "Archival Policy",
        fileId: "1YcINwEz2jBVDqYas6FnOXdy899dMtcEz",
    },
    {
        title: "Familiarization Programme of Independent Directors",
        fileId: "1dqWRrhRu1iHMnoiLmCn3FOE4AZM_zNZP",
    },
];

const CodeOfConductAndPolicies = () => {
    return (
        <InvestorDocuments
            title="Code of Conduct and Policies"
            intro="Codes of conduct and policies adopted by the company."
            documents={documents}
        />
    );
};

export default CodeOfConductAndPolicies;
