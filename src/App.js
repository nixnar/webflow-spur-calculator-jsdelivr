import React from "react";
import "./style.css";
import StepBadge from "./ui/StepBadge";
import StepText from "./components/StepText";
import Calculator from "./components/Calculator";
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
  const [data, setData] = React.useState({
    members: 2,
    often: 7,
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
              <div className="flex flex-col items-center text-center">
                <p>Here is the value you will get with Spur</p>
                <h2 className="text-[3.5rem] font-normal leading-[1.15] tracking-[-0.0525rem]">
                  Go from manual QA to <br />
                  <span className="text-[#0E46FA]">
                    90% automated test coverage
                  </span>
                  <br />
                  in just
                  <span className="underline font-bold">8 weeks</span>
                </h2>
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
            often:{data.often}
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
