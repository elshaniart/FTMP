import { useState } from "react";

interface FormData {
  name: string;
  profileImage?: File | null;
  height: number;
  weight: number;
  gender: "male" | "female";
  workoutType: string;
  exerciseFrequency: string;
  targetWeight: number;
  startingBodyFat: number;
  bodyFat: number;
}

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    profileImage: null,
    height: 0,
    weight: 0,
    gender: "male",
    workoutType: "",
    exerciseFrequency: "",
    targetWeight: 0,
    startingBodyFat: 0,
    bodyFat: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    // Send formData to backend
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: Basic Info</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <input
              type="file"
              name="profileImage"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  profileImage: e.target.files?.[0] || null,
                })
              }
              className="w-full p-2 mb-2 border"
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Step 2: Workout Preferences
            </h2>
            <input
              type="text"
              name="workoutType"
              placeholder="Workout Type"
              value={formData.workoutType}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <input
              type="text"
              name="exerciseFrequency"
              placeholder="Exercise Frequency"
              value={formData.exerciseFrequency}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 3: Set Goals</h2>
            <input
              type="number"
              name="targetWeight"
              placeholder="Target Weight"
              value={formData.targetWeight}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <input
              type="number"
              name="startingBodyFat"
              placeholder="Starting Body Fat %"
              value={formData.startingBodyFat}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <input
              type="number"
              name="bodyFat"
              placeholder="Current Body Fat %"
              value={formData.bodyFat}
              onChange={handleChange}
              className="w-full p-2 mb-2 border"
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
