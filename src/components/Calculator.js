import React from "react";
import Slider from "../ui/Slider";
import InputTitle from "../ui/InputTitle";
import SingleEntry from "../ui/SingleEntry";
import NumberInput from "../ui/NumberInput";
import Dropdown from "../ui/Dropdown";
export default function Calculator({ step, data, setData }) {
  return (
    <div className="w-full pt-[3.5rem]">
      {step === 1 && (
        <div className="flex flex-col gap-12">
          <SingleEntry>
            <InputTitle
              icon="members"
              secondaryText="Based on average $65k salary with benefits"
            >
              How many people do you have on your QA Team?
            </InputTitle>
            <Slider
              value={data.members}
              setValue={setData}
              valueName="members"
              singular="member"
              plural="members"
              min={0}
              max={20}
            />
          </SingleEntry>
          <SingleEntry>
            <InputTitle icon="calendar">
              How often are your releases?
            </InputTitle>
            <Dropdown
              value={data.releaseFrequency}
              setValue={setData}
              valueName="releaseFrequency"
              options={[
                { label: "Daily", value: "1 Day" },
                { label: "2-3 times per week", value: "3 Days" },
                { label: "Weekly", value: "1 Week" },
                { label: "Bi-Weekly", value: "2 Weeks" },
                { label: "Monthly", value: "1 Month" },
                { label: "Quarterly", value: "3 Months" },
              ]}
            />
          </SingleEntry>
          <SingleEntry>
            <InputTitle icon="hours">
              How many hours does your team spend testing per release?
            </InputTitle>
            <Slider
              value={data.hours}
              setValue={setData}
              valueName="hours"
              singular="hour"
              plural="hours"
              min={5}
              max={240}
            />
          </SingleEntry>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-12">
          <SingleEntry>
            <InputTitle
              icon="currentTestedPercentage"
              secondaryText="Suboptimal coverage is often due to limited time and resources."
            >
              How much of your product is actually tested each release?
            </InputTitle>
            <Slider
              value={data.currentTestedPercentage}
              setValue={setData}
              valueName="currentTestedPercentage"
              singular="%"
              plural="%"
              min={0}
              max={100}
            />
          </SingleEntry>
          <SingleEntry>
            <InputTitle
              icon="currentCoveragePercentage"
              secondaryText="Most manual QA misses rare but critical breakpoints."
            >
              Roughly what percentage of error paths and edge cases are covered
              by the current regression suite?
            </InputTitle>
            <Slider
              value={data.currentCoveragePercentage}
              setValue={setData}
              valueName="currentCoveragePercentage"
              singular="%"
              plural="%"
              min={0}
              max={100}
            />
          </SingleEntry>{" "}
          <SingleEntry>
            <InputTitle
              icon="bugsMissedPercentage"
              secondaryText="Bugs missed due to human factors. People make mistakes!"
            >
              What percentage of bugs are missed due to human error during
              testing?
            </InputTitle>
            <Slider
              value={data.bugsMissedPercentage}
              setValue={setData}
              valueName="bugsMissedPercentage"
              singular="%"
              plural="%"
              min={0}
              max={100}
            />
          </SingleEntry>
        </div>
      )}
      {step === 3 && (
        <div className="flex flex-col gap-12">
          <SingleEntry>
            <InputTitle
              icon="dollarSign"
              secondaryText="What do you think is the average cost per production bug to your brand?"
            >
              Cost of missed bugs
            </InputTitle>
            <NumberInput
              value={data.costPerMissedBug}
              setValue={setData}
              valueName="costPerMissedBug"
              min={0}
              max={10000000}
            />
          </SingleEntry>
          <SingleEntry>
            <InputTitle
              icon="delaysInDays"
              secondaryText="How many days are releases typically delayed by due to QA bottlenecks? "
            >
              Release delays (days)
            </InputTitle>
            <Slider
              value={data.delaysInDays}
              setValue={setData}
              valueName="delaysInDays"
              singular="day"
              plural="days"
              min={0}
              max={30}
            />
          </SingleEntry>
          <SingleEntry>
            <InputTitle
              icon="dollarSign"
              secondaryText="What is approximate business impact of every day the release is delayed by? "
            >
              Revenue impact per delayed day
            </InputTitle>
            <NumberInput
              value={data.revenueImpact}
              setValue={setData}
              valueName="revenueImpact"
              min={0}
              max={10000000}
            />
          </SingleEntry>
        </div>
      )}
    </div>
  );
}
