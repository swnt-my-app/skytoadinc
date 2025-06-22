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
    <div className="container py-5">
      <div className="bg-info text-white text-center py-4 rounded shadow-sm mb-5">
        <h4 className="px-3">
          Why struggle with IT problems? <strong>SKYTOAD Inc</strong> has been trusted by many for 20 years. Our certified engineers know how to solve problems, not make them.
        </h4>
      </div>

      <div className="row text-center">
        {services.map((service, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="service-icon img-fluid mb-2" style={{ height: "80px" }}>{service.icon}</div>
            {/* <img src={service.icon} alt={service.title} className="img-fluid mb-2" style={{ height: "80px" }} /> */}
            <p className="service-title mb-0">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkyToadServices;
