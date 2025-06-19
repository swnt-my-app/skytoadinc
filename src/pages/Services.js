import React from "react";
import "../css/SkyToadServices.css"; // style separately

const services = [
  { title: "Managed Network Services", icon: "🖥️" },
  { title: "Data Center Design & Consulting", icon: "🧩" },
  { title: "Advanced VOIP Support & Development", icon: "📞" },
  { title: "Virtualization", icon: "🖥️🖥️" },
  { title: "Voice & Data Consulting", icon: "📶" },
  { title: "Network Security", icon: "🛡️" },
  { title: "Data Backup", icon: "💾" },
  { title: "VOIP Services", icon: "📠" },
  { title: "Cloud Computing", icon: "☁️" },
  { title: "Web & Application Development", icon: "🧑‍💻" },
];

const SkyToadServices = () => {
  return (
    <div className="services-wrapper">
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkyToadServices;
