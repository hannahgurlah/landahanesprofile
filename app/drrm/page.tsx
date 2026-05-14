import { SiteShell } from "../components/site-shell";
import { ContingencyPlanTabs } from "./contingency-plan-tabs";

const drrmReports = [
  { title: "DRRM School Risk Assessment Report and Checklist", href: "/assets/report/landahan-DRRM-School Risk Assessment Report and Checklist.pdf" }
];

const siteContext = [
  "The school is located in a remote mountainous area of Toledo City.",
  "The school may be affected by strong winds, heavy rain, flooding, falling branches, landslides, and blocked access roads.",
  "Evacuation decisions must prioritize movement away from unstable slopes, large trees, damaged structures, and slippery pathways.",
  "The school coordinates with barangay officials, parents, health workers, and rescue units during mountain-area emergencies.",
];

const planningPriorities = [
  "Protect learners, teachers, and visitors before property.",
  "Monitor rainfall, strong wind, landslide, and road safety advisories before making school decisions.",
  "Keep evacuation routes to safe open areas clear, visible, and known to learners and staff.",
  "Coordinate immediately with parents, barangay officials, health workers, and rescue units during major incidents.",
];

const depedOrderActions = [
  "Organize a student-led school watching activity during the opening month of the school year.",
  "Include learner representatives from different grade levels, sections, and school groups.",
  "Use the school watching checklist to identify hazards, unsafe areas, and needed safety improvements.",
  "Update and post hazard maps in visible school areas so learners, staff, and visitors can use them during preparedness activities.",
];

