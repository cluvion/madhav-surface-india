import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const folders = [
    {
        name: "2025-2026",
        documents: [
            {
                title: "EGM Notice - 04.07.2025",
                fileId: "1cqMliKsC3lsBWFX8HCw8xumCM5G3Duh8",
            },
            {
                title: "EGM Outcome - 04.07.2025",
                fileId: "1q9MrBJ1xyroOo0AkfqYrHWmGQnyXv9w4",
            },
            {
                title: "Scrutinizer Report - 04.07.2025",
                fileId: "1QFinUnCNzEmLy0LCEki0YBcGkNQqstjG",
            },
        ],
    },
    {
        name: "2024-2025",
        documents: [
            {
                title: "EGM Notice - 09.12.2024",
                fileId: "1nl5WuJ834PEfXOsFt8ALb_5qmtUh6S0s",
            },
            {
                title: "EGM Outcome - 09.12.2024",
                fileId: "1_9uJFAksMQlGRGZmLLjY7-GymtceasAW",
            },
            {
                title: "Scrutinizer Report - 09.12.2024",
                fileId: "17OxYG_BvDh77_DW6nn9lzZ8R7uAnbp-v",
            },
            {
                title: "EGM Notice - 18.05.2024",
                fileId: "11SueWmTybQ0lhd5G1rYOEgZmXQ88Wtnt",
            },
            {
                title: "EGM Outcome - 18.05.2024",
                fileId: "1phJCSPQUZ1408oK0XmGZTc1mkQ-LrtvU",
            },
            {
                title: "Scrutinizer Report - 18.05.2024",
                fileId: "1TiVMqMj6-Kz5TIXBpTIQXH6yczN6v40g",
            },
        ],
    },
    {
        name: "2019-2020",
        documents: [
            {
                title: "EGM Notice - 30.05.2019",
                fileId: "1690jGY-1OaiG1V9eW5d3ifKau6R6RF_N",
            },
            {
                title: "EGM Outcome - 30.05.2019",
                fileId: "10P48XOlBScaUUBHxzvf7hmkPXOx5BQ1Y",
            },
            {
                title: "Scrutinizer Report - 30.05.2019",
                fileId: "1kHJuCHXhPACuDAHaagfqw9yYgz2OE7OI",
            },
            {
                title: "EGM Notice - 29.03.2019",
                fileId: "1FiGDjtnTAAJEbMj_huDbTf_DmazfgKFy",
            },
            {
                title: "EGM Outcome - 29.03.2019",
                fileId: "1I4Rw1xnFsB2-RVjYvlJyVBWmGQ9LHI0V",
            },
            {
                title: "Scrutinizer Report - 29.03.2019",
                fileId: "1jaaJONZk_k0d9GV4QEAbFeBdOAQPYXVE",
            },
        ],
    },
    {
        name: "2018-2019",
        documents: [
            {
                title: "Notice of Postal Ballot - 10.08.2018",
                fileId: "1VrSQyBBDVIRURTgllyQC7eFnkzz_T_wz",
            },
            {
                title: "Postal Ballot Outcome",
                fileId: "1iOTUjifZ6fm7heOh-BXMff4pXjFg95eU",
            },
            {
                title: "Scrutinizer Report",
                fileId: "1EYgC1PCKyTppz2H7x2dt1YMqcBJKcPUh",
            },
        ],
    },
];

const EGMAndPostalBallot = () => {
    return (
        <InvestorDocuments
            title="EGM and Postal Ballot"
            intro="Notices, outcomes and scrutinizer reports of extraordinary general meetings and postal ballots."
            folderGroups={[{ folders }]}
        />
    );
};

export default EGMAndPostalBallot;
