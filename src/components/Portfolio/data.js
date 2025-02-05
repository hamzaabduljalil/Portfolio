import royal1 from "../../assets/project/royaldom/page1.png";
import royal2 from "../../assets/project/royaldom/page2.png";
import royal3 from "../../assets/project/royaldom/page3.png";
import royal4 from "../../assets/project/royaldom/page4.png";
import royal5 from "../../assets/project/royaldom/page5.png";
import todo1 from "../../assets/project/todo/page1.png";
import todo2 from "../../assets/project/todo/page2.png";
import expensesapp1 from "../../assets/project/expensesqpp/page1.png";
import expensesapp2 from "../../assets/project/expensesqpp/page2.png";
import ReactMeals1 from "../../assets/project/ReactMeals/page1.png";
import ReactMeals2 from "../../assets/project/ReactMeals/page2.png";
import guessmynumber1 from "../../assets/project/guessmynumber/page1.png";
import guessmynumber2 from "../../assets/project/guessmynumber/page2.png";
import guessmynumber3 from "../../assets/project/guessmynumber/page3.png";
import bank1 from "../../assets/project/bank/page1.png";
import piggame1 from "../../assets/project/piggame/page1.png";
import piggame2 from "../../assets/project/piggame/page2.png";
import mapty1 from "../../assets/project/Mapty/page1.png";
import mapty2 from "../../assets/project/Mapty/page2.png";
import img1 from "../../assets/project/page1.png";

