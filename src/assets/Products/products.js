import { sub } from "framer-motion/client";

export const allProducts = [
    {
        projectTitle: "Cooperative Management Information System (CMIS)",
        projectDescription:
            "A customize cooperative management system designed for stand alone or integrated modules. Its purpose is to help the end users manage to effectively and efficiently. Reduce the multiple recording and faster report consolidation in the aspect of Financial, Goods, and Services including other allied areas.",
        modules: [
            {
                modulename: "Membership Management Module",
                content: [
                    "Membership/Profiling Entry Screen",
                    "Member Registration and Payment",
                    "Share Capital and Savings Monitoring",
                    "Member Dividends and Distribution",
                    "Member Reporting and Status, Classification",
                ],
            },
            {
                modulename: "Load and Financial Management",
                content: [
                    "Loan Application and Entry",
                    "Loan Monitoring",
                    "Schedule Amortization",
                    "Borrower Ledger",
                    "Collection and Payment Entry",
                    "Aging of Recievable",
                    {
                        subcontent: [
                            {
                                contentName: "Loan and Financial Reporting",
                                sub: [
                                    "Loan Summary Report",
                                    "Collection and Payment Report",
                                    "Recievable Summary Report",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                modulename: "Asset Monitoring Module",
                content: [
                    "Entry of Property, Plant & Equipment",
                    "Standard Depreciation Report",
                    "Summary Report of Net Book Value",
                    "Asset Status and Monitoring",
                ],
            },
            {
                modulename: "Integrated Accounting System",
                content: [
                    "Chart of Account Entries",
                    "Charge Centers",
                    "Check Voucher Entries",
                    "Accounts Payable Entries",
                    "General Ledger Entries",
                    {
                        subcontent: [
                            {
                                contentName: "Report Generation",
                                sub: [
                                    "Journal Book List Report",
                                    "Trial Balance",
                                    "Income Statement",
                                    "Balance Sheet",
                                    "Cash Flow report",
                                    "Journal/Adjusting Entries",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                modulename: "Inventory Management System",
                content: [
                    "Product Master List Management Entry",
                    "Price Update and Discounting",
                    "Purchase Order Entry",
                    "Beginning of Stock Entry",
                    "Receiving Report Entry",
                    "Stocks Transfer and Withdrawals Entry",
                    "Inventory Adjustment and Returns Entry",
                    {
                        subcontent: [
                            {
                                contentName: "Inventory Computations and Reports",
                                sub: [
                                    "Summary of Receiving Reports and Payables",
                                    "List of Available Items",
                                    "Per Item Inventory Level",
                                    "Current Inventory Level of Every Product",
                                    "Re-order Level Items Report",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                modulename: "Sales Order Taking Module",
                content: [
                    "Entry of Sales Invoice (By Mode, Type of Sales)",
                    "Sales Return and Adjustment Entry",
                    "Sales Summary Report",
                    {
                        subcontent: [
                            {
                                contentName: "Sales Detail Report",
                                sub: [
                                    "Parametric and Date Range Report",
                                    "Sales Demographic Report",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                modulename: "Rental and Concessionaire Module",
                content: [
                    "Entry of Renters",
                    "Preparation of Contracts and Setup of Schedule Amortizations",
                    "Payments and Collections Entry",
                    "Renters Ledger and Aging of Receivables",
                ],
            },
            {
                modulename: "Payroll Module",
                content: [
                    "General Payroll Computation and Report",
                    "Employee Rate and Incentives and Computations",
                    "Employee Deductions and Loan Entry",
                    "Pay Slip and Net Take Pay Certificate",
                    "Daily Time Record (DTR) Uploading and Monitoring",
                ],
            },
            {
                modulename: "HR 201 Module",
                content: [
                    "Employee Profiling",
                    "Demographic Reports",
                    "Sanctions and Violations Entry",
                    "Plantilla and Staffing Monitoring",
                ],
            },
        ],
    },
    { 
        projectTitle: "Integrated Office Automation System (iOAS)", 
        projectDescription: "A customized office management system designed for stand alone or integrated modules. Its purpose is to help the end users to manage effectively and efficiently. Reduce the multiple recording and faster report consolidation in the aspect of Financial, Goods and Services including other allied areas.",
        modules: [
            {
                modulename: "Integrated Accounting System",
                content: [
                    "Chart of Account Entries",
                    "Charge Centers",
                    "Check Voucher Entries",
                    "Accounts Payable Entries",
                    "General Ledger Entries",
                    {
                        subcontent: [
                            {
                                contentName: "Report Generation",
                                sub: [
                                    "Journal Book List Report",
                                    "Trial Balance",
                                    "Income Statement",
                                    "Balance Sheet",
                                    "Cash Flow report",
                                    "Journal/Adjusting Entries",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                modulename: "Asset Monitoring Module",
                content: [
                    "Entry of Property, Plant & Equipment",
                    "Standard Depreciation Report",
                    "Summary Report of Net Book Value",
                    "Asset Status and Monitoring",
                ]
            },
            {
                modulename: "Sales Order Taking Module",
                content : [
                    "Entry of Sales Invoice (By Mode, Type of Sales)",
                    "Sales Return and Adjustment Entry",
                    "Sales Summary Report",
                    {
                        subcontent: [
                            {
                                contentName: "Sales Detail Report",
                                sub: [
                                    "Parametric and Date Range Report",
                                    "Sales Demographic Report",
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                modulename: "Inventory Management System",
                content: [
                    "product Master List Management Entry",
                    "Price Update and Discounting",
                    "purchase Order Entry",
                    "Beginning of Stock Entry",
                    "Recieving Report Entry",
                    "Stocks Transfer and Withdrawals Entry",
                    "Inventory Adjustment and Returns Entry",
                    {
                        subcontent: [
                            {
                                contentName: "Inventory Computations and Reports",
                                sub:[
                                    "Summary of Receiving Reports and Payables",
                                    "List of Available Items",
                                    "Per Item Inventory Level",
                                    "Current Inventory Level of Every Product",
                                    "Re-order Level Items Report",
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                modulename: "Payroll Module",
                content: [
                    "General Payroll Computation and Report",
                    "Employee Rate and Incentives and Computations",
                    "Employee Deductions and Loan Entry",
                    "Pay Slip and Net Take Pay Certificate",
                    "Daily Time Record (DTR) Uploading and Monitoring",
                ]
            },
            {
                modulename: "HR 201 Module",
                content: [
                    "Employee Profiling",
                    "Demographic Reports",
                    "Sanctions and Violations Entry",
                    "Plantilla and Staffing Monitoring",
                ]
            }
        ]
    },
    {
        projectTitle: "Integrated Restaurant Information System (iRIS)",
        projectDescription: "Customed design for every restaurant be it in a fastfood chain type or a fine dine-in scenario. It can be integrated to other sub module like standard Payroll Module with direct to computer Daily Time Recording, Standard Disbursement and Expenses Module, Menu/Stocks Inventory Module.", 
        content: [
            {
                modulename: "Features",
                content:[
                    "Order taking module",
                    "Table Management",
                    "Functions management",
                    "Sales and Order Summary",
                ]
            },
            {
                modulename: "Inventory Module",
                content: [
                    "Receiving Report Entry",
                    "Adjustment Entry",
                    "Daily/Periodic Inventory Monitoring",
                ]
            },
            {
                modulename: "Disbursement and Expenses Module",
                content: [
                    "Voucher and Disbursement Entry Form",
                    "Expenses Monitoring",
                    "Issuances of Checks",
                    "Reporting"
                ]
            }
        ]
    },
];
