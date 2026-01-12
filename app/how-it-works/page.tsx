"use client";

import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#ff7f00",
            fontSize: "2.75rem",
            marginBottom: "1.5rem",
            letterSpacing: "1px",
          }}
        >
          How It Works
        </h1>

        <p
          style={{
            maxWidth: 900,
            margin: "0 auto 4rem",
            lineHeight: 1.8,
          }}
        >
          Broadhead Buddy™ is designed to safely and efficiently remove embedded
          broadheads, field points, and arrow inserts using controlled mechanical
          advantage. Follow these simple steps to recover your gear without damage.
        </p>

        {/* DEMO VIDEO */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto 4rem",
            position: "relative",
            paddingBottom: "56.25%", // 16:9
            height: 0,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,127,0,0.3)",
            boxShadow: "0 0 30px rgba(255,127,0,0.15)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/UF2mKQoX4zg"
            title="Broadhead Buddy Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>

        {/* STEPS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem",
          }}
        >
          <Step
            step="1"
            title="Ready"
            img="/images/step1.jpg"
            description="Unscrew the arrow shaft from the broadhead. Position the Broadhead Buddy™ so the extraction sleeve aligns with the blades."
          />

          <Step
            step="2"
            title="Engage"
            img="/images/step2.jpg"
            description="Thread the coupler onto the exposed threads and align the sleeve slots with the broadhead blades."
          />

          <Step
            step="3"
            title="Extract"
            img="/images/step3.jpeg"
            description="Hold the sleeve securely and apply controlled force to retract the broadhead safely from the target."
          />

          <Step
            step="4"
            title="Remove"
            img="/images/step4.jpg"
            description="Once loose, unthread the broadhead from the tool and inspect your recovered gear."
          />
        </div>
      </section>
    </main>
  );
}

function Step({
  step,
  title,
  img,
  description,
}: {
  step: string;
  title: string;
  img: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,127,0,0.25)",
        borderRadius: 16,
        padding: "1.5rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#ff7f00",
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Step {step}
      </div>

      <h2
        style={{
          color: "#ff7f00",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>

      <Image
        src={img}
        alt={`Step ${step} - ${title}`}
        width={500}
        height={320}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 12,
          marginBottom: "1rem",
        }}
      />

      <p style={{ lineHeight: 1.7 }}>{description}</p>
    </div>
  );
}