export const data = [
  {
    id: 2,
    title: "Royal Dom",
    summary:
      "FrontEnd web application developed using React,React-Router and Bootstrab",
    Language: ["React", "JavaScript"],
    img: [royal1, royal2, royal3, royal4, royal5],
    Description:
      " This modern and responsive website, built using React and Bootstrap, serves as a professional online presence for an engineering office. It is designed to provide visitors with a seamless and intuitive browsing experience across all devices, ensuring accessibility and ease of use.The website consists of four well-structured pages that showcase the office’s expertise, services, and completed projects. A key feature is an interactive slideshow that visually highlights the engineering projects, giving potential clients an engaging way to explore the firm’s work. The layout is clean and professional, with a user-friendly interface that emphasizes functionality and aesthetics.By leveraging the power of React for dynamic content rendering and Bootstrap for a mobile-friendly design, this website effectively presents the engineering office’s achievements while maintaining a sleek and modern look. ",
    github: "soon",
    hosting: "soon",
  },
  {
    id: 1,
    title: "Kids-School",
    summary:
      "FrontEnd web application developed using React and React-Router and tailwind",
    Language: ["React", "JavaScript", "Tailwind"],
    img: [img1],
    Description:
      " This interactive and educational web application is designed to engage children in learning about technology through a combination of quizzes, videos, and exercises. Built with React, the platform offers a fun and intuitive user experience, making tech education accessible and enjoyable for young learners.The website features a variety of engaging content, including instructional videos that explain key technological concepts, interactive quizzes to test knowledge, and hands-on exercises to reinforce learning. Each section is designed to be visually appealing and easy to navigate, ensuring a seamless experience for children of different ages.With a responsive layout and dynamic content, this platform serves as an excellent tool for young learners to explore technology in an interactive way, encouraging curiosity and enhancing their problem-solving skills.",
    github: "dsf",
    hosting: "dsfds",
  },

  {
    id: 3,
    title: "Todo-App",
    summary: "FrontEnd web application developed using React and TypeScript",
    Language: ["React", "TypeScript", "JavaScript"],

    img: [todo1, todo2],
    Description:
      "It is a simple and effective web application that helps users organize their daily tasks. Allows users to add, edit, and delete tasks, as well as mark completed and incomplete tasks.Technologies used:Core framework: React .Programming language: JavaScript (ES6+) State management: React Hooks(useState, useEffect) . Interface design: CSS Modules or Styled Components .Application structure: The application consists of one main component: Todo Component: Displays a list of tasks, through which a task can be added, deleted, and determined if it has been completed. Data flow and state management: Status Management: useState is used to manage task status, such as current task list and task status (completed or incomplete).LocalStorage: useEffect is used with LocalStorage to save tasks so that they remain saved even after the page is reloaded.Mobility:The application is a single page application, and does not require a complex navigation system.Safety:Since the app is simple and does not require login or sensitive data, there are no major security needs.Performance and improvements:Lazy loading: Not required due to the simplicity of the application.Improved Performance: Using React efficiently ensures fast and smooth performance.((Conclusion)):To Do List app provides a simple and easy-to-use user interface to manage daily tasks, helping users organize their lives effectively.",
    github: "https://github.com/hamzaabduljalil/Todos",
    hosting: "https://hamzaabduljalil.github.io/Todos/",
  },
  {
    id: 4,
    title: "Expense-App",
    summary: "FrontEnd web application developed using React",
    Language: ["React", "JavaScript"],

    img: [expensesapp1, expensesapp2],
    Description:
      "This responsive web application, built using React, provides users with an intuitive and organized way to track their expenses. The interface allows users to add new expenses by entering a title, amount, and date. A filtering option enables users to view expenses by year, helping them analyze their spending habits effectively.The application also features a dynamic bar chart visualization, displaying monthly expenses to give users a clear financial overview. If no expenses are found for the selected year, a message is displayed to keep the interface informative and user-friendly.With a modern and visually appealing design, the expense tracker ensures a seamless experience across all devices, making budgeting easier and more efficient for users.",
    github: "dsf",
    hosting: "https://hamzaabduljalil.github.io/ExpensesApp/",
  },
  {
    id: 5,
    title: "Expense-App",
    summary: "FrontEnd web application developed using React",
    Language: ["React", "JavaScript"],

    img: [expensesapp1, expensesapp2],
    Description:
      "This responsive web application, built using React, provides users with an intuitive and organized way to track their expenses. The interface allows users to add new expenses by entering a title, amount, and date. A filtering option enables users to view expenses by year, helping them analyze their spending habits effectively.The application also features a dynamic bar chart visualization, displaying monthly expenses to give users a clear financial overview. If no expenses are found for the selected year, a message is displayed to keep the interface informative and user-friendly.With a modern and visually appealing design, the expense tracker ensures a seamless experience across all devices, making budgeting easier and more efficient for users.",
    github: "https://github.com/hamzaabduljalil/ExpensesApp",
    hosting: "https://hamzaabduljalil.github.io/ExpensesApp/",
  },
  {
    id: 6,
    title: "React-Meals",
    summary: "FrontEnd web application developed using React",
    Language: ["React", "JavaScript"],
    img: [ReactMeals1, ReactMeals2],
    Description:
      "ReactMeals is a sleek and responsive food ordering web application built using React. It provides users with a seamless way to browse and order delicious meals from a carefully curated menu.The homepage features a visually appealing hero section with a welcoming message, inviting users to choose from a variety of high-quality dishes prepared by experienced chefs. Each meal listing includes a brief description, price, and an easy-to-use quantity selector with an “Add” button for effortless order placement.A shopping cart system is integrated into the interface, allowing users to track their selected items and proceed to checkout smoothly. With a modern design and intuitive navigation, ReactMeals enhances the online food ordering experience, making it convenient and enjoyable for users.",
    github: "https://github.com/hamzaabduljalil/ReactMeals",
    hosting: "https://hamzaabduljalil.github.io/ReactMeals/",
  },
  {
    id: 7,
    title: "Guess-My-Number",
    summary: "FrontEnd web application developed using JavaScript",
    Language: ["JavaScript", "WebDesign"],
    img: [guessmynumber1, guessmynumber2, guessmynumber3],
    Description:
      'This fun and interactive web-based game challenges players to guess a randomly generated number between 1 and 20 within only five attempts. Built using JavaScript, the game offers a simple yet engaging experience with real-time feedback to guide players toward the correct answer.Players enter their guesses, and the game provides hints such as "Too High" or "Too Low" to help them refine their choices. A limited number of tries adds an element of excitement and strategy. The interface is designed to be user-friendly and responsive, ensuring smooth gameplay across different devices.With its minimalist design and engaging logic, the Guess-My-Number game is a great way to test and improve number-guessing skills while having fun!',
    github: "https://github.com/hamzaabduljalil/Guess-My-Number",
    hosting: "https://hamzaabduljalil.github.io/Guess-My-Number/",
  },
  {
    id: 8,
    title: "pig-game",
    summary: "FrontEnd web application developed using JavaScript",
    Language: ["JavaScript", "WebDesign"],
    img: [piggame1, piggame2],
    Description:
      'Pig Game is a two-player interactive game where participants roll a dice and accumulate points. The objective is to reach 100 points before the opponent. However, rolling a "1" resets the player\'s turn score to zero. Players must strategically decide whether to "Hold" their score or take a risk and continue rolling. The game, built with JavaScript, features a clean and engaging UI, making it an exciting experience for all ages.',
    github: "https://github.com/hamzaabduljalil/Pig-Game",
    hosting: "https://hamzaabduljalil.github.io/Pig-Game/",
  },
  {
    id: 9,
    title: "Mapty-app",
    summary: "FrontEnd web application developed using JavaScript",
    Language: ["JavaScript", "WebDesign"],
    img: [mapty1, mapty2],
    Description:
      "Mapty is a web application that allows users to track and log their running activities with an interactive map. Built using JavaScript and Leaflet, this application provides a seamless way for users to record and analyze their workouts.The platform enables users to select and mark their running locations, log workout details such as distance, duration, pace, and steps per minute, and visualize their progress over time. With an intuitive and modern interface, Mapty makes fitness tracking simple and engaging.Designed for ease of use and accessibility, Mapty features a clean layout and a dark-themed dashboard for a smooth user experience. Whether you're a casual jogger or a dedicated runner, this application helps you stay motivated and organized in your fitness journey.",
    github: "https://github.com/hamzaabduljalil/Mapty",
    hosting: "https://hamzaabduljalil.github.io/Mapty/",
  },
  {
    id: 10,
    title: "bank-app",
    summary: "FrontEnd web application developed using JavaScript",
    Language: ["JavaScript", "WebDesign"],
    img: [bank1],
    Description:
      "his modern and user-friendly banking web application enables users to manage their finances efficiently. Built with a sleek and intuitive design, the platform allows users to perform essential banking operations such as transferring money and requesting loans with ease.The homepage provides a clear overview of the user’s current balance, recent transactions, and financial insights. Transactions, including deposits and withdrawals, are displayed in an organized manner, giving users a transparent view of their account activity.Key features include:Money Transfers: Users can send money to other accounts quickly by entering the recipient’s details and the transfer amountLoan Requests: A simple loan request system allows users to apply for financial support instantlyAccount Management: Users can monitor their income, expenses, and interest calculations in real-timeWith a modern UI and seamless functionality, this banking web application enhances financial management while ensuring a smooth and secure user experience.",
    github: "https://github.com/hamzaabduljalil/Bank",
    hosting: "https://hamzaabduljalil.github.io/Bank/",
  },
];
