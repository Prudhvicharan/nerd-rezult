/**
 * Mock API service for generating expert profiles
 * Simulates API calls to generate profiles from different input methods
 */

/**
 * Generate a profile from chat conversation
 * @param {array} messages - Array of message objects
 * @returns {Promise<object>} - Generated profile data
 */
export const generateProfileFromChat = (messages) => {
  return mockApiCall({
    name: "AI Expert",
    expertise: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
    experience: "5+ years",
    skills: ["TensorFlow", "PyTorch", "MLOps", "Python", "Transformers"],
    projects: [
      {
        title: "Advanced Recommendation System",
        description:
          "Built a hybrid recommendation system using collaborative filtering and content-based approaches",
        impact: "Increased conversion rates by 28%",
        technologies: ["TensorFlow", "Python", "AWS"],
      },
      {
        title: "Computer Vision for Manufacturing",
        description: "Developed a defect detection system using deep learning",
        impact: "Reduced manual QA time by 65%",
        technologies: ["PyTorch", "OpenCV", "CUDA"],
      },
    ],
    education: "Master's in Computer Science",
    publications: 2,
  });
};

/**
 * Generate a profile from portfolio links
 * @param {object} portfolioLinks - Object with links to professional profiles
 * @returns {Promise<object>} - Generated profile data
 */
export const generateProfileFromPortfolio = (portfolioLinks) => {
  return mockApiCall({
    name: "Alex Johnson",
    expertise: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
    experience: "7+ years",
    skills: ["TensorFlow", "PyTorch", "MLOps", "Python", "Transformers"],
    projects: [
      {
        title: "E-commerce Recommendation Engine",
        description:
          "Built a hybrid recommendation system using collaborative filtering and content-based approaches",
        impact: "Increased conversion rates by 28%",
        technologies: ["TensorFlow", "Python", "AWS"],
      },
      {
        title: "Computer Vision for Manufacturing QA",
        description: "Developed a defect detection system using deep learning",
        impact: "Reduced manual QA time by 65%",
        technologies: ["PyTorch", "OpenCV", "CUDA"],
      },
    ],
    education: "Ph.D. in Computer Science, Stanford University",
    publications: 2,
  });
};

/**
 * Generate a profile from video recording
 * @returns {Promise<object>} - Generated profile data
 */
export const generateProfileFromVideo = () => {
  return mockApiCall({
    name: "Alex Johnson",
    expertise: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
    experience: "7+ years",
    skills: ["TensorFlow", "PyTorch", "MLOps", "Python", "Transformers"],
    projects: [
      {
        title: "E-commerce Recommendation Engine",
        description:
          "Built a hybrid recommendation system using collaborative filtering and content-based approaches",
        impact: "Increased conversion rates by 28%",
        technologies: ["TensorFlow", "Python", "AWS"],
      },
      {
        title: "Computer Vision for Manufacturing QA",
        description: "Developed a defect detection system using deep learning",
        impact: "Reduced manual QA time by 65%",
        technologies: ["PyTorch", "OpenCV", "CUDA"],
      },
    ],
    education: "Ph.D. in Computer Science, Stanford University",
    publications: 2,
  });
};

/**
 * Generate a profile from audio recording
 * @returns {Promise<object>} - Generated profile data
 */
export const generateProfileFromAudio = () => {
  return mockApiCall({
    name: "Alex Johnson",
    expertise: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
    experience: "7+ years",
    skills: ["TensorFlow", "PyTorch", "MLOps", "Python", "Transformers"],
    projects: [
      {
        title: "E-commerce Recommendation Engine",
        description:
          "Built a hybrid recommendation system using collaborative filtering and content-based approaches",
        impact: "Increased conversion rates by 28%",
        technologies: ["TensorFlow", "Python", "AWS"],
      },
      {
        title: "Computer Vision for Manufacturing QA",
        description: "Developed a defect detection system using deep learning",
        impact: "Reduced manual QA time by 65%",
        technologies: ["PyTorch", "OpenCV", "CUDA"],
      },
    ],
    education: "Ph.D. in Computer Science, Stanford University",
    publications: 2,
  });
};

/**
 * Submit an expert application
 * @param {object} profileData - The profile data to submit
 * @returns {Promise<object>} - Response with success status
 */
export const submitApplication = (profileData) => {
  return mockApiCall({
    success: true,
    message: "Application submitted successfully!",
  });
};

/**
 * Helper function to simulate API calls with a delay
 * @param {object} data - The data to return
 * @param {number} delay - Delay in milliseconds
 * @returns {Promise<object>} - The data after the delay
 */
const mockApiCall = (data, delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
