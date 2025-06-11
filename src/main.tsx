import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling for the root render
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log("Starting app render...");
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("App rendered successfully");
} catch (error) {
  console.error("Failed to render app:", error);
  // Add a visible error message to the page
  document.body.innerHTML = `
    <div style="color: white; padding: 20px; font-family: system-ui, -apple-system, sans-serif;">
      <h1>Something went wrong</h1>
      <p>${error.message}</p>
    </div>
  `;
}
