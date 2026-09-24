import {
  ArrowUpRight,
  Terminal,
} from "lucide-react";

function HeroSection() {
  const metrics = [
    {
      label: "O'RTASHA KECHIKISH",
      value: "< 0.8 ms",
      className: "cyan",
    },
    {
      label: "GLOBAL TUGUNLAR",
      value: "14,820+",
      className: "purple",
    },
    {
      label: "ISHLASH SHAKLI",
      value: "99.999% SLA",
      className: "green",
    },
    {
      label: "SHIFRLASH DARAJASI",
      value: "256-BIT",
      className: "blue",
    },
  ];

  return (
    <section
      id="hero"
      className="hero-section"
    >
      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot" />
          KVANT BULUT TIZIMI V3.0 AMALDA
        </div>

        <h1>
          KOSMIK DAVRNING
          <br />

          <span>
            YETAKCHI PLATFORMASI
          </span>
        </h1>

        <p className="hero-description">
          Yer yuzidagi va koinot
          orbitasidagi eng tezkor
          taqsimlangan kvant hisoblash
          va sun'iy intellekt
          infratuzilmasi. Nol kechikish,
          cheksiz miqyos.
        </p>

        <div className="hero-actions">
          <a
            href="#cta"
            className="primary-button"
          >
            Tizimga Bepul Ulanish
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#features"
            className="secondary-button"
          >
            <Terminal size={17} />
            Konsol Demoni Ko'rish
          </a>
        </div>

        <div className="hero-metrics">
          {metrics.map((metric) => (
            <div
              className="hero-metric"
              key={metric.label}
            >
              <strong
                className={
                  metric.className
                }
              >
                {metric.value}
              </strong>

              <span>
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;