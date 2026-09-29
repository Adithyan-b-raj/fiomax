"use client";

import { WhatsAppButton, AvatarStack } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="bg-white py-8">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-12 shadow-glow-lg sm:px-12 sm:py-14">
            {/* subtle texture */}
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:22px_22px]" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
              <div className="text-ink-950">
                <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-[44px]">
                  Join Now &amp; Get <br className="hidden sm:block" />
                  Exclusive Deals!
                </h2>
                <p className="mt-4 max-w-md text-lg font-medium text-ink-950/80">
                  Be part of our WhatsApp community and never miss a deal again.
                </p>
              </div>

              <div className="flex flex-col items-start gap-6 lg:items-end">
                <WhatsAppButton className="w-full sm:w-auto" />
                <div className="flex items-center gap-4">
                  <AvatarStack count={5} />
                  <div className="leading-tight text-ink-950">
                    <p className="text-lg font-bold">2,500+ Members</p>
                    <p className="text-sm text-ink-950/70">
                      Already joined and getting exclusive offers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
