# CS81-final-project

## Interactive Web Application: Personal Budget Tracker

## REPO LINK: 
https://github.com/keani-julian/cs81-final-project 

## Instructions – How to Use

1.  Click link to access project. 
2.  Enter a description of the transaction.
3.  Enter the amount.
4. 	Select the category–income or an expense.
5. 	Click "Add" CTA button. 
6.	View auto-populated totals and balance from each category instantly, along with your expense to income ratio
    percentage. 
7.	Refresh the page — your data will remain saved.
8.  Delete any entries in either category (income or expense) to make adjustments as needed. 


## Overview 
# Final Project Summary

For my final project, the Personal Budget Tracker is an interactive React web application that allows users to track income and expenses, calculate entered totals, and visualize their financial data in a simple and user-friendly interface.

This project demonstrates literacy of core JavaScript concepts, React fundamentals, DOM interaction through component state, and modern front-end best practices including component-based architecture, form validation, local data persistence, and visual UI enhancements.

The application enables users to enter financial transactions in two categories (Expenses and Income), view categorized data in tables, and persist information using localStorage so data remains available after refreshing the page.

# Key Features & Functionality 

*Income and Expense Tracking* 
- Users can add income and expense entries through a form.
- Each entry includes description and amount.
- Entries are displayed dynamically in organized tables.

*Currency Formatting*
- All financial values are displayed in standard USD format (e.g., $0.00) for improved UI clarity.

*Real-Time Calculations*
- Automatically calculates:
- Total Income
- Total Expenses
- Net Balance

*Form Validation*
- Prevents submission of:
- Empty descriptions
- Invalid or negative amounts
- Ensures clean and accurate financial data.

*Data Persistence (localStorage)*
- Uses browser localStorage to store transactions.
- Data remains saved even after page refresh or browser close.

*React Hooks*
- useState manages:
- Income entries
- Expense entries
- Form inputs
- useEffect synchronizes state with localStorage.

*Component-Based Architecture*
The application is divided into reusable React components:
- BudgetForm – Handles user input and validation
- BudgetTable – Displays income and expense data
- App – Manages global state and logic

*UI & Visual Enhancements*
- Responsive layout
- Tables displayed side-by-side
- Smooth CSS animation for improved visual feedback
- Clean and user-friendly interface styling with CSS

## Technologies Used

*JavaScript*
- Functions
- Arrays
- Objects
- Higher-order functions (map, reduce, filter)

*React*
- Functional components
- useState
- useEffect
- Props and state management

*HTML5*

*CSS3*
- Layout styling
- Animations
- Visual effects

*localStorage API*
-  Browser-based data persistence

*Git & GitHub*
*Deployment Platform:* 
- Vercel – link: 