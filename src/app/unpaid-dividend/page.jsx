import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Unpaid Dividend 2016-2017",
        fileId: "1tKNk3RACNNYr8hBEVReCVxnXW1jcuaxk",
    },
    {
        title: "Unpaid Dividend 2015-2016",
        fileId: "1TxFfJBJ9H7YN_lenSjHyh1s7HLwJQWPB",
    },
    {
        title: "Unpaid Dividend 2014-2015",
        fileId: "1Eq4QURGMl8k0gf5FSR4icqYKSduu59zU",
    },
    {
        title: "Unpaid Dividend 2013-2014",
        fileId: "18zgkK1hiIvoacMgjvY4jzKi85Nq4-8iN",
    },
    {
        title: "Unpaid Dividend 2012-2013",
        fileId: "10xQ823rCiJO8VXML1XjfR4uqU2bvVzza",
    },
    {
        title: "Unpaid Dividend 2011-2012",
        fileId: "1gQg5YNJFCkoTAKNaQDU6Jolga-EJncHc",
    },
    {
        title: "Unpaid Dividend 2010-2011",
        fileId: "1tRUjsBR9zZ5B2MFz3m4e7E6HuMIolSr1",
    },
    {
        title: "Unpaid Dividend 2009-2010",
        fileId: "1NnGefZ4pDPHQaaTjGpuXe699U8RYONA1",
    },
];

const UnpaidDividend = () => {
    return (
        <InvestorDocuments
            title="Unpaid Dividend"
            intro="Details of unpaid and unclaimed dividend by financial year."
            documents={documents}
        />
    );
};

export default UnpaidDividend;
