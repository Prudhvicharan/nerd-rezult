import React from "react";
import { Check } from "lucide-react";
import { formatTime } from "../utils/formatTime";

/**
 * Shared recording interface for audio and video recording
 *
 * @param {string} type - "audio" or "video"
 * @param {boolean} isRecording - Whether recording is active
 * @param {number} recordingTime - Recording time in seconds
 * @param {function} startRecording - Function to start recording
 * @param {function} stopRecording - Function to stop recording
 * @param {React.ReactNode} icon - Icon to show (Mic or Video)
 * @param {React.ReactNode} visualizer - Component to visualize recording (optional)
 */
const RecordingInterface = ({
  type = "audio",
  isRecording,
  recordingTime,
  startRecording,
  stopRecording,
  icon,
  visualizer = null,
}) => {
  // If not recording, show instructions
  if (!isRecording) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 text-center">
        <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Record Your {type === "audio" ? "Voice" : "Video"} Application
        </h3>
        <p className="text-gray-600 mb-6">
          In a 2-minute {type === "audio" ? "audio recording" : "video"}, please
          cover:
        </p>

        <ul className="text-left text-gray-600 mb-8 space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Your name and current role</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Your AI expertise and specialized skills</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>One or two significant AI projects you've worked on</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Measurable results or impacts you've achieved</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Why you want to join NerdRezult as an AI expert</span>
          </li>
        </ul>

        <div className="flex justify-center space-x-4">
          <button
            onClick={startRecording}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 flex items-center"
          >
            {icon}
            <span className="ml-2">Start Recording</span>
          </button>
        </div>
      </div>
    );
  }

  // If recording, show active recording UI
  return (
    <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 text-center">
      <div className="relative mb-6">
        <div className="bg-indigo-50 rounded-lg p-8 flex items-center justify-center mb-4">
          {/* Use provided visualizer or default based on type */}
          {visualizer || (
            <div className="recording-indicator flex flex-col items-center justify-center">
              {type === "video" ? (
                <>
                  {React.cloneElement(icon, {
                    className: "h-16 w-16 text-red-600 mb-4",
                  })}
                  <div className="h-3 w-3 bg-red-600 rounded-full animate-pulse"></div>
                </>
              ) : (
                <div className="audio-visualization flex items-end h-32 space-x-1">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-indigo-600 rounded-t"
                      style={{
                        height: `${
                          20 +
                          Math.sin(i * 0.3 + recordingTime * 0.2) * 20 +
                          Math.random() * 40
                        }px`,
                        opacity:
                          0.5 + Math.sin(i * 0.3 + recordingTime * 0.2) * 0.5,
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center text-lg font-semibold text-indigo-900 mb-6">
          {formatTime(recordingTime)} / 2:00
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={stopRecording}
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 flex items-center"
        >
          <span className="h-3 w-3 bg-white rounded mr-2"></span>
          Stop Recording
        </button>
      </div>

      {recordingTime >= 100 && (
        <p className="text-sm text-amber-600 mt-4">
          You're approaching the 2-minute limit. Consider wrapping up your key
          points.
        </p>
      )}
    </div>
  );
};

export default RecordingInterface;
