// Main container
export { default as AIExpertApplication } from "./AIExpertApplication";
export { default as MethodSelector } from "./MethodSelector";

// Method-specific components
export { default as ChatApplication } from "./methods/ChatApplication";
export { default as PortfolioApplication } from "./methods/PortfolioApplication";
export { default as VideoApplication } from "./methods/VideoApplication";
export { default as AudioApplication } from "./methods/AudioApplication";

// Shared components
export { default as ApplicationChat } from "./shared/ApplicationChat";
export { default as ExpertProfile } from "./shared/ExpertProfile";
export { default as RecordingInterface } from "./shared/RecordingInterface";
export { default as ProcessingIndicator } from "./shared/ProcessingIndicator";

// Utils
export { formatTime } from "./utils/formatTime";
export {
  generateProfileFromChat,
  generateProfileFromPortfolio,
  generateProfileFromVideo,
  generateProfileFromAudio,
  submitApplication,
} from "./utils/mockApiService";
