import IntroSection from "@/components/home/IntroSection";
import RequirementSection from "@/components/home/RequirementSection";
import ProblemSection from "@/components/home/ProblemSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 p-4">
      <div className="bg-white rounded mx-auto shadow max-w-[720px] p-4">
        <h1 className="font-bold text-center text-4xl">
          Frontend Engineer Assessment
        </h1>
        <IntroSection />
        <RequirementSection />
        <ProblemSection />
      </div>
    </main>
  );
}
