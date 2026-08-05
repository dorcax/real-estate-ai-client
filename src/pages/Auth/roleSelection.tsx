import { Button } from "@/components/ui/button";
import { Birdhouse, House, MoveRight } from "lucide-react";

const RoleSelection= () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-4 py-8 text-white">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #8083ff, transparent 40%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0F172A] shadow-2xl md:flex-row">
        {/* Left section */}
        <section className="flex-1 px-6 py-8 md:px-8">
          <h1 className="mb-3 text-3xl font-semibold leading-tight">
            One platform
            <br />
            <span className="text-[#6366F1]">Two experiences</span>
          </h1>

          <p className="mb-8 max-w-md text-xs leading-6 text-gray-300">
            Aura intelligently adapts to your role, providing specialized tools
            whether you are managing a portfolio or searching for your next
            investment.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5">
                <Birdhouse className="h-5 w-5 text-[#6366F1]" />
              </div>

              <div>
                <h2 className="text-base font-semibold">For Agents</h2>
                <p className="mt-1 text-xs leading-5 text-gray-300">
                  AI-driven listing management, automated viewings, and
                  intelligent lead scoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5">
                <House className="h-5 w-5 text-[#6366F1]" />
              </div>

              <div>
                <h2 className="text-base font-semibold">For Buyers</h2>
                <p className="mt-1 text-xs leading-5 text-gray-300">
                  Personalized property curation, seamless booking, and
                  transparent transaction tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right section */}
        <section className="flex-1 border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">
          <div className="mb-6">
            <h2 className="text-base  font-semibold">Create your account</h2>
            <p className="mt-1 text-xs text-gray-400">
              Tailor your experience on this platform.
            </p>
          </div>

          <div className="space-y-4">
            {/* Agent option */}
            <button
              type="button"
              className="w-full rounded-lg border border-[#6366F1] bg-gray-800/80 p-4 text-left transition hover:bg-gray-800"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/5 bg-[#0F172A]">
                  <Birdhouse className="h-5 w-5 text-[#6366F1]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold capitalize">
                    Real estate agent
                  </h3>

                  <p className="mb-3 mt-1 text-xs leading-5 text-gray-400">
                    Manage listings, AI insights, and client pipelines.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-[#26C289]/20 px-3 py-1.5 text-xs text-[#5EE2B1]">
                      AI Insights
                    </span>

                    <span className="rounded-md bg-[#0F172A] px-3 py-1.5 text-xs text-gray-300">
                      Listings
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* Buyer option */}
            <button
              type="button"
              className="w-full rounded-lg border border-transparent bg-gray-800/80 p-4 text-left transition hover:border-white/10 hover:bg-gray-800"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/5 bg-[#0F172A]">
                  <House className="h-5 w-5 text-[#6366F1]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold capitalize">
                    Property buyer
                  </h3>

                  <p className="mb-3 mt-1 text-xs leading-5 text-gray-400">
                    Browse properties, book viewings, and track transactions.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-[#0F172A] px-3 py-1.5 text-xs text-gray-300">
                      Search
                    </span>

                    <span className="rounded-md bg-[#0F172A] px-3 py-1.5 text-xs text-gray-300">
                      Viewings
                    </span>
                  </div>
                </div>
              </div>
            </button>

            <div className="pt-3">
              <Button
                type="button"
                className="mb-3 flex w-full items-center justify-center gap-2 bg-[#6366F1]  hover:bg-[#5558E8]"
              >
                Continue as Agent
                <MoveRight className="h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-gray-400">
                Already have an account?{" "}
                <a
                  href="/sign-in"
                  className="font-medium text-[#818CF8] hover:underline"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RoleSelection;