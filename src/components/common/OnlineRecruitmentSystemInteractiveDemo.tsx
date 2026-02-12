"use client";

import { useState, useEffect } from "react";
import { 
  Users, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Search, 
  BarChart3,
  CheckCircle,
  Star,
  User,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Settings,
  Database,
  Network,
  Lock,
  Zap,
  TrendingUp,
  X,
  Upload,
  Download,
  Plus,
  Eye,
  UserPlus,
  Calendar,
  MessageCircle,
  BarChart,
  Filter,
  SortAsc,
  Bookmark,
  Bell,
  AlertCircle,
  Award,
  GraduationCap,
  Building,
  Globe,
  Hash,
  CalendarDays
} from "lucide-react";
import { TYPOGRAPHY } from "@/styles/typography";

// Define types for modal content
interface FormField {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface TableItem {
  id: string;
  name: string;
  position: string;
  status: string;
  score: number;
  applied: string;
}

interface ChecklistItem {
  item: string;
  status: string;
  completed: boolean;
}

interface OptionItem {
  name: string;
  desc: string;
  value: string;
}

interface StatItem {
  metric: string;
  value: number | string;
  trend: string;
  icon: string;
}

interface EventItem {
  title: string;
  date: string;
  type: string;
  status: string;
}

interface TemplateItem {
  name: string;
  desc?: string;
  preview?: string;
  selected?: boolean;
}

interface FormatItem {
  name: string;
  desc: string;
  icon: string;
}

interface JobListing {
  title: string;
  department: string;
  location: string;
  posted: string;
  deadline: string;
  applicants: number;
  status: string;
}

interface Application {
  id: string;
  candidateName: string;
  position: string;
  status: string;
  score: number;
  appliedDate: string;
}

interface ModalContent {
  title: string;
  description: string;
  form?: FormField[];
  table?: TableItem[];
  checklist?: ChecklistItem[];
  options?: OptionItem[];
  stats?: StatItem[];
  events?: EventItem[];
  templates?: TemplateItem[];
  formats?: FormatItem[];
  instructions?: string[];
  uploadArea?: boolean;
  jobListings?: JobListing[];
  applications?: Application[];
}

// Module data interface
interface ModuleData {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  metrics: Array<{
    label: string;
    value: string | number;
    trend: 'up' | 'down' | 'neutral';
    change?: string;
  }>;
  features: string[];
  color: string;
  gradient: string;
}

// Module data configuration for Online Recruitment System
const modules: ModuleData[] = [
  {
    id: 'applicant-portal',
    name: 'Applicant Portal',
    icon: User,
    description: 'Candidate application and profile management',
    metrics: [
      { label: 'Active Applications', value: 1250, trend: 'up', change: '+150' },
      { label: 'Profile Completion', value: '87%', trend: 'up', change: '+5%' },
      { label: 'Document Uploads', value: 3400, trend: 'up', change: '+420' }
    ],
    features: ['Profile Management', 'Document Upload', 'Status Tracking'],
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'hr-dashboard',
    name: 'HR Dashboard',
    icon: Briefcase,
    description: 'Recruitment management and candidate review',
    metrics: [
      { label: 'Open Positions', value: 45, trend: 'up', change: '+8' },
      { label: 'Applications Reviewed', value: 2840, trend: 'up', change: '+320' },
      { label: 'Hiring Rate', value: '78%', trend: 'up', change: '+3%' }
    ],
    features: ['Application Review', 'Candidate Shortlisting', 'Communication'],
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'job-listings',
    name: 'Job Listings',
    icon: Search,
    description: 'Position management and search functionality',
    metrics: [
      { label: 'Active Listings', value: 150, trend: 'up', change: '+25' },
      { label: 'Views This Month', value: 12500, trend: 'up', change: '+1800' },
      { label: 'Applications/Listing', value: 8.3, trend: 'up', change: '+1.2' }
    ],
    features: ['Job Posting', 'Search & Filter', 'Application Tracking'],
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'api-scoring',
    name: 'API Scoring',
    icon: BarChart3,
    description: 'Automated academic evaluation system',
    metrics: [
      { label: 'Scores Calculated', value: 5200, trend: 'up', change: '+650' },
      { label: 'Accuracy Rate', value: '95%', trend: 'up', change: '+2%' },
      { label: 'Processing Time', value: '0.5s', trend: 'down', change: '-0.1s' }
    ],
    features: ['Automated Scoring', 'UGC Compliance', 'Real-time Results'],
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'admin-panel',
    name: 'Admin Panel',
    icon: Settings,
    description: 'System configuration and compliance management',
    metrics: [
      { label: 'System Users', value: 125, trend: 'up', change: '+15' },
      { label: 'Compliance Score', value: '99%', trend: 'up', change: '+1%' },
      { label: 'Audit Reports', value: 24, trend: 'up', change: '+3' }
    ],
    features: ['User Management', 'Compliance Monitoring', 'System Settings'],
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'reports-analytics',
    name: 'Reports & Analytics',
    icon: BarChart,
    description: 'Recruitment insights and performance metrics',
    metrics: [
      { label: 'Reports Generated', value: 180, trend: 'up', change: '+25' },
      { label: 'Data Points', value: 50000, trend: 'up', change: '+7500' },
      { label: 'Institutions Served', value: 25, trend: 'up', change: '+3' }
    ],
    features: ['Performance Analytics', 'Trend Analysis', 'Custom Reports'],
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function OnlineRecruitmentSystemInteractiveDemo() {
  const [activeModule, setActiveModule] = useState<ModuleData>(modules[0]);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  // Animation effect for metric values
  useEffect(() => {
    let animationFrameId: number;
    
    const animateMetrics = () => {
      // Reset all values to 0
      const initialValues: Record<string, number> = {};
      activeModule.metrics.forEach((metric, index) => {
        if (typeof metric.value === 'number') {
          initialValues[`metric-${index}`] = 0;
        }
      });
      setAnimatedValues(initialValues);

      // Animate to final values
      const duration = 1500;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValues: Record<string, number> = {};
        activeModule.metrics.forEach((metric, index) => {
          if (typeof metric.value === 'number') {
            currentValues[`metric-${index}`] = metric.value * progress;
          }
        });
        
        setAnimatedValues(currentValues);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animateMetrics();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeModule]);

  const handleModuleSelect = (module: ModuleData) => {
    setActiveModule(module);
  };

  const handleActionClick = (action: string) => {
    let content: ModalContent | null = null;
    
    switch(action) {
      case 'applicant-portal-demo':
        content = {
          title: 'Applicant Portal',
          description: 'Manage your academic job applications and profile information.',
          form: [
            { label: 'Full Name', type: 'text', placeholder: 'Enter your full name', required: true },
            { label: 'Email Address', type: 'email', placeholder: 'Enter your email', required: true },
            { label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
            { label: 'Highest Qualification', type: 'select', options: ['PhD', 'Masters', 'Bachelor', 'Other'] },
            { label: 'Current Position', type: 'text', placeholder: 'Enter your current role' },
            { label: 'Upload CV/Resume', type: 'file', placeholder: 'Select PDF or DOC file' }
          ]
        };
        break;
      case 'hr-dashboard-demo':
        content = {
          title: 'HR Recruitment Dashboard',
          description: 'Review applications and manage the hiring process.',
          table: [
            { id: 'APP001', name: 'Dr. Sarah Johnson', position: 'Assistant Professor', status: 'Under Review', score: 87, applied: '2024-01-15' },
            { id: 'APP002', name: 'Prof. Michael Chen', position: 'Associate Professor', status: 'Shortlisted', score: 92, applied: '2024-01-14' },
            { id: 'APP003', name: 'Dr. Emily Rodriguez', position: 'Lecturer', status: 'Interview Scheduled', score: 85, applied: '2024-01-13' },
            { id: 'APP004', name: 'Dr. James Wilson', position: 'Assistant Professor', status: 'New Application', score: 78, applied: '2024-01-12' }
          ]
        };
        break;
      case 'job-listings-demo':
        content = {
          title: 'Academic Job Listings',
          description: 'Browse and search available faculty positions.',
          jobListings: [
            {
              title: 'Assistant Professor - Computer Science',
              department: 'School of Engineering',
              location: 'Ahmedabad',
              posted: '2024-01-10',
              deadline: '2024-02-15',
              applicants: 45,
              status: 'Open'
            },
            {
              title: 'Associate Professor - Mathematics',
              department: 'Department of Sciences',
              location: 'Ahmedabad',
              posted: '2024-01-08',
              deadline: '2024-02-10',
              applicants: 32,
              status: 'Open'
            }
          ]
        };
        break;
      case 'api-scoring-demo':
        content = {
          title: 'API Score Calculation',
          description: 'Automated academic evaluation based on UGC guidelines.',
          stats: [
            { metric: 'Research Publications', value: 25, trend: 'High', icon: '📚' },
            { metric: 'Teaching Experience', value: 8, trend: 'Medium', icon: '🎓' },
            { metric: 'Academic Qualifications', value: 95, trend: 'High', icon: '🏆' },
            { metric: 'Overall API Score', value: 87.5, trend: 'High', icon: '📊' }
          ]
        };
        break;
      case 'admin-panel-demo':
        content = {
          title: 'System Administration',
          description: 'Manage recruitment system configuration and compliance.',
          checklist: [
            { item: 'User Access Management', status: 'Completed', completed: true },
            { item: 'Compliance Settings', status: 'In Progress', completed: false },
            { item: 'System Integration', status: 'Pending', completed: false },
            { item: 'Audit Configuration', status: 'Ready', completed: false }
          ]
        };
        break;
      case 'reports-analytics-demo':
        content = {
          title: 'Recruitment Analytics',
          description: 'Comprehensive reports and performance insights.',
          formats: [
            { name: 'Recruitment Pipeline', desc: 'Application flow analysis', icon: '📊' },
            { name: 'Candidate Performance', desc: 'API score distribution', icon: '📈' },
            { name: 'Time-to-Hire', desc: 'Process efficiency metrics', icon: '⏱️' },
            { name: 'Compliance Reports', desc: 'UGC guideline adherence', icon: '📋' }
          ]
        };
        break;
      default:
        content = { 
          title: 'Online Recruitment System', 
          description: 'Your complete digital platform for academic faculty recruitment with UGC compliance and automated API scoring.' 
        };
    }

    setModalContent(content);
    setShowModal(true);
  };

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col">
      {/* OS Header */}
      <div className="h-12 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="h-4 w-28 bg-slate-200 rounded-md" />
      </div>

      <div className="flex flex-1">
        {/* Mobile Navigation - Dropdown */}
        <div className="md:hidden w-full p-4 border-b border-slate-200">
          <select 
            value={activeModule.id}
            onChange={(e) => {
              const selectedModule = modules.find(m => m.id === e.target.value);
              if (selectedModule) handleModuleSelect(selectedModule);
            }}
            className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
          >
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block w-16 bg-slate-50 border-r border-slate-200 flex flex-col py-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule.id === module.id;
            
            return (
              <button
                key={module.id}
                onClick={() => handleModuleSelect(module)}
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-2 transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-r ${module.gradient} text-white shadow-lg` 
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                  }
                `}
                aria-label={module.name}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Module Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${activeModule.gradient} flex items-center justify-center`}>
                <activeModule.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold`}>
                  {activeModule.name}
                </h3>
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                  {activeModule.description}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {activeModule.metrics.map((metric, index) => {
              const displayValue = typeof metric.value === 'number' 
                ? Math.floor(animatedValues[`metric-${index}`] || metric.value)
                : metric.value;
              
              return (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs text-slate-600">{metric.label}</h4>
                    {metric.change && (
                      <div className={`text-[10px] px-2 py-1 rounded-full ${
                        metric.trend === 'up' ? 'bg-green-100 text-green-700' :
                        metric.trend === 'down' ? 'bg-red-100 text-red-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {metric.change}
                      </div>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {displayValue}
                    {typeof metric.value === 'string' && metric.value.includes('%') && (
                      <span className="text-base text-slate-500"></span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simplified Features Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-3 text-center">What This Does For You</h4>
            <div className="space-y-2">
              {activeModule.id === 'applicant-portal' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Application Management</div>
                  <div className="text-xs text-slate-600">Create profile, upload documents, track status</div>
                </div>
              )}
              {activeModule.id === 'hr-dashboard' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Recruitment Management</div>
                  <div className="text-xs text-slate-600">Review applications, shortlist candidates</div>
                </div>
              )}
              {activeModule.id === 'job-listings' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Job Discovery</div>
                  <div className="text-xs text-slate-600">Search positions, apply online</div>
                </div>
              )}
              {activeModule.id === 'api-scoring' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Automated Evaluation</div>
                  <div className="text-xs text-slate-600">UGC-compliant API score calculation</div>
                </div>
              )}
              {activeModule.id === 'admin-panel' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">System Administration</div>
                  <div className="text-xs text-slate-600">User management, compliance monitoring</div>
                </div>
              )}
              {activeModule.id === 'reports-analytics' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Analytics & Insights</div>
                  <div className="text-xs text-slate-600">Performance reports, trend analysis</div>
                </div>
              )}
            </div>
            
            {/* Simple Action Button */}
            <div className="mt-4 text-center">
              <button 
                onClick={() => handleActionClick(activeModule.id + '-demo')}
                className="px-4 py-2 bg-[#0494e2] text-white rounded-lg hover:bg-[#037ab8] transition-colors text-sm font-medium"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Modal Overlay */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
              <div className="bg-white rounded-xl w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{modalContent?.title}</h3>
                      <p className="text-slate-600 mt-1">{modalContent?.description}</p>
                    </div>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="p-1 rounded-full hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>

                  {/* Form Content */}
                  {modalContent?.form && (
                    <div className="space-y-4">
                      {modalContent.form.map((field: FormField, index: number) => (
                        <div key={index}>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          {field.type === 'select' ? (
                            <select className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent text-sm sm:text-base">
                              <option value="">Select {field.label.toLowerCase()}</option>
                              {field.options?.map((option: string, idx: number) => (
                                <option key={idx} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <textarea 
                              placeholder={field.placeholder}
                              className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent min-h-[100px] text-sm sm:text-base"
                            ></textarea>
                          ) : field.type === 'file' ? (
                            <div 
                              className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#0494e2] transition-colors cursor-pointer bg-slate-50 hover:bg-white"
                              onClick={() => {
                                // Simulate file selection
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png';
                                input.onchange = (e) => {
                                  const file = (e.target as HTMLInputElement).files?.[0];
                                  if (file) {
                                    alert(`File selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
                                  }
                                };
                                input.click();
                              }}
                            >
                              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                              <p className="text-slate-600 text-sm font-medium">Click to Upload</p>
                              <p className="text-slate-500 text-xs mt-1">PDF, DOC, JPG up to 10MB</p>
                              <p className="text-[#0494e2] text-xs mt-2 font-medium">Try clicking this area!</p>
                            </div>
                          ) : (
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent text-sm sm:text-base"
                              required={field.required}
                            />
                          )}
                        </div>
                      ))}
                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 bg-[#0494e2] text-white py-2 px-4 rounded-lg hover:bg-[#037ab8] transition-colors">
                          Submit Application
                        </button>
                        <button 
                          onClick={() => setShowModal(false)}
                          className="flex-1 bg-slate-100 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Table Content */}
                  {modalContent?.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 text-slate-700">Candidate</th>
                            <th className="text-left py-2 text-slate-700">Position</th>
                            <th className="text-left py-2 text-slate-700">Status</th>
                            <th className="text-left py-2 text-slate-700">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modalContent.table.map((row: TableItem, index: number) => (
                            <tr key={index} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                              <td className="py-3">
                                <div>
                                  <div className="font-medium text-slate-800">{row.name}</div>
                                  <div className="text-xs text-slate-500">{row.id}</div>
                                </div>
                              </td>
                              <td className="py-3 text-slate-700">{row.position}</td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  row.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
                                  row.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                                  row.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-slate-100 text-slate-800'
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                              <td className="py-3">
                                <div className="flex items-center gap-1">
                                  <BarChart3 className="w-4 h-4 text-slate-400" />
                                  <span className="font-medium text-slate-800">{row.score}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Job Listings Content */}
                  {modalContent?.jobListings && (
                    <div className="space-y-4">
                      {modalContent.jobListings.map((job: JobListing, index: number) => (
                        <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-[#0494e2] transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-slate-800">{job.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              job.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'
                            }`}>
                              {job.status}
                            </span>
                          </div>
                          <div className="text-sm text-slate-600 mb-2">
                            <div>{job.department}</div>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </div>
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Posted: {job.posted}</span>
                            <span>Deadline: {job.deadline}</span>
                          </div>
                          <div className="mt-2 text-xs text-slate-500">
                            <span className="font-medium">{job.applicants}</span> applications received
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats Content */}
                  {modalContent?.stats && (
                    <div className="grid grid-cols-2 gap-4">
                      {modalContent.stats.map((stat: StatItem, index: number) => (
                        <div key={index} className="p-4 border border-slate-200 rounded-lg text-center">
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <div className="font-medium text-slate-800">{stat.metric}</div>
                          <div className="text-2xl font-bold text-[#0494e2] my-1">{stat.value}</div>
                          <div className={`text-xs font-medium ${
                            stat.trend === 'High' ? 'text-green-600' : 
                            stat.trend === 'Medium' ? 'text-yellow-600' : 
                            'text-red-600'
                          }`}>
                            {stat.trend} Priority
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Checklist Content */}
                  {modalContent?.checklist && (
                    <div className="space-y-3">
                      {modalContent.checklist.map((item: ChecklistItem, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              item.completed ? 'bg-green-500' : 'bg-slate-300'
                            }`}>
                              {item.completed && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                            <span className={`text-slate-700 ${item.completed ? 'line-through text-slate-500' : ''}`}>
                              {item.item}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-slate-100 text-slate-800'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Formats Content */}
                  {modalContent?.formats && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {modalContent.formats.map((format: FormatItem, index: number) => (
                        <div 
                          key={index} 
                          className="p-4 border border-slate-200 rounded-lg hover:border-[#0494e2] transition-colors cursor-pointer"
                        >
                          <div className="text-2xl mb-2">{format.icon}</div>
                          <div className="font-medium text-slate-800">{format.name}</div>
                          <div className="text-xs text-slate-600 mt-1">{format.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#b4d8f0] to-cyan-200 rounded-2xl blur-xl opacity-25 -z-10" />
    </div>
  );
}