import { motion } from "framer-motion";
import { Github, Linkedin, Cpu, Brain, Bot } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-cyan-400/20 selection:text-cyan-200">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        {/* Animated Neural / Circuit Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/60 to-black" />

          {/* Circuit lines */}
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ x: [0, 120, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 8 + i, repeat: Infinity }}
            />
          ))}

          {/* Neural nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-indigo-400/60"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <motion.h1
            whileHover={{ letterSpacing: '0.06em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Manjit Patel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Research‑driven engineer working at the intersection of
            <span className="text-white"> AI, Robotics, and Backend Systems</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6 mt-10"
          >
            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition">Explore Work</a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition">Contact</a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 max-w-5xl mx-auto px-6 relative">
        <div className="absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          I am a research‑driven software and robotics engineer with a strong interest in
          intelligent systems, autonomous technologies, and applied AI. I work at the
          intersection of backend engineering, robotics middleware, and machine learning,
          focusing on building real, working systems that validate research ideas.
          <br /><br />
          My experience includes designing scalable backend services using Spring Boot
          and Python frameworks, integrating AI models for vision and decision‑making,
          and experimenting with robotics platforms using ROS, Raspberry Pi, ESP32,
          and Jetson devices. I value clean system design, experimentation, and
          continuous learning, and I aim to contribute to R&D labs and deep‑tech teams.
        </motion.p>
      </section>

      {/* Skills */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 className="text-4xl font-semibold mb-16">Skills & Expertise</motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div whileHover={{ scale: 1.03 }} className="p-8 rounded-2xl bg-black border border-gray-800">
              <Brain size={36} />
              <h3 className="text-2xl mt-4 mb-3">AI & Intelligent Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hands-on experience in building applied AI systems where models are part of
                a larger decision pipeline rather than standalone experiments. Worked on
                computer vision, perception modules, and inference workflows using
                PyTorch and TensorFlow. Focus on model integration, data flow, latency,
                and real-world constraints rather than only accuracy metrics.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="p-8 rounded-2xl bg-black border border-gray-800">
              <Bot size={36} />
              <h3 className="text-2xl mt-4 mb-3">Robotics & Automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience working with robotic systems involving sensors, actuators,
                control logic, and middleware. Used ROS for inter-process communication,
                experimented with navigation, perception, and feedback loops, and
                deployed systems on Raspberry Pi, ESP32, and Jetson platforms.
                Strong understanding of hardware–software integration challenges.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="p-8 rounded-2xl bg-black border border-gray-800">
              <Cpu size={36} />
              <h3 className="text-2xl mt-4 mb-3">Backend & Distributed Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strong backend foundation using Java and Python. Designed RESTful APIs,
                authentication flows, and data models using Spring Boot, Flask, and
                FastAPI. Worked with SQL and NoSQL databases, containerization using
                Docker, asynchronous messaging with Kafka, and cloud deployment
                concepts on AWS.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section id="projects" className="py-32 max-w-6xl mx-auto px-6 relative">
        {/* section divider glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <motion.h2 className="text-4xl font-semibold mb-16">Experience & Projects</motion.h2>

        <div className="space-y-14">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">R&D Engineer — IIT Gandhinagar / Invengic</h3>
            <p className="text-gray-400 leading-relaxed">
              Actively involved in research and development activities focused on
              intelligent software systems. Responsibilities include designing
              experimental backend services, prototyping automation workflows,
              integrating AI components, and validating concepts through working
              implementations rather than theoretical models alone.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">Human–Robot Interaction System</h3>
            <p className="text-gray-400 leading-relaxed">
              Developed a human–robot interaction system focused on enabling natural and
              safe communication between humans and robotic systems. Integrated sensor
              inputs, control logic, and intelligent decision layers to interpret human
              actions and respond appropriately. The project emphasized usability,
              responsiveness, and safety for real-world industrial and service robotics
              scenarios.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">Industrial Robotic Arm System</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed and implemented a robotic arm system aimed at industrial
              automation use cases. Worked on kinematics, motion control, sensor
              feedback, and task execution workflows. The system was developed with
              a focus on precision, repeatability, and reliability, reflecting
              real manufacturing and automation constraints.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">Autonomous AI Robot Backend System</h3>
            <p className="text-gray-400 leading-relaxed">
              Built backend services to support an autonomous robot capable of
              processing voice and visual inputs. The system handled data ingestion
              from edge devices, AI-based perception, ROS communication, and
              real-time decision-making. Emphasis was placed on modularity,
              scalability, and low-latency communication.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">Autonomous Theft‑Proof Delivery Robot</h3>
            <p className="text-gray-400 leading-relaxed">
              Developed a complete autonomous delivery robot combining robotics,
              AI-based perception, and IoT integration. The system addressed
              navigation, obstacle avoidance, security, and monitoring challenges
              associated with real-world delivery environments.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">Emergency Traffic Notification System for Ambulances</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed a cloud-based emergency traffic management solution to track
              ambulances in real time and proactively notify nearby vehicles to
              clear the route. Integrated GPS tracking, cloud infrastructure, and
              real-time notification services. The project was envisioned as a
              smart-city solution suitable for presentation to government
              authorities and public safety agencies.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur hover:scale-[1.02] hover:border-cyan-400/50 transition">
            <h3 className="text-2xl mb-2 group-hover:text-cyan-300 transition">Scalable E‑Commerce Backend</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed and implemented a scalable e-commerce backend using
              Spring Boot. Features included secure authentication with JWT,
              role-based access control, structured APIs, database integration,
              and clean layered architecture following industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold mb-16 text-center"
          >
            System Architecture Highlights
          </motion.h2>

          {/* Diagram 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
          >
            <h3 className="text-2xl mb-6">Autonomous AI Robot – End‑to‑End Flow</h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-300">
              <div className="p-4 rounded-xl bg-black border border-gray-700">Edge Devices<br />Cameras · Mics · Sensors</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">ROS Middleware<br />Message Passing</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">AI Services<br />Vision · Speech · Decisions</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">Control Layer<br />Motion · Actions</div>
            </div>
            <p className="mt-6 text-gray-400 leading-relaxed">
              This architecture demonstrates how sensor data flows from edge devices
              through ROS middleware into AI services for perception and decision‑making,
              finally reaching the control layer responsible for real‑time robotic actions.
            </p>
          </motion.div>

          {/* Diagram 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
          >
            <h3 className="text-2xl mb-6">Emergency Ambulance Notification System</h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-300">
              <div className="p-4 rounded-xl bg-black border border-gray-700">Ambulance GPS<br />Real‑time Location</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">Cloud Backend<br />Tracking · Logic</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">Notification Engine<br />Routing · Priority</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">Drivers & Traffic<br />Alerts · Clearance</div>
            </div>
            <p className="mt-6 text-gray-400 leading-relaxed">
              A cloud‑centric architecture where live GPS data is processed in real time
              to generate priority alerts for nearby vehicles. Designed for smart‑city
              deployment and government‑scale systems.
            </p>
          </motion.div>

          {/* Diagram 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
          >
            <h3 className="text-2xl mb-6">Scalable Backend System</h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-300">
              <div className="p-4 rounded-xl bg-black border border-gray-700">Clients<br />Web · Mobile</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">API Layer<br />Spring Boot</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">Async Processing<br />Kafka · Workers</div>
              <div className="p-4 rounded-xl bg-black border border-gray-700">Data Stores<br />SQL · NoSQL</div>
            </div>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Illustrates a backend architecture designed for scalability, security,
              and maintainability, supporting both traditional applications and
              intelligent system backends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact */}
      <section id="contact" className="py-40 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-cyan-900/40" />
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Connect & Collaborate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-14 leading-relaxed"
          >
            Interested in research collaborations, robotics projects, or applied AI work?
            You can explore my work, code, and professional background through the
            platforms below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              className="group p-6 rounded-2xl bg-black/40 border border-gray-700 backdrop-blur hover:border-indigo-400 transition"
            >
              <Github size={34} className="group-hover:text-indigo-400 transition" />
              <p className="mt-3 text-sm text-gray-400">GitHub</p>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="group p-6 rounded-2xl bg-black/40 border border-gray-700 backdrop-blur hover:border-cyan-400 transition"
            >
              <Linkedin size={34} className="group-hover:text-cyan-400 transition" />
              <p className="mt-3 text-sm text-gray-400">LinkedIn</p>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
