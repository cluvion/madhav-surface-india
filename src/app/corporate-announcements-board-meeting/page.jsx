import React from 'react';
import InvestorDocuments from '@/components/investor-documents';

const documents = [];

const BoardMeeting = () => {
    return (
        <InvestorDocuments
            title="Board Meeting"
            intro="Corporate announcements related to board meetings."
            documents={documents}
        />
    );
};

export default BoardMeeting;
