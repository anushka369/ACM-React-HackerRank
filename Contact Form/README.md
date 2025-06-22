# React: Contact Form

You need to create a simple React application called "Contact Form" that collects user information and displays it below the form upon submission. This task will help you practice handling form inputs, validation, and conditional rendering in React.

## Detailed Requirements

### 1. Form Structure:
The form should have the following fields:
- Name: Text input for the user's name.
- Email: Text input for the user's email address.
- Message: Textarea for the user's message.

### 2. Form Submission:
There should be a "Submit" button to submit the form.

### 3. Form Validation:
Validate that none of the fields are empty upon submission.
If any field is empty, display an error message: "All fields are required." The form should not be submitted.

### 4. Displaying Submitted Data:
If the form is successfully submitted, display the entered information below the form.
Clear the input fields after a successful submission.

## Sample Interaction

### Initial State
1. The form is displayed with empty fields.
2. No submitted information or error messages are shown.

### User Action 1
1. User fills in all fields (Name: "John Doe", Email: "john@example.com", Message: "Hello there!").
2. User clicks the "Submit" button.
3. The entered information ("John Doe", "john@example.com", "Hello there!") is displayed below the form.
4. The input fields are cleared.

### User Action 2
1. User fills in some fields and leaves others empty.
2. User clicks the "Submit" button.
3. No information is displayed.
4. An error message "All fields are required." is shown.
