"use client";
import React, { useState } from "react";
import {
  Plus,
  User,
  LogOut,
  ChevronRight,
  School,
  CheckCircle,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Save,
  Download,
  Eye,
  Trash2,
  XCircle,
  Edit3,
} from "lucide-react";
type StudentFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
};


type StudentDetailsFormProps = {
  defaultValues: StudentFormValues;
};


// --- Mock Data ---

const DUBLIN_SCHOOLS = [
  "Belvedere College, Dublin 1",
  "Blackrock College, Blackrock",
  "Loreto College, St. Stephen's Green",
  "Mount Anville Secondary School, Dublin 14",
  "St. Andrew's College, Booterstown",
  "St. Mary's College, Rathmines",
  "The High School, Rathgar",
  "Wesley College, Ballinteer",
  "Gonzaga College, Ranelagh",
  "Alexandra College, Milltown",
];

// --- Form Components (Adapted from Admin Module) ---

const StudentDetailsForm = ({
  defaultValues,
}: StudentDetailsFormProps) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-black mb-4">
        Student Personal Details
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            defaultValue={defaultValues.firstName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last name
          </label>
          <input
            type="text"
            defaultValue={defaultValues.lastName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of birth
          </label>
          <input
            type="date"
            defaultValue={defaultValues.dob}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PPSN
          </label>
          <input
            type="text"
            placeholder="e.g. 1234567AB"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-4 h-4 text-[#fbbf24] focus:ring-[#fbbf24]"
              />
              <span className="text-sm">Female</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-4 h-4 text-[#fbbf24] focus:ring-[#fbbf24]"
              />
              <span className="text-sm">Male</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Religion
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent">
            <option>Select Religion...</option>
            <option>Roman Catholic</option>
            <option>Church of Ireland</option>
            <option>Other</option>
            <option>No Religion</option>
          </select>
        </div>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-black mb-4">Student Address</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address line 1
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address line 2
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Town/City
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Eircode
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GuardianDetailsForm = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-black mb-4">Guardian 1 Details</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Relationship to student
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent">
            <option>Select...</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Guardian</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-black mb-4">Guardian 1 Address</h3>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="sameAddress"
          className="w-4 h-4 text-[#fbbf24] focus:ring-[#fbbf24] border-gray-300 rounded"
        />
        <label htmlFor="sameAddress" className="text-sm text-gray-700">
          Same as Student Address
        </label>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address line 1
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Town/City
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Eircode
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CriteriaForm = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-8">
      {[
        "Child's has a sibling(s) currently enrolled in the school.",
        "Child of current staff members in the school",
        "Child sibling or parent previously attended the school.",
        "Child is currently attending a primary school in the catchment area",
      ].map((criteria, idx) => (
        <div key={idx} className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            {criteria}
          </label>
          <div className="space-y-2">
            {["No", "Yes"].map((option) => (
              <label
                key={option}
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 bg-white border-gray-200 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900">
                  {option}
                </span>
                <input
                  type="radio"
                  name={`criteria_${idx}`}
                  className="w-5 h-5 text-[#fbbf24] focus:ring-[#fbbf24]"
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ASDDetailsForm = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Are you applying for a place in the ASD class?
        </label>
        <div className="space-y-2">
          {["No", "Yes"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 bg-white border-gray-200 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">
                {option}
              </span>
              <input
                type="radio"
                name="asd_apply"
                className="w-5 h-5 text-[#fbbf24] focus:ring-[#fbbf24]"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const EducationalDetailsForm = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-black mb-4">Primary School</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name and Address of current primary school
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            School Roll Number
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent"
          />
        </div>
      </div>
    </div>
  </div>
);

const MedicalDetailsForm = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Does the student have any medical conditions?
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
);

const DocumentsForm = () => {
  const [documents, setDocuments] = useState([]);

  const addDoc = () => {
    const id = Math.random();
    setDocuments([
      ...documents,
      { id, name: "new_document.pdf", type: "Birth Certificate" },
    ]);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-end">
        <button
          onClick={addDoc}
          className="flex items-center gap-2 px-4 py-2 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-sm"
        >
          <Plus size={16} /> Add Document
        </button>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {documents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No documents uploaded yet.
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 text-gray-900">{doc.name}</td>
                  <td className="px-6 py-4 text-gray-900">{doc.type}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

// --- Layout Components ---

const Header = ({ user, onLogout }) => (
  <div className="max-w-3xl mx-auto mb-8 flex justify-between items-end">
    <div className="flex flex-col leading-none">
      <span
        className="text-[42px] font-black tracking-tighter text-black"
        style={{ lineHeight: "0.8" }}
      >
        US
      </span>
      <span className="text-[11px] font-bold tracking-wide text-black mt-1">
        UniqueSchools
      </span>
    </div>
    {user && (
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-black">{user.name}</p>
          <p className="text-xs text-gray-500">Parent Account</p>
        </div>
        <button
          onClick={onLogout}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    )}
  </div>
);

const Footer = () => (
  <footer className="max-w-3xl mx-auto mt-12 text-center text-[11px] text-black font-medium space-y-6 pb-8">
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
      <span>
        Powered by <strong className="font-extrabold">Unique Schools</strong>
      </span>
      <a href="#" className="hover:underline text-gray-800 transition-colors">
        Terms and conditions
      </a>
      <a href="#" className="hover:underline text-gray-800 transition-colors">
        Privacy Policy
      </a>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-1 text-gray-900">
      <span>Need Support - email</span>
      <a
        href="mailto:support@uniqueschools.ie"
        className="text-blue-700 font-bold hover:underline mx-1 transition-colors"
      >
        support@uniqueschools.ie
      </a>
    </div>
  </footer>
);

// --- Views ---

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ name: "Sarah O'Connor", email });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-black mb-6">Parent Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all"
            placeholder="parent@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-sm"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center">
        <a
          href="#"
          className="text-xs text-gray-500 hover:text-black transition-colors"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

const AddStudentModal = ({ isOpen, onClose, onAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      firstName,
      lastName,
      dob,
      id: Math.random().toString(36).substr(2, 9),
    });
    setFirstName("");
    setLastName("");
    setDob("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
        <h3 className="text-xl font-bold text-black mb-6">Add New Student</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#fbbf24] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#fbbf24] outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#fbbf24] outline-none"
            />
          </div>
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-black font-bold text-sm rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-sm"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DashboardView = ({ students, onAddStudent, onStartApplication }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-[#fbbf24]/10 border border-[#fbbf24]/20 rounded-xl p-6">
        <h1 className="text-2xl font-bold text-black mb-2">
          Welcome to Admissions
        </h1>
        <p className="text-gray-700">
          Manage your children's profiles and start new school applications
          below.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-black">My Students</h2>
        <button
          onClick={onAddStudent}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 font-bold text-sm rounded-lg transition-colors shadow-sm"
        >
          <Plus size={16} />
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-black mb-2">
            No students added yet
          </h3>
          <p className="text-gray-500 mb-6">
            Add your child's details to begin the application process.
          </p>
          <button
            onClick={onAddStudent}
            className="px-6 py-2.5 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-sm"
          >
            Add Your First Student
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between hover:border-[#fbbf24] transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                  {student.firstName[0]}
                  {student.lastName[0]}
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">
                    {student.firstName} {student.lastName}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {student.dob}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> Candidate
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onStartApplication(student)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all"
              >
                Begin Application <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// STEP 1: School Preferences
const SchoolPreferenceStep = ({ student, onNext, onBack }) => {
  const [pref1, setPref1] = useState("");
  const [pref2, setPref2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ pref1, pref2 });
  };

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-black font-medium mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">
              Step 1: School Preferences
            </h2>
            <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
              1 of 3
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Applying for:{" "}
            <strong className="text-black">
              {student.firstName} {student.lastName}
            </strong>
          </p>
        </div>

        <div className="p-8">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 flex items-start gap-3">
            <School className="text-blue-600 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-blue-900 font-medium">
                Please select your preferred schools in order of priority.
              </p>
              <p className="text-xs text-blue-700 mt-1">
                You may select up to 2 schools from the Dublin region for this
                application round.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-black flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
                  1
                </span>
                First Preference School
              </label>
              <div className="relative">
                <select
                  required
                  value={pref1}
                  onChange={(e) => setPref1(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a school...
                  </option>
                  {DUBLIN_SCHOOLS.filter((s) => s !== pref2).map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                  <ChevronRight className="rotate-90" size={16} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-black flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs">
                  2
                </span>
                Second Preference School
              </label>
              <div className="relative">
                <select
                  required
                  value={pref2}
                  onChange={(e) => setPref2(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a school...
                  </option>
                  {DUBLIN_SCHOOLS.filter((s) => s !== pref1).map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                  <ChevronRight className="rotate-90" size={16} />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button
                type="submit"
                disabled={!pref1 || !pref2}
                className="w-full py-4 bg-[#fbbf24] hover:bg-amber-400 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-black font-bold text-base rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Submit and Next <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// STEP 2: Application Details (Student, Guardian, Criteria, etc.)
const ApplicationDetailsStep = ({ student, onBack, onSubmit }) => {
  const [activeTab, setActiveTab] = useState("student");

  const tabs = [
    { id: "student", label: "Student Info" },
    { id: "guardian", label: "Guardian Info" },
    { id: "criteria", label: "Criteria" },
    { id: "asd", label: "ASD Info" },
    { id: "education", label: "Education" },
    { id: "medical", label: "Medical" },
    { id: "documents", label: "Documents" },
  ];

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-black font-medium mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Preferences
      </button>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-50 border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">
              Step 2: Applicant Details
            </h2>
            <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
              2 of 3
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Please verify and complete details for{" "}
            <strong className="text-black">
              {student.firstName} {student.lastName}
            </strong>
          </p>
        </div>

        {/* Scrollable Horizontal Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-[#fbbf24] text-black bg-[#fbbf24]/5"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 bg-gray-50/50 min-h-[400px]">
          {activeTab === "student" && (
            <StudentDetailsForm defaultValues={student} />
          )}
          {activeTab === "guardian" && <GuardianDetailsForm />}
          {activeTab === "criteria" && <CriteriaForm />}
          {activeTab === "asd" && <ASDDetailsForm />}
          {activeTab === "education" && <EducationalDetailsForm />}
          {activeTab === "medical" && <MedicalDetailsForm />}
          {activeTab === "documents" && <DocumentsForm />}
        </div>

        <div className="p-6 border-t border-gray-200 bg-white">
          <button
            onClick={onSubmit}
            className="w-full py-4 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-base rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            Review and Submit <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// STEP 3: Summary & Final Submit
const SummaryStep = ({ student, applicationData, onBack, onFinalSubmit }) => (
  <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-gray-500 hover:text-black font-medium mb-6 transition-colors"
    >
      <ArrowLeft size={16} /> Back to Details
    </button>

    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
      <div className="bg-gray-50 border-b border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-black">
            Step 3: Review Application
          </h2>
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
            3 of 3
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Please review all details before final submission.
        </p>
      </div>

      <div className="p-8 space-y-8">
        {/* Preferences Summary */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">
            School Preferences
          </h3>
          <div className="grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-xs font-bold text-gray-500 uppercase">
                1st Preference
              </span>
              <p className="text-black font-medium">{applicationData.pref1}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-xs font-bold text-gray-500 uppercase">
                2nd Preference
              </span>
              <p className="text-black font-medium">{applicationData.pref2}</p>
            </div>
          </div>
        </div>

        {/* Student Summary (Brief) */}
        <div>
          <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">
            Student Information
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Name:</span>{" "}
              <span className="font-medium text-black">
                {student.firstName} {student.lastName}
              </span>
            </div>
            <div>
              <span className="text-gray-500">DOB:</span>{" "}
              <span className="font-medium text-black">{student.dob}</span>
            </div>
            <div>
              <span className="text-gray-500">Status:</span>{" "}
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold">
                Ready
              </span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          By submitting this application, you confirm that all the information
          provided is accurate and true to the best of your knowledge.
        </div>

        <button
          onClick={onFinalSubmit}
          className="w-full py-4 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-base rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <CheckCircle size={20} /> Confirm and Submit Application
        </button>
      </div>
    </div>
  </div>
);

const SuccessView = ({ student, onDashboard }) => (
  <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">
    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <CheckCircle size={40} className="text-green-600" />
    </div>
    <h2 className="text-2xl font-bold text-black mb-2">
      Application Submitted!
    </h2>
    <p className="text-gray-600 mb-8">
      We have received your complete application for{" "}
      <strong>{student.firstName}</strong>. You will receive a confirmation
      email shortly.
    </p>
    <button
      onClick={onDashboard}
      className="px-8 py-3 bg-[#fbbf24] hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-sm"
    >
      Return to Dashboard
    </button>
  </div>
);

// --- Main App ---

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login"); // login, dashboard, preferences, details, summary, success
  const [students, setStudents] = useState([]);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [applicationData, setApplicationData] = useState({});

  const handleLogin = (userData) => {
    setUser(userData);
    setView("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setView("login");
    setStudents([]);
    setSelectedStudent(null);
    setApplicationData({});
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleStartApplication = (student) => {
    setSelectedStudent(student);
    setView("preferences");
  };

  const handlePreferencesSubmit = (preferences) => {
    setApplicationData({ ...applicationData, ...preferences });
    setView("details");
  };

  const handleDetailsSubmit = () => {
    // In a real app, we would gather data from all forms here
    setView("summary");
  };

  const handleFinalSubmit = () => {
    setView("success");
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-gray-900 p-6 md:p-8">
      <Header user={user} onLogout={handleLogout} />

      {view === "login" && <LoginView onLogin={handleLogin} />}

      {view === "dashboard" && (
        <>
          <DashboardView
            students={students}
            onAddStudent={() => setIsAddStudentModalOpen(true)}
            onStartApplication={handleStartApplication}
          />
          <AddStudentModal
            isOpen={isAddStudentModalOpen}
            onClose={() => setIsAddStudentModalOpen(false)}
            onAdd={handleAddStudent}
          />
        </>
      )}

      {view === "preferences" && selectedStudent && (
        <SchoolPreferenceStep
          student={selectedStudent}
          onNext={handlePreferencesSubmit}
          onBack={() => setView("dashboard")}
        />
      )}

      {view === "details" && selectedStudent && (
        <ApplicationDetailsStep
          student={selectedStudent}
          onBack={() => setView("preferences")}
          onSubmit={handleDetailsSubmit}
        />
      )}

      {view === "summary" && selectedStudent && (
        <SummaryStep
          student={selectedStudent}
          applicationData={applicationData}
          onBack={() => setView("details")}
          onFinalSubmit={handleFinalSubmit}
        />
      )}

      {view === "success" && selectedStudent && (
        <SuccessView
          student={selectedStudent}
          onDashboard={() => setView("dashboard")}
        />
      )}

      <Footer />
    </div>
  );
}
