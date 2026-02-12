import OurMissionCard from "./OurMissionCard";

export default function OurMission() {
  return (
    <div className="flex flex-col xl:px-39 lg:px-20 md:px-10 px-4 py-30 justify-center items-center bg-[#F5F5F5] gap-20">
        <h1 className="font-bold text-[34px] text-[#222222]">Our Mission</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <OurMissionCard title={"Quality Selection"} />
            <OurMissionCard title={"Exceptional Service"} />
            <OurMissionCard title={"Set Up Stores"} />
        </div>
    </div>
  )
}