const contingencyPlans = [
  {
    title: "Fire",
    risk:
      "Classrooms, storage rooms, electrical lines, and kitchen or canteen areas may trigger fire, while dry vegetation, nearby trees, and delayed responder access can make control more difficult in a mountain setting.",
    preparedness: [
      "Install and inspect fire extinguishers, alarms, and electrical connections regularly.",
      "Assign fire marshals and conduct exit drills every quarter.",
      "Keep paper waste, cleaning materials, fuel, and other flammable items away from classrooms and cooking areas.",
    ],
    response: [
      "Sound the alarm and evacuate learners to the designated open assembly area away from smoke, electrical lines, and cooking areas.",
      "Switch off electricity when safe to do so and use extinguishers only for controllable fires.",
      "Inform the barangay hall and fire responders immediately while accounting for all learners.",
    ],
    recovery: [
      "Inspect affected rooms before reuse.",
      "Document losses and update fire prevention measures.",
    ],
  },
  {
    title: "Typhoon",
    risk:
      "Strong winds and heavy rain can damage roofs, topple trees, block mountain roads, cut electricity, and make travel unsafe for learners and staff.",
    preparedness: [
      "Monitor PAGASA advisories and decide early on class suspension or early dismissal.",
      "Secure roofs, windows, learning materials, records, and loose outdoor items before severe weather arrives.",
      "Store learning materials, records, and devices in elevated and protected locations.",
    ],
    response: [
      "Suspend outdoor movement and transfer learners away from windows and light structures.",
      "Move learners away from trees, unstable slopes, and areas with possible falling debris.",
      "Release learners only through safe, documented parent or guardian pick-up procedures when roads and footpaths are passable.",
    ],
    recovery: [
      "Check for roof damage, fallen trees, damaged wiring, muddy walkways, and unsafe paths before reopening.",
      "Resume classes only after campus hazards are cleared and access routes are safe.",
    ],
  },
  {
    title: "Earthquake",
    risk:
      "Ground shaking can damage buildings and utilities, while steep terrain and unstable slopes may increase the risk of landslides and falling debris.",
    preparedness: [
      "Teach all learners to duck, cover, and hold.",
      "Secure cabinets, shelves, fans, and heavy objects inside classrooms.",
      "Mark open evacuation areas away from trees, posts, retaining walls, and possible slope failure zones.",
    ],
    response: [
      "During shaking, instruct everyone to duck, cover, and hold until the movement stops.",
      "Evacuate calmly to open safe areas and avoid buildings, walls, trees, posts, and electrical lines.",
      "Check injuries, account for learners, prepare for aftershocks, and watch for ground cracks or slope movement.",
    ],
    recovery: [
      "Inspect buildings, electrical systems, water sources, and evacuation routes before allowing re-entry.",
      "Refer injured persons to responders or nearby health units immediately.",
    ],
  },
  {
    title: "Landslide",
    risk:
      "Continuous rainfall, earthquakes, and unstable slopes can trigger landslides that block access roads, damage school grounds, and threaten nearby structures.",
    preparedness: [
      "Identify high-risk slopes, soil cracks, leaning trees, and erosion-prone sections near the school.",
      "Post clear evacuation maps showing the safest routes away from slopes and unstable ground.",
      "Coordinate with barangay officials on rainfall monitoring and landslide warning signs.",
    ],
    response: [
      "Evacuate immediately once soil movement, unusual sounds, falling rocks, or widening ground cracks are observed.",
      "Do not allow learners or staff to stay near slopes, embankments, or tree lines during suspected slope failure.",
      "Remain in the safe area until authorities declare that the threat has ended.",
    ],
    recovery: [
      "Return to campus only after official clearance from local authorities.",
      "Check classrooms, access roads, water sources, sanitation facilities, and electrical systems before reuse.",
    ],
  },
  {
    title: "COVID-19",
    risk:
      "Respiratory illness can spread quickly in classrooms and gatherings if screening, ventilation, and isolation practices are weak.",
    preparedness: [
      "Maintain handwashing stations, classroom cleaning routines, and symptom awareness campaigns.",
      "Encourage proper ventilation and keep updated contact details for all families.",
      "Prepare temporary isolation procedures for symptomatic individuals.",
    ],
    response: [
      "Separate any learner or staff member with symptoms and notify guardians or health authorities as needed.",
      "Shift to alternative learning delivery if advised by health or education authorities.",
      "Clean exposed rooms and monitor close contacts based on current protocols.",
    ],
    recovery: [
      "Support safe return-to-school procedures after illness or exposure.",
      "Review health communication and classroom mitigation practices regularly.",
    ],
  },
  {
    title: "El Niño",
    risk:
      "Extended heat, water shortage, and dry vegetation can affect hydration, classroom comfort, sanitation, and fire risk in a mountainous school setting.",
    preparedness: [
      "Store safe water and review conservation measures for toilets, handwashing, and cleaning.",
      "Adjust outdoor schedules to avoid extreme midday heat.",
      "Coordinate with local officials for safe water support if springs, tanks, or supply lines become affected.",
    ],
    response: [
      "Reduce strenuous outdoor activity and monitor learners for dehydration or heat stress.",
      "Use shaded and well-ventilated rooms whenever possible.",
      "Coordinate with the barangay or city offices if water supply becomes critical.",
    ],
    recovery: [
      "Restore normal schedules only when heat conditions are manageable.",
      "Update water and fire mitigation plans based on observed shortages or risks.",
    ],
  },
];

