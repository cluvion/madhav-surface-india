import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [
    {
        title: "Notice of 29th Annual General Meeting",
        fileId: "1P6lZZPNnMePdTO8tEcW_1dOz6AUP70Hd",
    },
    {
        title: "Attendance Slip and Proxy Form 2018",
        fileId: "1HS1EExf-vbWXE1wrECgR3gyywcjRLDoG",
    },
];

const NoticeOfGeneralMeetings = () => {
    return (
        <InvestorDocuments
            title="Notice of General Meetings"
            intro="Notices of general meetings of the company."
            documents={documents}
        />
    );
};

export default NoticeOfGeneralMeetings;
