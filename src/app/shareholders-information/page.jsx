import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Shareholding Pattern - Quarter ended December 31, 2017",
        fileId: "1jQkmOuI5AAGZ9HFDqiuRQxtpGrUd3HeS",
    },
    {
        title: "Shareholding Pattern",
        fileId: "1OYxbi203HvsfXitS5K8m0UXc9yBCB93M",
    },
    {
        title: "Shares Transferred to IEPF",
        fileId: "1xOit_0zAUQrWF68qdZqGmdc1GVOV_gn3",
    },
    {
        title: "Contact Us for Investor Relations",
        fileId: "1djP-zDk7_90pvv9grNbAyf9rbbdIM5ep",
    },
];

const ShareholdersInformation = () => {
    return (
        <InvestorDocuments
            title="Shareholders Information"
            intro="Shareholding pattern and other information for our shareholders."
            documents={documents}
        />
    );
};

export default ShareholdersInformation;
