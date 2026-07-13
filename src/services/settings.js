import { databases } from '../lib/appwrite';
import { Query } from 'appwrite';

// Database and Collection IDs
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = 'settings';

/**
 * Settings Database Service
 * 
 * Handles all settings CRUD operations using Appwrite Databases.
 * All settings are associated with the authenticated user's ID.
 */

/**
 * Get user settings
 * @param {string} userId - Authenticated user's ID
 * @returns {Promise<Object>} - User settings document
 */
export const getSettings = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.equal('userId', userId),
      ]
    );
    
    // Return the first settings document or null
    return response.documents.length > 0 ? response.documents[0] : null;
  } catch (error) {
    console.error('Get settings error:', error);
    throw error;
  }
};

/**
 * Create or update user settings
 * @param {Object} settingsData - Settings data
 * @param {string} userId - Authenticated user's ID
 * @param {string} documentId - Document ID (for updates, null for create)
 * @returns {Promise<Object>} - Created/updated settings document
 */
export const saveSettings = async (settingsData, userId, documentId = null) => {
  try {
    const now = new Date().toISOString();
    const data = {
      ...settingsData,
      userId,
      updatedAt: now,
      update: now,
    };

    if (documentId) {
      // Update existing settings
      const document = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId,
        data
      );
      return document;
    } else {
      // Create new settings
      data.createdAt = now;
      const document = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        'unique()',
        data
      );
      return document;
    }
  } catch (error) {
    console.error('Save settings error:', error);
    throw error;
  }
};

/**
 * Delete user settings
 * @param {string} documentId - Document ID
 * @returns {Promise<Object>} - Deleted document
 */
export const deleteSettings = async (documentId) => {
  try {
    const document = await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId
    );
    return document;
  } catch (error) {
    console.error('Delete settings error:', error);
    throw error;
  }
};
