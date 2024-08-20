This project is a dynamic "Contact Us" page built using React.js, focusing on modular design and component reuse. The page is styled with CSS modules to ensure scoped and maintainable styles. The project demonstrates several key concepts:

CSS Modules for Scoped Styling: Each React component has its own CSS module file (.module.css), ensuring that styles are isolated to their respective components, avoiding conflicts and enhancing maintainability.

Reusable Button Component: A single Button.jsx component is used across the page, with props allowing for customization of the button's text and functionality. This showcases how to create flexible, reusable UI elements in React.

Form Handling with useState: The ContactForm.jsx component uses the useState hook to manage form state. It handles form submissions and updates the component state based on user input, illustrating how to manage form data in a React application.

Dynamic Data Display: Upon clicking the submit button, the form data is captured and displayed, demonstrating how to dynamically update the UI based on user interactions.

Project Structure:
-----------------
Button
Button.jsx
Button.module.css

ContactForm
ContactForm.jsx
ContactForm.module.css

ContactHeader
ContactHeader.jsx
ContactHeader.module.css

Navigation
Navigation.jsx
Navigation.module.css

This project serves as a practical example of how to structure a React application with reusable components, manage state effectively, and apply CSS modules for component-specific styling.

