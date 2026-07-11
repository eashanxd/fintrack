import { Client, Account, Databases, Storage, ID } from "appwrite";

/**
 * Appwrite Client Configuration
 * 
 * This module initializes the Appwrite Client and exports reusable instances
 * of Account, Databases, and Storage services. Configuration is read from
 * environment variables for security and flexibility across environments.
 */

// Initialize the Appwrite Client
const client = new Client();

// Configure the client with environment variables
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// Create and export service instances
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Export the client instance for advanced use cases if needed
export { client, ID };

// Export configuration values for reference (useful for debugging)
export const config = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectName: import.meta.env.VITE_APPWRITE_PROJECT_NAME,
};
