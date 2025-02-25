import { sub } from "framer-motion/client";

export const allProducts = [
  {
    projectTitle: "Cooperative Management Information System (CMIS)",
    projectDescription:
      "A customize cooperative management system designed for stand alone or integrated modules. Its purpose is to help the end users manage to effectively and efficiently. Reduce the multiple recording and faster report consolidation in the aspect of Financial, Goods, and Services including other allied areas.",      
    icon : '/Icons/CMIS.webp',
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
    projectDescription:
      "A customized office management system designed for stand alone or integrated modules. Its purpose is to help the end users to manage effectively and efficiently. Reduce the multiple recording and faster report consolidation in the aspect of Financial, Goods and Services including other allied areas.",
    icon:"/Icons/iOAS.webp",
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
    projectTitle: "Integrated Restaurant Information System (iRIS)",
    projectDescription:
      "Customed design for every restaurant be it in a fastfood chain type or a fine dine-in scenario. It can be integrated to other sub module like standard Payroll Module with direct to computer Daily Time Recording, Standard Disbursement and Expenses Module, Menu/Stocks Inventory Module.",
    icon:"/Icons/iRIS.webp",
    modules: [
      {
        modulename: "Features",
        content: [
          "Order taking module",
          "Table Management",
          "Functions management",
          "Sales and Order Summary",
        ],
      },
      {
        modulename: "Inventory Module",
        content: [
          "Receiving Report Entry",
          "Adjustment Entry",
          "Daily/Periodic Inventory Monitoring",
        ],
      },
      {
        modulename: "Disbursement and Expenses Module",
        content: [
          "Voucher and Disbursement Entry Form",
          "Expenses Monitoring",
          "Issuances of Checks",
          "Reporting",
        ],
      },
    ],
  },
  {
    projectTitle: "Fleet Management and Dispatching Control System (eFMDSys)",
    projectDescription:
      "Designed to help the Department of Agriculture's General Suport Services Department(GSS). This include Vehicle Trip and Scheduling Management and Monitoring. With its sub module includes Vehicle and Driver Profiling and Fleet/Vehicle Repair and Preventive Maintenance",
    icon:"/Icons/eFMDSys.webp",
    modules: [
      {
        modulename: "Features",
        content: [
          "Fleet/Vehicle Listing",
          "Vehicle Category, Model, Type, Make List",
          "Vehicle Condition and Status",
          "Driver List",
          "Suppliers/Payee List",
        ],
      },
      {
        modulename: "Transactions",
        content: [
          "Vehicle Pre-Inspection Report",
          "Vehicle Repair & Preventive Maintenance",
          "Vehicle Waste Material Report",
          "Vehicle-Fleet Dispatching Dashboard",
          "Create Request for Vehicle Reservation",
          "Confirm-Disapproved Reservation",
          "Trip Ticket",
          "Create Travel Order",
        ],
      },
      {
        modulename: "Reports",
        content: [
          "Vehicle Profiling Report",
          "Vehicle Dispatching Report",
          "Monthly Report of Travel",
          "Waste Material Summary List",
          "GSIS & LTO Expiration Report",
        ],
      },
      {
        modulename: "Travel Monitoring and Notifications",
        content: [
          "Dashboard Scheduled Travel Monitoring",
          "Notifications, Updates and Travel Changes",
        ],
      },
    ],
  },
  {
    projectTitle: "Integrated Payroll Information System (iPIS)",
    projectDescription: [
      "Designed to cater to the demands of more than ten thousand (10,000) employees. This includes the first step of Payroll Computations, Daily Time Recording, Rate Set-up, Mandatory Deductions, Loans up to Printing of Individual PaySlip as well as Bank Transmittal Report.",
      "It is a mixed platform interface, web-based and desktop application for a more robust, reliable, and scalable system.",
    ],
    icon:"/Icons/iPIS.webp",
    modules: [
      {
        modulename: "Features",
        content: [
          "Employee Master File Entry Form",
          "Rate and Compensation Entry with History",
          "Mandatory and Other Deduction Entry",
          "Payroll Generation and Reporting",
          "Bank Transmittal Report",
          "Direct Bank File Exporting for ATM and Non ATM",
        ],
      },
      {
        modulename: "Daily Time Record Module",
        content: ["Uploading and Importing Biometric Data"],
      },
      {
        modulename: "HR 201 File Module",
        content: [
          "Employee Record",
          "Education and Eligibility Data",
          "Trainings and Seminars Data",
          "Applicants and Hired History",
          "Demographic and Statistics Information",
          "Sanctions, Violations, and Corporate Policy",
          "Plantilla, Re-assignments, and Staffing",
        ],
      },
      {
        modulename: "Loans Module",
        content: [
          "Employee Ledger and Monitoring",
          "Deductions Schedule and Payments",
        ],
      },
      {
        modulename: "Other Payments Computations",
        content: [
          "Last Pay / Resigned Pay Computation",
          "Retirement Computation Pay",
          "13th Month Pay Module",
        ],
      },
    ],
  },
  {
    projectTitle: "Procurement Document Filing System (PDFSys)",
    projectDescription:
      "Designed to ease the Procurement Documents and other related documents of Department of Agricultures Bids and Awards Committee (BAC A1, A2, and A3). With the scanned - electronic copy of all the documents in every Procurement Transactions this can help the end user work efficiency and daily throughput.",
    icon:"/Icons/PDFSys.webp",
    modules: [
      {
        modulename: "Features",
        content: [
          "Entry of Documentary Requirement",
          "Mode of Procurement",
          "Document Type",
          "Supplier List",
          {
            subcontent: [
              {
                contentName: "By Mode of Procurement",
                sub: [
                  "Alternative Mode of Procurement (AMP)",
                  "National Competitive Bidding (NCB)",
                ],
              },
              {
                contentName: "By Type",
                sub: ["INFRA", "GOODS", "SERVICES", "CONSULTANCY"],
              },
            ],
          },
        ],
      },
      {
        modulename: "Transactions",
        content: ["Manage New Document (Scan Document)", "Find Document"],
      },
      {
        modulename: "Administrative",
        content: ["User Management List", "Personnel and Designation List"],
      },
      {
        modulename: "Archived Documents",
        content: [
          "Document Archiving for (10 Years above)",
          "Find Archived Documents",
        ],
      },
    ],
  },
  {
    projectTitle: "ELECTRONIC PROPERTY INVENTORY SYSTEM (ePinSys)",
    projectDescription: [
      "Designed to give ease and solve the complexity of monitoring, tracking all the organizations Property, Plant and Equipment. Its key features include Unique Asset/Property Number Assignment, Direct Sticker Printing of Asset Number, Straight Depreciation Computation and Net Book Value and Standard to Custom made Monitoring and Reporting.",
      "Its Report Print out and forms are based on the latest Government Accounting Form (GAM). The systems Interface and processes designed and consolidated according to different end users. It has a third party module using mobile devices for convenient Yearly Physical Count Inventory intended for multiple areas and office sites.",
      "The module also includes the Archiving of Asset for Expired Items and Gate Pass Entry and Issuance.",
    ],
    icon:"/Icons/ePinSys.webp",
    modules: [
      {
        modulename: "feature",
        content: [
          "Entry of Article List and Classification",
          "Article Brand, Unit of Measure and Type",
          "Property Master List (By Status and Division, Office)",
          "Funding Source List",
          "Depreciation Monitoring and Net Book Value",
          "List of Personnel Assigned",
          "Suppliers List",
          "Property Status",
          "Fund Cluster List",
          "Division- Office/OU's/Department List",
          "Building, Room/Section/Cubicle List",
        ],
      },
      {
        modulename: "Transactions",
        content: [
          "Pre-Inspection Report",
          "Repair and Preventive Maintenance",
          "PAR/ICS Renewal",
          "Property Transfer",
          "Property update",
          "Property, Plant & Equipment (PPE) Ledger Card",
          "Biological Assets Property Card",
        ],
      },
      {
        modulename: "Reports",
        content: [
          "Report of Physical Count of Property, Plant and Equipment (RPCPPE)",
          "Expired Small Items Inventory",
          "Property Transfer Report",
          "Waste Material Report",
          "Report of Lost, Stolen, Damage or Destroyed Property (RLSDDP)",
          "Report of Inventory & Inspection Report of Unserviceable Property (IIRUP)",
          "Property Card Report",
        ],
      },
      {
        modulename: "Archiving",
        content: [
          "Yearly Schedule for Expired Small Items",
          "Unserviceable Articles",
        ],
      },
      {
        modulename: "Gate Pass",
        content: [
          "Entry of Gate Pass Form",
          "Monitoring of Borrowed Article/Property",
        ],
      },
    ],
  },
  {
    projectTitle: "ELECTRONIC PROCUREMENT SYSTEM (eProcSys)",
    projectDescription: [
      "Customized design in order to meet the demand and processes of the Philippine Republic Act R.A. 9184, known as 'An Act Providing for the Modernization, Standardization and Regulation of the Procurement Activities of the Government and for other Purposes,' otherwise known as the Government Procurement Reform Act.",
      "Its report printouts and forms are based on the latest Government Accounting Form (GAM). The system's interface and processes are designed according to the flow of procurement (specifically for the Department of Agriculture), aiming to minimize the multiple encoding of PPMP, consolidation of APP reports, uniform item costing and pricing, procurement monitoring, APCPI requirements, and reports.",
      "The module also includes inventory monitoring of office supplies and materials, covering issuance, monitoring, and its equivalent reports. Additionally, it provides templates for forms such as Disbursement Voucher, Obligation Request, and BURS Form.",
    ],
    icon:"/Icons/eProcSys.webp",
    modules: [
      {
        modulename: "Features",
        content: [
          "Entry of PPMP",
          "Creation of Purchase Request (PR)",
          "Creation of Agency Procurement Request (APR)",
          "Request For Quotation (RFQ) Entry Form",
          "Abstract of Quotation Entry Form",
          "Abstract of Quotation Awarding",
          "Create Purchase Order",
          "Inspection and Acceptance Report",
          "Create Job Order Form",
          "Pre-Audit Report",
        ],
      },
      {
        modulename: "Templates for",
        content: [
          "Disbursement Voucher",
          "Obligation Request",
          "Budget Utilization Request and Status (BURS)",
        ],
      },
      {
        modulename: "Procurement Monitoring",
        content: [
          "AMP/NCB Monitoring for BAC A1, A2, A3",
          "Deliverables",
          "Procurement Monitoring Report",
          "ACPCI Requirements",
        ],
      },
      {
        modulename: "Reports and Output",
        content: [
          "PPMP Report (By Division, OU's, Department)",
          "PPMP Report - Revised",
          "User Validation Report",
          "BAC Validation Report",
          "Program Coordinator Validation Report",
          "Per Operating Unit Report",
          "APP CSE Report",
          "APP Non-CSE Report",
          "APP BAC Verification Report",
          "Per Expenditure Report",
          "Item Master List Report",
        ],
      },
      {
        modulename: "Supplies Inventory Monitoring Module",
        content: [
          "Beginning Balance Entry",
          "Receiving Report Entry",
          "Requisition and Issuance Slip Entry",
          "Electronic Stock Card",
          "Report of Supplies and Materials Issued",
          "Report on Physical Count of Inventories",
        ],
      },
    ],
  },
  {
    projectTitle: "Integrated Inventory-Warehousing and Sale System (iIWSS)",
    projectDescription: "Designed to monitor stocks receiving and issuances/sales. It can run on an integrated or stand-alone module. Customized reporting for Sales, Inventory, and Stocks Demographic.",
    icon:"/Icons/iIWSS.webp",
    modules: [
      {
        modulename: "Features",
        content: [
          "Product/Item Maintenance",
          "Product Category and Classification",
          "Set up for Beginning Balances",
          "Receiving Report Entry",
          "Withdrawals, Issuances and Transfers Entry",
          "Adjustment and Returns Entry",
          "Electronic Stock Card",
          {
            subcontent: [
              {
                contentName: "Reporting",
                sub: [
                  "Ending Inventory Count",
                  "Re-Order Level Product Report",
                  "Summary of Issuances, Withdrawals and Transfers",
                ],
              },
            ],
          },
        ],
      },
      {
        modulename: "Sales Order Taking Module",
        content: [
          "Entry of Sales Transactions",
          "Sales Return",
          {
            subcontent: [
              {
                contentName: "Reporting",
                sub: [
                  "Sales Summary Report",
                  "Per Product Category Sales Report",
                  "Top/Best Selling Items",
                ],
              },
            ],
          },
        ],
      },
      {
        modulename: "Procurement Monitoring",
        content: [
          "AMP/NCB Monitoring for BAC A1, A2, A3",
          "Deliverables",
          "Procurement Monitoring Report",
          "ACPCI Requirements",
        ],
      },
      {
        modulename: "Reports and Output",
        content: [
          "PPMP Report (By Division, OU's, Department)",
          "PPMP Report - Revised",
          "User Validation Report",
          "BAC Validation Report",
          "Program Coordinator Validation Report",
          "Per Operating Unit Report",
          "APP CSE Report",
          "APP Non-CSE Report",
          "APP BAC Verification Report",
          "Per Expenditure Report",
          "Item Master List Report",
        ],
      },
      {
        modulename: "Supplies Inventory Monitoring Module",
        content: [
          "Beginning Balance Entry",
          "Receiving Report Entry",
          "Requisition and Issuance Slip Entry",
          "Electronic Stock Card",
          "Report of Supplies and Materials Issued",
          "Report on Physical Count of Inventories",
        ],
      },
    ],
  },
  // {
  //   New Projects Here
  // }
];

// Template

// {
//   projectTitle: "",
//   projectDescription: [
//     "",
//     "",
//   ],
//   modules: [
//     {
//       modulename: "module 1",
//       content: [
//         "module content 1",
//         "module content 2",
//         "module content 3",
//         {
//           subcontent: [
//             {
//               contentName: "module content 4 a module with sub content",
//               sub: [
//                 "module sub content 1",
//                 "module sub content 2",
//               ],
//             },
//             {
//               contentName: "module content 5 a module with sub content",
//               sub: [
//                 "module sub content 1",
//                 "module sub content 2",
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       modulename: "module 2",
//       content: [
//         "content 1",
//         "content 2",
//         "content 3",
//       ],
//     },
//   ],
// },
