"use client";
import Copy from  "@/app/components/Copy/Copy";

export default function Work() {
  return (
    <main className="px-8 min-h-screen ">
      {/* Top spacing */}
      <div className="w-full pt-[20vh] text-[11.5vw]  flex flex-row justify-between items-center uppercase text-md font-bold tracking-wide">
        <Copy delay={0.2}>

        <h1 className="font-saans  leading-none tracking-tight overflow-hidden">
          Work
        </h1>
        </Copy>
        <Copy delay={0.2}>

        <h1 className="font-saans  leading-none tracking-tight overflow-hidden">
        '25
        </h1>
        </Copy>
      </div>

      {/* Content */}
      <section className="mt-3 w-full">
        <div className="h-[90vh] flex flex-row gap-4">
            <div className="w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 items-center p-4">
                <div className="h-[75vh] w-full rounded-2xl bg-pink-400"></div>
            </div>
            <div className="w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 items-center p-4">
                <div className="h-[75vh] w-full rounded-2xl bg-pink-400"></div>
            </div>
        </div>
      </section>
    </main>
  );
}
