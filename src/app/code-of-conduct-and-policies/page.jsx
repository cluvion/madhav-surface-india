import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Code of Conduct for Directors and Senior Management",
        fileId: "1Gt1Unb9g5YGcLfvX07Q1EI7qJdjsbQbP",
    },
    {
        title: "Code of Conduct under SEBI Insider Trading Regulations, 2015",
        fileId: "1h2_I-fYJwzdAI0y8H7ujjteMm6iyG6t8",
    },
    {
        title: "Fair Disclosure Code",
        fileId: "14JPIp3UP-3ypFuQmg-Q6Jrk6vlIbY1mt",
    },
    {
        title: "Policy on Related Party Transactions",
        fileId: "1jVlYLgPHmL1EH_rizQnYtzgIWBhAd8PD",
    },
    {
        title: "Policy on Vigil Mechanism",
        fileId: "1XHuWCPoin09r14XjGW0Q3-6ijXrxOOOC",
    },
    {
        title: "Policy for Determining Material Subsidiaries",
        fileId: "1oORQ6yKuBeqCV7xPUN6NeluPsls99a6j",
    },
    {
        title: "Policy for Determining Materiality of Events",
        fileId: "1rdwxS9Syi3sGIVXS7Rh1aJDVQbFNxIqv",
    },
    {
        title: "Policy on Board Diversity",
        fileId: "1qpmDFbiuprHYIIQTHZ99VEAhaDuEFEMD",
    },
    {
        title: "Corporate Social Responsibility Policy",
        fileId: "1PJzp4wnYcPFiT-F_uAYRkCNTn2ufjBWt",
    },
    {
        title: "Archival Policy",
        fileId: "1kb7t8lTu0K-CaaUdtIrOpAocGYBDSsu9",
    },
    {
        title: "Preservation of Documents Policy",
        fileId: "1MKx-BZnJB-qowAGo2nieyvpM6jaJpmBD",
    },
    {
        title: "Familiarization Programme of Independent Directors",
        fileId: "1td83_6efSEpqWYxRqxiT7iLh77c3oLR6",
    },
    {
        title: "Details of Familiarization Programme",
        fileId: "173b_0N5436zSBptMT1wUPz44c2XQGLuB",
    },
    {
        title: "Terms and Conditions of Appointment of Independent Directors",
        fileId: "1rhMV5gowMeUv6hwO4EdYtUcOw5Yr-tiI",
    },
    {
        title: "Code of Internal Procedures and Conduct - Insider Trading",
        description: "Earlier version",
        fileId: "16AJyBsReoxIzVfiKXw2AzIs0kDwGZlnM",
    },
    {
        title: "Policy on Related Party Transactions",
        description: "Earlier version",
        fileId: "19rZalY82p47f6fgOSunrHKPx69prx1m8",
    },
    {
        title: "Policy on Vigil Mechanism",
        description: "Earlier version",
        fileId: "1EtbSWOFgsmSvwgjyLqGyzc4Z-MzLdwCO",
    },
    {
        title: "Archival Policy",
        description: "Earlier version",
        fileId: "1YcINwEz2jBVDqYas6FnOXdy899dMtcEz",
    },
    {
        title: "Familiarization Programme of Independent Directors",
        description: "Earlier version",
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
