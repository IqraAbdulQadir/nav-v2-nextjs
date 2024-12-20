
# Next.js Navigation Demo: Using `Link` Component and `useRouter` Hook

This project demonstrates the usage of the **`Link` component** and the **`useRouter` hook** in **Next.js** for efficient page navigation.

## Features

- **`Link` Component**: Provides client-side navigation between pages without full page reloads.
- **`useRouter` Hook**: Allows programmatic navigation within the application and access to route-related information.

## Project Overview

In this project, you’ll find:
- A **Home** page
- An **About** page
- A **Contact** page

The pages are navigated through:
- **`Link`** component for client-side navigation.
- **`useRouter`** hook for programmatic routing, allowing dynamic navigation based on user actions.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** (comes bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IqraAbdulQadir/your-repository-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repository-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. Open your browser and visit `http://localhost:3000`.

You should see a basic navigation menu that allows you to switch between **Home**, **About**, and **Contact** pages.

## Code Walkthrough

### **Link Component**

The `Link` component in Next.js enables client-side navigation. For example, the following code creates a link to the About page:

```jsx
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);
```

### **useRouter Hook**

The `useRouter` hook allows programmatic navigation. For example, you can navigate to the About page when a button is clicked:

```jsx
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={navigateToAbout}>Go to About Page</button>
    </div>
  );
};

export default HomePage;
```

### **Project Structure**

```
/pages
  /index.tsx        # Home page
  /about.tsx        # About page
  /contact.tsx      # Contact page
/components
  Navbar.tsx        # Navigation bar with Link components
```

## Contributing

Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License.

