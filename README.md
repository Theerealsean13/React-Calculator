# Dynamic React Calculator

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)

A high-performance, interactive calculator application built with React. This project demonstrates complex state management, mathematical edge-case handling, and modern UI/UX design principles.

## Visual Preview
Images of the React Calculator in a UI Liquid Glass aesthetic design
:Addition
<img width="1331" height="899" alt="Screenshot 2026-05-10 123258" src="https://github.com/user-attachments/assets/7195ba28-14c1-4447-bd29-57b21dfa4359" />
<img width="1335" height="901" alt="Screenshot 2026-05-10 123309" src="https://github.com/user-attachments/assets/7fe9f055-05f7-48e1-b4dc-57ebfed69123" />
:Division
<img width="1336" height="901" alt="Screenshot 2026-05-10 123344" src="https://github.com/user-attachments/assets/6cc4dd4a-4398-4df9-9412-b08cd4852b79" />
<img width="1338" height="901" alt="Screenshot 2026-05-10 123356" src="https://github.com/user-attachments/assets/8a890671-c874-43df-bf21-feb5d8dbfb29" />




## Tech Stack Overview
* **Frontend Framework:** React 18 (via Vite)
* **Language:** JavaScript (ES6+)
* **Styling:** CSS3 (CSS Grid, Flexbox, Glassmorphism)
## Key Features
* **Complex State Management:** Accurately handles multiple numeric inputs, operator chaining, and result evaluation using React's `useState` hook.
* **Edge-Case Handling:** Safely manages common calculator errors such as division by zero, overlapping decimal points, and consecutive operator inputs.
* **Premium UI Design:** Features a custom "Liquid Glass" aesthetic with translucent backgrounds, dynamic background blur, and soft shadows for a modern, tactile feel.
* **Responsive Grid Layout:** Utilizes CSS Grid for a perfectly proportioned, scalable button interface that works seamlessly across desktop and mobile screens.

## Technical Walkthrough: State Logic
Building a calculator in React requires significantly more logic than a simple arithmetic script. This application dynamically tracks and updates three distinct pieces of state simultaneously:
1. `previousOperand`: The first number entered.
2. `currentOperand`: The number currently being typed.
3. `operation`: The selected mathematical operator.

By managing these states, the app ensures that complex, multi-step operations can be evaluated accurately without breaking the UI or losing user data mid-calculation.

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Theerealsean13/dynamic-react-calculator.git
