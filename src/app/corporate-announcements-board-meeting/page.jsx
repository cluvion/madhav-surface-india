import React from 'react';
import AnnouncementTables from '@/components/announcement-tables';

const sections = [
    {
        heading: "Board Meeting - Intimation",
        columns: [
            {
                year: "2026-2027",
                items: [
                    { label: "17.04.2026", fileId: "1kwrZWW95pCq6jYSQ_GDT_9W1ox2o1m8n" },
                    { label: "29.05.2026", fileId: "1YM_x_9zXoLeORxu8EuTLoXARvoweK3Ob" },
                    { label: "13.08.2026", fileId: "1O1lx18Yw4cM5Xe80tSP9khYJ4AiQtUbW" },
                    { label: "14.11.2026", fileId: "12Pnp65mko3buqKtkUkOiPTuL4GZQM3NZ" },
                ],
            },
            {
                year: "2025-2026",
                items: [
                    { label: "30.05.2025", fileId: "1mwXeuWdJ6PGrC_LInohqZ1Z_mQXfBUCu" },
                    { label: "13.08.2025", fileId: "17tB_cPQ457LiRtXRvE1-A6XskGjp2vSf" },
                    { label: "11.11.2025", fileId: "1wbBDWJOT-U2ECn4n73fmP0uBBpCGWHp5" },
                    { label: "11.02.2026", fileId: "1JSpo8dGoO6J1j7YPv7CHrQrqxedotC_K" },
                    { label: "05.03.2026" },
                    { label: "25.03.2026" },
                ],
            },
            {
                year: "2024-2025",
                items: [
                    { label: "13.04.2024", fileId: "18Xb3bbRcLDvn9hnOil2mmwLQ5nycBI4u" },
                    { label: "28.05.2024", fileId: "12AtIFMpdkhPIePkA4uNZitbCkazPeLPL" },
                    { label: "13.08.2024", fileId: "1Co3PrIq_BkHzHKU7H6q6tmKp0h7VLbVs" },
                    { label: "03.09.2024", fileId: "11g6fN3gfLL0fipjmTC0vfrfXUPhzb-pB" },
                    { label: "19.10.2024", fileId: "14o-mOHPYHsxq2QpjDIWo5a0l3X6sthop" },
                    { label: "14.11.2024", fileId: "1fEmf1kyBkCSKo9nwkNiDY9MX0rHUt5eS" },
                    { label: "10.02.2025", fileId: "1Q0u9QVy1uCtFRlbPMwCiDFjU7Oi7BdzJ" },
                    { label: "29.03.2025", fileId: "1dw17nv6xgT08T6PiBug-zL_Lt4047cXB" },
                ],
            },
            {
                year: "2023-2024",
                items: [
                    { label: "29.05.2023", fileId: "1JrYTrNoL5wFh75Hrv0lb_HGvLaMKYonk" },
                    { label: "11.08.2023", fileId: "1N0-xPkftCOnkB-7mECLrDYcVOPI2o1GH" },
                    { label: "02.09.2023", fileId: "1rqbmeA7hB_piY4FkCy_7kEVToPe1jN1X" },
                    { label: "08.11.2023", fileId: "1ChdYN07qGTv0hDANp2JSEk1oCrQC7bh5" },
                    { label: "08.02.2024", fileId: "1U4XeEnpeJaxI0RDjPU-Rqs57ht_cAlzw" },
                ],
            },
            {
                year: "2022-2023",
                items: [
                    { label: "27.05.2022", fileId: "16G3ds-Nhnecmi1CMrk7eBV0I-li_YCGK" },
                    { label: "10.08.2022", fileId: "12rJ974li65JRYYgyMvGshNcv4at_tNBU" },
                    { label: "12.11.2022", fileId: "1DquM8aY9fVwXvp5H5PUU5sKv1QlqTh8g" },
                    { label: "11.02.2023", fileId: "1oQ5MmEm2zSvPysNA9KCJkJBoUsrIOeRl" },
                ],
            },
            {
                year: "2021-2022",
                items: [
                    { label: "29.05.2021", fileId: "1_wOiv43D9eaovTZyfdoEdOpCCy-sbN-Q" },
                    { label: "29.06.2021", fileId: "1y34K3O-_izs1eMNE_15WiGxgMjRRydgE" },
                    { label: "14.08.2021", fileId: "14KFoNEVxeBV--tDUF4-8zgwkd8SgWfBu" },
                    { label: "04.09.2021", fileId: "1yV_ZfLnnWknayQcUGYBwEUL0TCQS26ty" },
                    { label: "12.11.2021" },
                    { label: "11.02.2022", fileId: "1ZrU-Z_uVbN1b-er3gD9u4PufXexHeuWx" },
                    { label: "21.03.2022", fileId: "1pVI6Eaushnkn92M0r-TK4H2FwEvrqYbs" },
                ],
            },
            {
                year: "2020-2021",
                items: [
                    { label: "30.06.2020", fileId: "1WrAyspmfCyozzcXRIqVGSMe5h3EBFMiK" },
                    { label: "28.07.2020", fileId: "1vG2cGzU6RIAeKbunbTRY7OZx4QWQ5ISK" },
                    { label: "14.09.2020", fileId: "12NWDTNCxzwq8Ib2u4Q8-GKX8noZAvMIm" },
                    { label: "11.11.2020", fileId: "1zrVeaL_lDf1mkpeF7sWE79Fu_x4gJLxg" },
                    { label: "04.12.2020" },
                    { label: "12.02.2021", fileId: "1vH2cXnUnpN3yNgHPZDqrhgbGyNw8fwN2" },
                ],
            },
        ],
    },
    {
        heading: "Board Meeting - Outcome",
        columns: [
            {
                year: "2026-2027",
                items: [
                    { label: "17.04.2026", fileId: "1-tcDozw2CyyX0CDR2q0D4IZnUfuPHkmy" },
                    { label: "29.05.2026", fileId: "1rlbf8_G1wiiznH1ezYa2w0GIWquwi5Sv" },
                    { label: "13.08.2026", fileId: "1y1gsGZb65T9LxZs2N-_Nttl_ytdz_v0K" },
                ],
            },
            {
                year: "2025-2026",
                items: [
                    { label: "30.05.2025", fileId: "1zC9hXzlJzC-w3QpHX4lx_q3lw7bDI6hr" },
                    { label: "13.08.2025", fileId: "1jzKHtJK_ZG3uTEuJbPYBb0sTEc6ZYSZ4" },
                    { label: "11.11.2025", fileId: "1MB7iZ5csvuMcQC0OeaJuTXzpxRYeP6WF" },
                    { label: "11.02.2026", fileId: "1w0zoKno-1XlOAZkMDo5TrHayNlPlgXOk" },
                    { label: "05.03.2026", fileId: "13IbkNfKE4f5JuMtkx0Wcjbnizhg408Tp" },
                    { label: "25.03.2026", fileId: "1HAHOYaHRHWMViZTTVSiAF2Gsmpljgv4h" },
                ],
            },
            {
                year: "2024-2025",
                items: [
                    { label: "13.04.2024", fileId: "1RKRYWX8qaQ5tTjg4LHTtDii9V1AXdF3Y" },
                    { label: "28.05.2024", fileId: "135pSVs0WlWuHgOgBCstj9usDBtmYAxPg" },
                    { label: "13.08.2024", fileId: "1t81vrwpHy-SHXw3dDPf5gsLsDUd2YBlh" },
                    { label: "03.09.2024", fileId: "1syTJeKR9oBNKljumfeAD5nN9Lh3LN0qU" },
                    { label: "19.10.2024", fileId: "1hW-NS7Mh2ruJxWovhkTkvuXojLzvx57i" },
                    { label: "14.11.2024", fileId: "1u07MM13AfOtUYQjQPLief3etD4ZFuLAN" },
                    { label: "10.02.2025", fileId: "15-uGspAeAjKpZ6K9CLvFZ0Akmj251tXO" },
                    { label: "29.03.2025", fileId: "1p1RdCrfuoF3l6D3zP_3_qJYvIl0jjsc8" },
                ],
            },
            {
                year: "2023-2024",
                items: [
                    { label: "29.05.2023", fileId: "1qxwVwHSvMK955OZnX0LpPpPPlpl6uv4y" },
                    { label: "11.08.2023", fileId: "11dxKw6xz75BdacYngGvyAxpzw9mr9Zik" },
                    { label: "02.09.2023", fileId: "1BGHI_SuUeCptD8YNY_65kTx1zMlX61g5" },
                    { label: "08.11.2023", fileId: "1G17qmQM2cPis80mkP9aQJ3kGqwlTnuYf" },
                    { label: "08.02.2024", fileId: "1hqqSi5LvpLp6rUOCUOm0t-x9YZN0DNsX" },
                ],
            },
            {
                year: "2022-2023",
                items: [
                    { label: "27.05.2022", fileId: "12swU1qyd8BIM7xquByZmAfHyz_nFXMwM" },
                    { label: "10.08.2022", fileId: "1g8BnjEt2GLU0dWoaP-1xdcN3eDQBGrL4" },
                    { label: "03.09.2022", fileId: "1NhBVxm9Ccwx1NJr8e_8lL6agrIPxsh_M" },
                    { label: "12.11.2022", fileId: "1dS_eNvyn7lsG9jpXuDBOwPGciFufuhWH" },
                    { label: "11.02.2023", fileId: "1B4CmXwjP9tQivWTws3X39HB87Yq6DhD4" },
                ],
            },
            {
                year: "2021-2022",
                items: [
                    { label: "29.05.2021", fileId: "1iCYQXyvSzxb_qJ-Pcc7JWsE89_B9W-1B" },
                    { label: "29.06.2021", fileId: "1OtmNSzrLe4wwjkqUH2I_2zysNqiuuf2b" },
                    { label: "14.08.2021", fileId: "1jn84pTkR2mUu7OpdNhW5q8Bprlf7YKO2" },
                    { label: "04.09.2021", fileId: "1kmpkDqvIAYf35G8bDm1-yOcE0dTmDG4r" },
                    { label: "12.11.2021", fileId: "1fMCshNmPUiD9tXoTpSjg8urO1YZmJanw" },
                    { label: "11.02.2022", fileId: "1OMrRXaepAxHX7GjjvwWr-aHto9gjNhXh" },
                    { label: "21.03.2022", fileId: "15xeowj-V64n9cXGd8WGXAw52vPueYUrC" },
                ],
            },
            {
                year: "2020-2021",
                items: [
                    { label: "30.06.2020", fileId: "1xBSweYu7nEOaYqgKi-sP7I4D7ABk8eeq" },
                    { label: "28.07.2020", fileId: "1s_Zhr0zMRUU1kYSNDFK5g-4NEuHHvknu" },
                    { label: "14.09.2020", fileId: "1w0qigoedX4N6HkpLUo728vfg0FmrT4qG" },
                    { label: "11.11.2020", fileId: "1aDxxulKQWgOBHBCxN8afFfCI0rkcnzq7" },
                    { label: "04.12.2020", fileId: "1NGqWUs7mKDrDIzRuup3rGHh3BQWfymzr" },
                    { label: "12.02.2021", fileId: "1LW-g5GI6SKw0DIJh2ETO1L_3eu8KGkkv" },
                ],
            },
        ],
    },
    {
        heading: "Trading Window",
        columns: [
            {
                year: "2026-2027",
                items: [
                    { label: "Quarter One", fileId: "1kzmie781nY0AURv0EpXCBecdzBCjspWd" },
                    { label: "Quarter Two", fileId: "1SSJAYTG59SWHDElJjp4_Sry9AhCmfRci" },
                    { label: "Quarter Three", fileId: "1W6DEc7p63F3XqmWFS1FMHCDHwm_L0YeZ" },
                ],
            },
            {
                year: "2025-2026",
                items: [
                    { label: "Quarter One", fileId: "17H2aCpIYFQjqQutLE-tWMR29owH3HVLM" },
                    { label: "Quarter Two", fileId: "1BjZM29Kmc8if83rPn_XNhMAV1NNMwN5G" },
                    { label: "Quarter Three", fileId: "1lmjW5SaeD2xHVaZw-JKkt75Q5z14Ipx8" },
                    { label: "Quarter Four", fileId: "1SZylQivCI9JyLkibz_rleQZesA0YwOmR" },
                ],
            },
            {
                year: "2024-2025",
                items: [
                    { label: "Quarter One", fileId: "13Ji9oBj4YmprY09V7Ys-tBrKHgm8Hg8_" },
                    { label: "Quarter Two", fileId: "1ppfmx4s8kDoVFA-fSJGW2x3LJWu_D8C7" },
                    { label: "Quarter Three", fileId: "1l5hADRMWBqOfIJcUXnTxtRN7vj4q3KQw" },
                    { label: "Quarter Four", fileId: "1Ih5OEtsRQ_L3DzEcaOCwP-93eBsY2sm3" },
                ],
            },
            {
                year: "2023-2024",
                items: [
                    { label: "Quarter One", fileId: "17_kTzJDcvjVWfzHZEXzpyNYZcgxX_bbs" },
                    { label: "Quarter Two", fileId: "1Qw8k0ScN9UsUVnyMYsjyOMhci6Efc-Q_" },
                    { label: "Quarter Three", fileId: "1o5hkJLPwzshlF42NdhgL0iy_GtudIDs-" },
                    { label: "Quarter Four", fileId: "1K9CIAAWtRNjH8CgLOwgy6eSBsZItsPwY" },
                ],
            },
            {
                year: "2022-2023",
                items: [
                    { label: "Quarter One", fileId: "1h99zse5xhvauufXUPEiDWRArQMtZIW7s" },
                    { label: "Quarter Two", fileId: "19coogAQzExk23w1ABUXZ9ku1we_pjamd" },
                    { label: "Quarter Three", fileId: "1awnaWqXVzsmxubMWJXeUXG3_--JMWNDM" },
                    { label: "Quarter Four", fileId: "1YxVlmJqeJ-QGp-5C7rgCs7kPpRfRrUTD" },
                ],
            },
            {
                year: "2021-2022",
                items: [
                    { label: "Quarter One", fileId: "1zFAtsCMzAagjvvWr3lIXvkcH-T7pZmsk" },
                    { label: "Quarter Two", fileId: "1Iiy37RUXfdQBIF0vlR3u18yHTJIYufAj" },
                    { label: "Quarter Three", fileId: "15urmHUGPTNved2ByefQwMDx1r8sLllPM" },
                    { label: "Quarter Four", fileId: "1P6_5F1ZvEfJlmo-o6oxqQcJ-8gOWMr5J" },
                ],
            },
            {
                year: "2020-2021",
                items: [
                    { label: "Quarter One", fileId: "17f8HkJSx01HtvdDVQLH4UHP0HAKrzK5u" },
                    { label: "Quarter Two", fileId: "1kuLu2SD_FF1DrU-zVh-uSgpkYIdnrR6l" },
                    { label: "Quarter Three", fileId: "1GNggEioKGjIThvKlbNFS1pyM0kdFKzhY" },
                    { label: "Quarter Four" },
                ],
            },
        ],
    },
];

const BoardMeeting = () => {
    return (
        <AnnouncementTables
            title="Board Meeting"
            sections={sections}
        />
    );
};

export default BoardMeeting;
