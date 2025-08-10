import React from "react";
import "./style.css";
import StepBadge from "./ui/StepBadge";
import StepText from "./components/StepText";
import Calculator from "./components/Calculator";
import ResultSection from "./ui/ResultSection";
const App = () => {
  const [step, setStep] = React.useState(1);
  const modalRef = React.useRef(null);
  const scrollToModalTop = () => {
    const el = modalRef.current;
    if (!el) return;
    const offset = 5 * 16; // 10rem
    const targetY = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  };
  const releaseFrequencyToYearly = {
    "1 Day": 365,
    "3 Days": 122,
    "1 Week": 52,
    "2 Weeks": 26,
    "1 Month": 12,
    "3 Months": 4,
  };
  const [data, setData] = React.useState({
    members: 2,
    releaseFrequency: "1 Day",
    hours: 40,
    currentTestedPercentage: 40,
    currentCoveragePercentage: 10,
    bugsMissedPercentage: 5,
    costPerMissedBug: 5000,
    delaysInDays: 3,
    revenueImpact: 2000,
  });
  return (
    <div className="tailwind">
      <div
        className="flex bg-[#FAF4E8] p-16 justify-center items-center"
        ref={modalRef}
      >
        <div id="inside" className="flex flex-col gap-5 w-[61.875rem]">
          {/*step indicator */}
          {step < 4 && (
            <div
              id="stepIndicator"
              className="flex flex-col items-center gap-3 w-full px-4"
            >
              <p className="text-center text-[1.5rem] font-semibold text-[#5C4E47]">
                Step {step} of 3
              </p>
              <div className="w-full h-[0.375rem] rounded-[62.5rem] bg-[#DCD5D0]">
                <div
                  className="h-full bg-[#5C4E47] rounded-xl"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          {/*modal */}
          <div
            id="modal"
            className="w-full border-[2px] border-black rounded-[1.25rem] bg-white px-20 pt-10 pb-14 flex flex-col items-center"
          >
            {step < 4 ? (
              <>
                <div id="top half" className="flex flex-col items-center gap-3">
                  <StepBadge id="icon" step={step} />
                  <StepText id="titleDescription" step={step} />
                </div>
                <div id="calculator" className="w-full">
                  <Calculator step={step} data={data} setData={setData} />
                </div>
              </>
            ) : (
              // result page
              <div className="flex flex-col items-center text-center w-full">
                <p className="pb-24">
                  Here is the value you will get with Spur
                </p>
                <div className="relative w-full flex items-center justify-center pb-32">
                  <svg
                    className="absolute pointer-events-none w-[20rem] max-w-[90%] h-auto"
                    viewBox="0 0 321 321"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.5193 78.0216C32.0169 74.3275 24.5182 75.774 21.2466 81.5376C3.48427 112.83 -3.26944 149.32 2.29614 185.106C8.47857 224.857 29.4086 260.82 60.917 285.832C92.4254 310.845 132.2 323.069 172.317 320.072C212.434 317.074 249.95 299.075 277.392 269.658C304.834 240.241 320.187 201.567 320.393 161.338C320.6 121.109 305.645 82.2793 278.506 52.5824C251.368 22.8855 214.039 4.50148 173.955 1.09227C137.869 -1.9768 101.936 7.29267 71.9513 27.1836C66.4286 30.8472 65.5059 38.4282 69.5729 43.661C73.6399 48.8937 81.1538 49.7886 86.7245 46.1984C111.904 29.971 141.85 22.4484 171.921 25.0059C205.993 27.9038 237.722 43.5302 260.79 68.7726C283.857 94.0149 296.569 127.021 296.394 161.215C296.218 195.409 283.168 228.283 259.842 253.287C236.517 278.291 204.629 293.591 170.529 296.139C136.429 298.687 102.621 288.295 75.8387 267.035C49.0566 245.775 31.2661 215.206 26.011 181.417C21.3731 151.597 26.7996 121.2 41.2407 94.9558C44.4357 89.1494 43.0216 81.7157 37.5193 78.0216Z"
                      fill="#EBF0FF"
                    />
                    <path
                      d="M195.46 99.2362C212.468 95.549 226.892 111.792 221.337 128.217C217.814 138.632 212.691 153.594 208.529 164.986C204.196 176.846 197.682 191.609 194.27 199.178C188.869 211.161 173.406 213.872 164.142 205.028L155.405 196.687C152.869 199.781 150.254 202.965 148.088 205.583C146.586 207.397 145.614 208.61 144.995 209.403C144.688 209.797 144.482 210.068 144.353 210.243C144.339 210.261 144.327 210.278 144.316 210.294C143.921 210.939 143.257 211.919 142.278 212.923C140.971 214.262 139.695 215.042 139.333 215.259L139.333 215.258C133.664 218.805 127.847 218.123 124.298 216.996C120.941 215.93 118.271 214.115 116.665 212.92C114.915 211.618 113.31 210.189 112.132 209.122L112.132 209.123C111.706 208.737 111.335 208.397 111.004 208.094C110.273 207.425 109.767 206.963 109.262 206.533C105.856 203.631 102.113 199.564 99.5434 194.92C97.6228 191.449 93.0672 181.516 99.633 172.09C103.449 166.611 106.529 163.909 110.118 161.639C110.42 161.449 110.695 161.279 110.938 161.129C111.857 160.562 112.457 160.202 113.405 159.328L107.842 154.948C96.2481 145.818 99.1124 127.252 113.365 122.369C124.637 118.508 147.677 110.774 162.827 106.83C172.655 104.271 185.866 101.316 195.46 99.2362Z"
                      fill="#EBF0FF"
                      stroke="white"
                      strokeWidth="6.9445"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M174.877 176.934C176.908 178.874 180.234 178.246 181.384 175.683C184.357 169.058 189.481 157.358 192.876 148.054C196.144 139.099 200.139 127.457 203.102 118.71C204.999 113.107 200.102 107.611 194.323 108.872C186.377 110.605 176.334 112.873 168.812 114.831C156.814 117.954 138.434 124.085 128.458 127.493C125.4 128.538 124.741 132.536 127.279 134.536L137.499 142.591C140.196 144.717 139.543 149.959 136.888 152.138C135.796 153.034 134.613 154.111 133.362 155.404C127.709 161.244 122.963 163.607 118.221 170.419C115.947 173.687 120.102 179.508 124.287 183.075C127.691 185.977 133.218 192.12 135.189 189.419C140.99 181.473 138.017 185.498 143.343 179.057C147.001 174.632 152.191 168.282 155.359 164.401C156.871 162.548 159.639 162.377 161.368 164.029L174.877 176.934Z"
                      fill="#FFFDF8"
                    />
                  </svg>
                  <h2 className="relative text-[3.5rem] font-normal leading-[1.15] tracking-[-0.0525rem] w-full">
                    Go from manual QA to <br />
                    <span className="text-[#0E46FA]">
                      90% automated test coverage
                    </span>
                    <br />
                    in just&nbsp;
                    <span className="underline font-bold">8 weeks</span>
                  </h2>
                </div>
                <div className="flex flex-col items-center gap-4 w-full">
                  <ResultSection
                    color="bg-[#F0FAF1] border-[#D1EFD6]"
                    icon="cutTime"
                    title="Cut Down Your Time Spent on Manual QA Every Regression"
                  >
                    <div className="flex items-center gap-3">
                      <h2 className="text-[2.5rem] leading-[1.15]">
                        {data.hours} hours
                      </h2>
                      <p>to</p>
                      <h2 className="text-[2.5rem] leading-[1.15] text-[#39A74A]">
                        {Math.round(data.hours * 0.167)} hours
                      </h2>
                    </div>
                  </ResultSection>
                  <ResultSection
                    color="bg-[#F0FAF1] border-[#D1EFD6]"
                    icon="releaseCycle"
                    title="Faster release cycles"
                  >
                    <div className="flex items-center gap-3">
                      <h2 className="text-[2.5rem] leading-[1.15]">
                        {data.releaseFrequency}
                      </h2>
                      <p>to</p>
                      <h2 className="text-[2.5rem] leading-[1.15] text-[#39A74A]">
                        {(15 * 5) / 60} hours
                      </h2>
                    </div>
                  </ResultSection>
                  <ResultSection
                    color="bg-[#EBF0FF] border-[#C3D1FE]"
                    icon="ROI"
                    title="Total ROI for your team"
                    description="(estimated annual cost savings on hours saved + cost of critical bugs missed)"
                  >
                    <h2 className="text-[2.5rem] leading-[1.15] text-[#0535DD]">
                      $
                      {Math.round(
                        data.members *
                          data.hours *
                          releaseFrequencyToYearly[data.releaseFrequency] *
                          100 +
                          data.costPerMissedBug +
                          data.bugsMissedPercentage * 0.01
                      )}
                    </h2>
                  </ResultSection>
                </div>
              </div>
            )}
          </div>
          {/*buttons */}
          <div
            id="buttondiv"
            className="flex justify-center gap-[0.625rem] text-[1.25rem] font-semibold tracking-[0.02813rem]"
          >
            {step > 1 && step < 4 && (
              <button
                id="prevButton"
                className=" rounded-[1rem] w-fit px-10 py-5 text-black border-[2px] border-black"
                onClick={() => {
                  scrollToModalTop();
                  setStep(step - 1);
                }}
              >
                Back
              </button>
            )}
            {step < 4 && (
              <button
                id="nextButton"
                className="bg-black rounded-[1rem] w-fit px-10 py-5 text-white"
                onClick={() => {
                  scrollToModalTop();
                  setStep(step + 1);
                }}
              >
                {step === 3 ? "Calculate ROI with Spur" : "Next"}
              </button>
            )}
            {step > 3 && (
              <button
                id="calculateButton"
                className="rounded-[1rem] w-fit px-10 py-5 text-black border-[2px] border-black"
                onClick={() => {
                  scrollToModalTop();
                  setStep(1);
                }}
              >
                Recalculate
              </button>
            )}
            {step > 3 && (
              <button
                id="shareButton"
                className="rounded-[1rem] w-fit px-10 py-5 text-black border-[2px] border-black"
                onClick={() => {
                  scrollToModalTop();
                }}
              >
                Download & Share
              </button>
            )}
          </div>{" "}
          <div className="text-black font-semibold">
            ignore this, this is ran's debugging console :) <br />
            members:{data.members}
            <br />
            releaseFrequency:{data.releaseFrequency}
            <br />
            hours:{data.hours}
            <br />
            currentTestedPercentage:{data.currentTestedPercentage}
            <br />
            currentCoveragePercentage:{data.currentCoveragePercentage}
            <br />
            bugsMissedPercentage:{data.bugsMissedPercentage}
            <br />
            costPerMissedBug:{data.costPerMissedBug}
            <br />
            delaysInDays:{data.delaysInDays}
            <br />
            revenueImpact:{data.revenueImpact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
