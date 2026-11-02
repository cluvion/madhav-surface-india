import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Annual Report 2017-2018",
        fileId: "1Q1YEBjL5qaXF3zVvv7JFZ-MAZYXNhiW_",
    },
    {
        title: "Annual Report 2016-2017",
        fileId: "18bgO_3IZLszBUlljtF2wM8J9VMjGkNB4",
    },
    {
        title: "Annual Report 2015-2016",
        fileId: "1R72GAJRQcraJ1ChXvx92KqpukfsfqtZI",
    },
    {
        title: "Annual Report 2014-2015",
        fileId: "1UzMfEnW8zRO_3CpM-dl9hDZWBTKxfAhw",
    },
    {
        title: "Annual Report 2013-2014",
        fileId: "1YB2d-TnbBvTKxztr3QYGB3widopXAASe",
    },
    {
        title: "Annual Report 2012-2013",
        fileId: "1AgrSeJAm9mci4AQewWlho9_PdgU22lD3",
    },
];

const AnnualReport = () => {
    return (
        <InvestorDocuments
            title="Annual Report"
            intro="Annual reports of the company for previous financial years."
            documents={documents}
        />
    );
};

export default AnnualReport;
