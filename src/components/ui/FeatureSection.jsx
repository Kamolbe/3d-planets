import {
  useState,
} from "react";

import {
  Cpu,
  Globe,
  ShieldCheck,
  Sparkles,
  Server,
  Lock,
  Activity,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

function FeatureSection() {
  const [activeTab, setActiveTab] =
    useState(0);

  const [email, setEmail] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const [openFaq, setOpenFaq] =
    useState(null);

  const features = [
    {
      id: "quantum",
      title:
        "Kvant Hisoblash Dvigateli",
      subtitle:
        "Trillionlab operatsiyalarni soniyalar ichida parallel ravishda bajaring.",
      badge:
        "Quantum Execution",
      icon: Cpu,
      description:
        "Aetheria ning xususiy Q-Engine algoritmlari an'anaviy bulutli serverlarga qaraganda 1000x tezroq kompleks sun'iy intellekt va neyron tarmoq modellarini qayta ishlaydi.",
      code: `// Aetheria Quantum Execution

import {
  QuantumCluster
} from '@aetheria/core';

const cluster =
  await QuantumCluster.connect({
    region: 'orbit-asia-1',
    encryption:
      'post-quantum-dilithium'
  });

const result =
  await cluster.executeParallel({
    weights: [
      0.98,
      0.45,
      0.99
    ],
    qubits: 128
  });`,
    },

    {
      id: "mesh",
      title:
        "Nol-Kechikishli Mesh Tarmog'i",
      subtitle:
        "Sayyoramiz va orbitadagi tugunlar o'rtasidagi uzluksiz ma'lumotlar oqimi.",
      badge:
        "Orbital Mesh Network",
      icon: Globe,
      description:
        "Sun'iy yo'ldoshlar va yer usti ma'lumot markazlarini birlashtiruvchi gibrid optik-lazer magistral liniyasi.",
      code: `// Orbital Mesh Ping Simulation

const nodeA =
  Mesh.getNode(
    'Toshkent-Node-1'
  );

const nodeB =
  Mesh.getNode(
    'Sat-Aetheria-4'
  );

const route =
  await Mesh.calculateOptimalRoute(
    nodeA,
    nodeB
  );

console.log(
  route.latencyMs
);`,
    },

    {
      id: "security",
      title:
        "Nol-Ishonch AI Xavfsizligi",
      subtitle:
        "Post-kvant shifrlash va avtonom kiber-himoya qalqoni.",
      badge:
        "Zero-Trust Shield",
      icon: ShieldCheck,
      description:
        "Har bir so'rov va paket avtonom neyron qalqon tomonidan real vaqt rejimida tekshiriladi.",
      code: `// Zero-Trust Verification

const securityShield =
  new SecurityShield({
    mode:
      'strict-auto-defend',
    quantumResistance:
      true
  });

securityShield.on(
  'threat-detected',
  (threat) => {
    console.warn(
      threat.type
    );
  }
);`,
    },
  ];

  const architecture = [
    {
      icon: Server,
      title:
        "Orbital Edge Klasterlar",
      description:
        "Yer va past orbital yo'ldoshlarda joylashgan, bir-biri bilan optik lazer orqali bog'langan ma'lumotlar tugunlari.",
      tag:
        "LAYER 1 - CLUSTER",
    },

    {
      icon: Lock,
      title:
        "Kvant Qalqoni (Post-Quantum)",
      description:
        "NIST tomonidan tasdiqlangan Dilithium va Kyber post-kvant shifrlash kalitlari bilan har bir ma'lumot xavfsizlanadi.",
      tag:
        "LAYER 2 - SECURITY",
    },

    {
      icon: Activity,
      title:
        "Avto-Miqyoslanuvchi AI Mesh",
      description:
        "Yuklama ortganda neyron tarmog'i real vaqtda resurslarni avtomatik taqsimlaydi va kechikishni kamaytiradi.",
      tag:
        "LAYER 3 - INTELLIGENCE",
    },
  ];

  const metrics = [
    {
      number: "10B+",
      label: "Kunlik So'rovlar",
    },
    {
      number: "150+",
      label: "Ulanmagan Davlatlar",
    },
    {
      number: "0.00%",
      label: "Xavfsizlik Buzilishi",
    },
    {
      number: "24/7",
      label: "Orbital Monitoring",
    },
  ];

  const faqs = [
    {
      question:
        "Aetheria platformasiga qanday ulanish mumkin?",
      answer:
        "Beta-sinov bosqichida ro'yxatdan o'tgandan so'ng, sizga shaxsiy API kalit va SDK ruxsati beriladi.",
    },

    {
      question:
        "Mavjud infratuzilmamiz bilan integratsiya qilsa bo'ladimi?",
      answer:
        "Ha, Aetheria Kubernetes, Docker, Terraform va barcha asosiy bulut provayderlari bilan to'liq mos keladi.",
    },

    {
      question:
        "Kvant shifrlash ma'lumotlarimizni qanday himoya qiladi?",
      answer:
        "Biz post-kvant kriptografiya algoritmlaridan foydalanamiz.",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* FEATURES */}

      <section
        id="features"
        className="section"
      >
        <div className="container">
          <div className="section-heading">
            <span>
              IMKONIYATLAR VA XUSUSIYATLAR
            </span>

            <h2>
              Koinot Miqyosidagi
              Texnologik Inqilob
            </h2>
          </div>

          <div className="feature-layout">
            <div className="feature-tabs">
              {features.map(
                (feature, index) => {
                  const Icon =
                    feature.icon;

                  const selected =
                    activeTab === index;

                  return (
                    <button
                      key={feature.id}
                      className={`feature-tab ${
                        selected
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setActiveTab(
                          index
                        )
                      }
                    >
                      <div className="feature-tab-top">
                        <div className="feature-icon">
                          <Icon size={23} />
                        </div>

                        <span>
                          {feature.badge}
                        </span>
                      </div>

                      <h3>
                        {feature.title}
                      </h3>

                      <p>
                        {feature.subtitle}
                      </p>
                    </button>
                  );
                }
              )}
            </div>

            <div className="feature-content">
              <Sparkles className="feature-background-icon" />

              <div className="feature-badges">
                <span>
                  {
                    features[
                      activeTab
                    ].badge
                  }
                </span>

                <small>
                  STATUS: AKTIV
                </small>
              </div>

              <h3>
                {
                  features[
                    activeTab
                  ].title
                }
              </h3>

              <p>
                {
                  features[
                    activeTab
                  ].description
                }
              </p>

              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>
                    sdk-example.ts
                  </span>
                </div>

                <pre>
                  <code>
                    {
                      features[
                        activeTab
                      ].code
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}

      <section
        id="architecture"
        className="section"
      >
        <div className="container">
          <div className="section-heading">
            <span className="purple">
              TIZIM ARXITEKTURASI
            </span>

            <h2>
              Har Bir Qatlamda
              Maksimal Ishonchlilik
            </h2>
          </div>

          <div className="architecture-grid">
            {architecture.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="architecture-card"
                    key={item.title}
                  >
                    <div>
                      <div className="architecture-icon">
                        <Icon size={25} />
                      </div>

                      <small>
                        {item.tag}
                      </small>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>
                    </div>

                    <div className="architecture-link">
                      Batafsil Hujjatlar
                      <ChevronRight
                        size={16}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* METRICS */}

      <section
        id="metrics"
        className="section"
      >
        <div className="container">
          <div className="metrics-box">
            <div className="metrics-info">
              <span>
                ISHLASH KO'RSATKICHLARI
              </span>

              <h2>
                An'anaviy
                Bulutlardan{" "}
                <strong>
                  100-Barobar Tezroq
                </strong>
              </h2>

              <p>
                Mustaqil test va benchmark
                natijalariga ko'ra,
                Aetheria platformasi
                yuqori tezlik va xavfsizlik
                ko'rsatkichlarini taqdim
                etishga mo'ljallangan.
              </p>

              <div className="benchmarks">
                <div>
                  <div className="benchmark-label">
                    <span>
                      Aetheria Q-Engine
                    </span>

                    <strong>
                      0.4ms
                    </strong>
                  </div>

                  <div className="benchmark-bar">
                    <i className="bar-cyan" />
                  </div>
                </div>

                <div>
                  <div className="benchmark-label">
                    <span>
                      Standart Cloud AWS/GCP
                    </span>

                    <strong>
                      45ms
                    </strong>
                  </div>

                  <div className="benchmark-bar">
                    <i className="bar-gray" />
                  </div>
                </div>

                <div>
                  <div className="benchmark-label">
                    <span>
                      An'anaviy On-Premise
                    </span>

                    <strong>
                      120ms
                    </strong>
                  </div>

                  <div className="benchmark-bar">
                    <i className="bar-dark" />
                  </div>
                </div>
              </div>
            </div>

            <div className="metrics-grid">
              {metrics.map(
                (metric) => (
                  <div
                    className="metric-card"
                    key={metric.label}
                  >
                    <strong>
                      {metric.number}
                    </strong>

                    <span>
                      {metric.label}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        id="cta"
        className="section cta-section"
      >
        <div className="container small-container">
          <div className="cta-box">
            <div className="cta-line" />

            <h2>
              Kosmik Kelajakni
              Biz Bilan Quring
            </h2>

            <p>
              Beta-versiyada ishtirok
              eting va yangi avlod
              kvant bulut texnologiyasini
              birinchilardan bo'lib
              sinab ko'ring.
            </p>

            {submitted ? (
              <div className="success-message">
                <CheckCircle2 />
                <span>
                  Rahmat! Siz muvaffaqiyatli
                  navbatga yozildingiz.
                </span>
              </div>
            ) : (
              <form
                className="email-form"
                onSubmit={
                  handleSubmit
                }
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="Email manzilingizni kiriting..."
                />

                <button type="submit">
                  Yuborish
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}

          <div className="faq">
            <h3>
              Ko'p Beriladigan
              Savollar
            </h3>

            {faqs.map(
              (faq, index) => (
                <div
                  className="faq-item"
                  key={faq.question}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index
                          ? null
                          : index
                      )
                    }
                  >
                    <span>
                      {faq.question}
                    </span>

                    <ChevronRight
                      className={
                        openFaq ===
                        index
                          ? "rotate"
                          : ""
                      }
                      size={18}
                    />
                  </button>

                  {openFaq ===
                    index && (
                    <p>
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;