import { 
  FaHeartbeat, 
  FaUserMd, 
  FaEye, 
  FaStethoscope,
  FaCut, 
  FaBrain, 
  FaUserNurse, 
  FaSyringe,
  FaAmbulance,
  FaMedkit
} from "react-icons/fa";

const departments = [
  { id: "critical-care", name: "Critical Care", icon: FaAmbulance },
  { id: "cardiac-surgery", name: "Cardiac Surgery", icon: FaHeartbeat },
  { id: "cardiology", name: "Cardiology", icon: FaStethoscope },
  { id: "neurosurgery", name: "Neurosurgery", icon: FaBrain },
  { id: "ophthalmology", name: "Ophthalmology", icon: FaEye },
  { id: "pulmonology", name: "Pulmonology", icon: FaMedkit },
  { id: "general-surgery", name: "General Surgery", icon: FaCut },
  { id: "plastic-surgery", name: "Plastic Surgery", icon: FaUserMd },
  { id: "orthopedic", name: "Orthopedic", icon: FaUserNurse },
  { id: "anesthesiology", name: "Anesthesiology", icon: FaSyringe },
];

export default departments;