let Datas= {
        id: "udhd7h78",
        userName: "geek hes",
        ExpenceEntries: [
            {
                text: "salary is being credited",
                type:"income",
                date: "15.11.2021",
                amount:"50000"
            
            },
            {
                text: "Dheradun trip",
                type:"expence",
                date: "10.12.2021",
                amount:"7500"
            
            },
            // ...addind entries when user submit the form of ExpenceTracker
        ],
        LoanEntries: [
        
            {
                loanProvider: "Bank",
                type: "bike",
                amount: 130000,
                inRate: 4.5,
                duration: 12,
                mntGap: 2,
                totalAmt:135850,
                oneTimeAmt:22641 //=> totalAmt/(duration-mntGap);
            },
            {
                loanProvider: "Bank",
                type: "bike",
                amount: 130000,
                inRate: 4.5,
                duration: 12,
                mntGap: 2,
                totalAmt:135850,
                oneTimeAmt:22641 //=> totalAmt/(duration-mntGap);
            },
            {
                loanProvider: "Bank",
                type: "bike",
                amount: 130000,
                inRate: 4.5,
                duration: 12,
                mntGap: 2,
                totalAmt:135850,
                oneTimeAmt:22641 //=> totalAmt/(duration-mntGap);
            }
    ],
        CardEntries: [
        {
            numbers: 8729021128743912,
            name: "Tim Josi",
            expiry: "02/20",
            cvc:232,
        },
        {
            numbers: 8729021128743912,
            name: "Tim Josi",
            expiry: "02/20",
            cvc:232,
        }
    ]
        
}
export default Datas;