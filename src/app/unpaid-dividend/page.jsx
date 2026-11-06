import React from 'react';
import AnnouncementTables from '@/components/announcement-tables';

const sections = [
    {
        heading: "Unpaid Dividend Year Wise",
        items: [
            { label: "Unpaid Dividend 2021-22", fileId: "1mcNMLmu5yIX6maUknkp-SRtPaOkHHRii" },
            { label: "Unpaid Dividend 2020-21", fileId: "1nXCEFtbYl1f-qhNsh_3lvr9HM4Tojh9R" },
            { label: "Unpaid Dividend 2018-19", fileId: "1M99r3ngolOU3LWYy9NyQiJ_jp0VGSoLm" },
            { label: "Unpaid Dividend 2016-17", fileId: "1tKNk3RACNNYr8hBEVReCVxnXW1jcuaxk" },
            { label: "Unpaid Dividend 2015-16", fileId: "1TxFfJBJ9H7YN_lenSjHyh1s7HLwJQWPB" },
            { label: "Unpaid Dividend 2014-15", fileId: "1Eq4QURGMl8k0gf5FSR4icqYKSduu59zU" },
            { label: "Unpaid Dividend 2013-14", fileId: "18zgkK1hiIvoacMgjvY4jzKi85Nq4-8iN" },
            { label: "Unpaid Dividend 2012-13", fileId: "10xQ823rCiJO8VXML1XjfR4uqU2bvVzza" },
            { label: "Unpaid Dividend 2011-12", fileId: "1gQg5YNJFCkoTAKNaQDU6Jolga-EJncHc" },
            { label: "Unpaid Dividend 2010-11", fileId: "1tRUjsBR9zZ5B2MFz3m4e7E6HuMIolSr1" },
            { label: "Unpaid Dividend 2009-10", fileId: "1NnGefZ4pDPHQaaTjGpuXe699U8RYONA1" },
        ],
    },
    {
        heading: "Transfer of Shares",
        items: [
            { label: "Transfer of Shares to IEPF 2017-2018", fileId: "1FJUSEviPan58pTCpOw7RDT_qFdMPaPMn" },
            { label: "Transfer of Shares to IEPF 2016-2017", fileId: "1gfwFeNEa14nNo57n1WHVlNEADjeOTX_7" },
            { label: "Transfer of Shares to IEPF 2014-2015", fileId: "1Z70JsgZ_5Q_6tA3aW4Uj4SiOx3Sdn8mv" },
        ],
    },
    {
        heading: "News Paper Publication",
        items: [
            { label: "IEPF Advertisement: FY 2026-2027", fileId: "1FTJ5lslaXoz2ZNxH1cMB6B4JFTz0jbxB" },
            { label: "IEPF Advertisement: FY 2025-2026", fileId: "1-Ik5S5I-IYQLjBEusBZCwEEf0AZFsRbH" },
            { label: "IEPF Advertisement: FY 2024-2025", fileId: "13VUWCF2K9BNo-WKCVl-b5iJBQ_PiNrbE" },
            { label: "IEPF Advertisement: FY 2023-2024", fileId: "1XcGYw3iBqYZGPduNqDd0UGPOepTkCa2N" },
            { label: "IEPF Advertisement: FY 2022-2023", fileId: "1QJQqtoAhjY2OU8w4Vths_qnfgHDD0JH4" },
            { label: "IEPF Advertisement: FY 2021-2022", fileId: "1WPzehe2TrmvHJy-RV9KoMhWyROmIbhJZ" },
        ],
    },
];

const UnpaidDividend = () => {
    return (
        <AnnouncementTables
            title="Unpaid Dividend"
            sections={sections}
        />
    );
};

export default UnpaidDividend;