export default function DrrmPage() {
  return (
    <SiteShell
      eyebrow="Student Safety"
      title="School DRRM"
      description="This DRRM page outlines hazard-specific contingency plan articles for Landahan Elementary School, a remote mountainous school in Toledo City."
    >

      <section className="content-grid section-space">
        <article className="panel panel-story">
          <p className="eyebrow">Policy Basis</p>
          <h2>DepEd Order No. 23, s. 2015</h2>
          <p>
            DepEd Order No. 23, s. 2015, titled Student-Led School Watching and
            Hazard Mapping, guides public schools in involving learners in
            identifying hazards, understanding risks, and helping build a
            stronger culture of safety in school.
          </p>
          <p>
            For a remote mountainous school, this means learners should help
            observe and map risks such as slippery paths, unstable slopes,
            falling-branch zones, drainage concerns, electrical hazards,
            evacuation routes, and other conditions that may affect school
            safety.
          </p>
        </article>

        <aside className="panel panel-points">
          <p className="eyebrow">School Application</p>
          <ul>
            {depedOrderActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section style={{ alignItems: "center", marginBottom: 40, marginTop: 10 }}>
        <h3 style={{ marginTop: 40, fontSize: '24px' }}>DRRM Hazard Map</h3>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/drrm-hazardmap.jpg" alt="DRRM Hazard Map" />
        <h3 style={{ marginTop: 40, fontSize: '24px' }}>DRRM Evacuation Map</h3>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/drrm-evacuationmap.jpg" alt="DRRM Evacuation Map" />
      </section>

      <section className="content-grid section-space">
        <article className="panel panel-story">
          <p className="eyebrow">School Risk Context</p>
          <h2>Planning for a remote mountainous school environment.</h2>
          <p>
            The school&apos;s location requires contingency planning that considers
            severe weather exposure, road inaccessibility, landslides, flooding,
            falling debris, and close coordination with barangay officials.
          </p>
          <p>
            Each response article below is designed to protect learners and
            staff while keeping communication and evacuation decisions practical
            for the local setting.
          </p>
        </article>

        <aside className="panel panel-points">
          <p className="eyebrow">Site Considerations</p>
          <ul>
            {siteContext.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>



      <section className="programs">
        <div className="section-heading">
          <h4 className="eyebrow" style={{ marginTop: 40, fontSize: '24px' }}>Core Planning Principles</h4>
          <h2>Shared actions that guide every emergency response.</h2>
        </div>

        <div className="program-grid">
          {planningPriorities.map((item) => (
            <article key={item} className="program-card">
              <h3>{item}</h3>
              <p>
                This principle should guide school decisions before, during,
                and after any emergency affecting learners and staff.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="plan-articles">
        <div className="section-heading">
          <p className="eyebrow" style={{ marginTop: 40, fontSize: '24px' }}>Contingency Plan</p>
          <h2>Hazard-specific response plans for the school community.</h2>
        </div>

        <ContingencyPlanTabs plans={contingencyPlans} />
      </section>

      <section style={{ alignItems: "center", marginBottom: 40, marginTop: 10 }}>
        {/* <h3 style={{ marginTop: 40, fontSize: '24px' }}>NATIONWIDE SIMULTANEOUS EARTHQUAKE DRILL</h3> */}
        <p style={{ fontSize: "18px" }}><strong>NATIONWIDE SIMULTANEOUS EARTHQUAKE DRILL</strong> <br />1st Quarter | March 13, 2026</p>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/landahan.png" alt="Earthquake Drill" />
      </section>

      <section className="section-wrap" style={{ padding: "60px 0", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gap: "24px", maxWidth: "960px", margin: "0 auto" }}>
          {drrmReports.map((report) => (
            <article
              key={report.href}
              style={{ border: "2px solid #CE6600", backgroundColor: "#FDF6E3", color: "#342C21", fontSize: "18px", lineHeight: "1.8rem", padding: "1rem", borderRadius: "10px" }}
            >
              <h4 style={{ marginTop: 0 }}>{report.title}</h4>
              <iframe
                src={report.href}
                title={report.title}
                style={{ width: "100%", minHeight: "620px", border: "1px solid #d8c7ac", borderRadius: "6px", backgroundColor: "#fff" }}
              />
            </article>
          ))}
        </div>
      </section>


      <section style={{ alignItems: "center" }}>
        <h3 style={{ marginTop: 40, fontSize: '24px' }}>Emergency Contact Numbers</h3>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/emergency-contact-numbers.jpg" alt="Safety Guidelines" />
      </section>
    </SiteShell >
  );
}
