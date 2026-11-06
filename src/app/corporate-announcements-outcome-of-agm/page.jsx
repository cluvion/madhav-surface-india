import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Outcome of 37th AGM",
        description: "Held on September 30, 2026",
        fileId: "1X2HnbsfoMbp_LIHWauYn4SR5CmCGoWT-",
    },
    {
        title: "Outcome of 36th AGM",
        description: "Held on September 30, 2025",
        fileId: "1vR5vW3Ev3akhHP4_C6w-n_wLZH9jk6AL",
    },
    {
        title: "Outcome of 35th AGM",
        description: "Held on September 30, 2024",
        fileId: "1hOSt_88zhAYeL4YJWWD9LxO-eqZu6KPN",
    },
    {
        title: "Outcome of 34th AGM",
        description: "Held on September 29, 2023",
        fileId: "1CePAGm6wVT-dHorsHTRvaeaPxZcJj0Hi",
    },
    {
        title: "Outcome of 33rd AGM",
        description: "Held on September 30, 2022",
        fileId: "1MXLnVRvImwnef8x5Zh_sRQpR73M923Vw",
    },
    {
        title: "Outcome of 32nd AGM",
        description: "Held on September 30, 2021",
        fileId: "1Y6830zYhpWKBggxUAC6gF7zE5pj74mX7",
    },
    {
        title: "Outcome of 31st AGM",
        description: "Held on December 26, 2020",
        fileId: "1ullQ7emGSaeiR1pD38W5su0468OYoHZj",
    },
    {
        title: "Outcome of 30th AGM",
        description: "Held on September 30, 2019",
        fileId: "1n7h4QjanPNJipJTdhjrTYRSE09BrmFb3",
    },
    {
        title: "Outcome of 29th AGM",
        description: "Held on August 11, 2018",
        fileId: "1YBM5nPiB0aZsZcfspIDaXTXhZW3SnrLi",
    },
    {
        title: "Outcome of 28th AGM",
        description: "Held on September 9, 2017",
        fileId: "1rkkUW-O5rx_t-BI4MC9B8U-Gah3qFvxi",
    },
];

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
