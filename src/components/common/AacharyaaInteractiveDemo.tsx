"use client";

import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  FileText, 
  Award, 
  BookOpen, 
  Calendar,
  BarChart3,
  Database,
  Users,
  Star,
  X,
  Upload,
  Download,
  Plus,
  Eye,
  Check
} from "lucide-react";
import { TYPOGRAPHY } from "@/styles/typography";

// Define types for modal content
interface FormField {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

interface TableItem {
  date: string;
  action: string;
  by: string;
}

interface ChecklistItem {
  item: string;
  status: string;
}

interface OptionItem {
  name: string;
  desc: string;
}

interface StatItem {
  paper: string;
  citations: number;
  impact: string;
}

interface PublicationItem {
  title: string;
  journal: string;
  year: number;
  citations: number;
}

interface TimelineItem {
  year: string;
  event: string;
}

interface EventItem {
  name: string;
  date: string;
  type: string;
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

interface ModalContent {
  title: string;
  description: string;
  form?: FormField[];
  table?: TableItem[];
  checklist?: ChecklistItem[];
  options?: OptionItem[];
  stats?: StatItem[];
  publications?: PublicationItem[];
  timeline?: TimelineItem[];
  events?: EventItem[];
  templates?: TemplateItem[];
  formats?: FormatItem[];
  instructions?: string[];
  uploadArea?: boolean;
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

// Module data configuration for Aacharyaa
const modules: ModuleData[] = [
  {
    id: 'academic-profile',
    name: 'Academic Profile',
    icon: GraduationCap,
    description: 'Complete academic profile management',
    metrics: [
      { label: 'Profiles Managed', value: 2450, trend: 'up', change: '+15.2%' },
      { label: 'Active Academics', value: 2100, trend: 'up', change: '+8.7%' },
      { label: 'Updates This Month', value: 320, trend: 'up', change: '+22.1%' }
    ],
    features: ['Profile Creation', 'Experience Tracking', 'Qualification Records'],
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'naac-nirf',
    name: 'NAAC/NIRF Reporting',
    icon: FileText,
    description: 'Ready-to-use compliance reporting',
    metrics: [
      { label: 'NAAC Reports', value: 142, trend: 'up', change: '+32.4%' },
      { label: 'NIRF Submissions', value: 89, trend: 'up', change: '+18.9%' },
      { label: 'Compliance Score', value: '94%', trend: 'up', change: '+4.2%' }
    ],
    features: ['NAAC Criteria', 'NIRF Metrics', 'Auto Documentation'],
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'publications',
    name: 'Research & Publications',
    icon: BookOpen,
    description: 'Research output and publication tracking',
    metrics: [
      { label: 'Research Papers', value: 892, trend: 'up', change: '+25.6%' },
      { label: 'Citations', value: 4210, trend: 'up', change: '+38.7%' },
      { label: 'Impact Factor', value: '7.2', trend: 'up', change: '+1.2' }
    ],
    features: ['Paper Tracking', 'Citation Monitoring', 'Impact Analysis'],
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'awards',
    name: 'Awards & Achievements',
    icon: Award,
    description: 'Recognition and achievement management',
    metrics: [
      { label: 'Awards Recorded', value: 567, trend: 'up', change: '+19.3%' },
      { label: 'Certifications', value: 312, trend: 'up', change: '+27.8%' },
      { label: 'Achievements', value: 1240, trend: 'up', change: '+31.5%' }
    ],
    features: ['Award Tracking', 'Certificate Storage', 'Achievement History'],
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'events',
    name: 'FDPs & Conferences',
    icon: Calendar,
    description: 'Training and event participation tracking',
    metrics: [
      { label: 'FDPs Attended', value: 234, trend: 'up', change: '+42.1%' },
      { label: 'Conferences', value: 156, trend: 'up', change: '+28.3%' },
      { label: 'Workshops', value: 89, trend: 'up', change: '+15.7%' }
    ],
    features: ['Event Registration', 'Attendance Tracking', 'Certificates'],
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'auto-cv',
    name: 'Auto CV Generation',
    icon: BarChart3,
    description: 'Automatic CV and report generation',
    metrics: [
      { label: 'CVs Generated', value: 1890, trend: 'up', change: '+52.3%' },
      { label: 'Reports Created', value: 2100, trend: 'up', change: '+48.7%' },
      { label: 'Templates', value: 12, trend: 'up', change: '+2' }
    ],
    features: ['CV Builder', 'Report Generator', 'Format Options'],
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function AacharyaaInteractiveDemo() {
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
      case 'academic-profile-demo':
        content = {
          title: 'Your Academic Information Hub',
          description: 'This is where you store all your academic credentials and keep them organized in one secure place.',
          form: [
            { label: 'Your Highest Degree', type: 'text', placeholder: 'PhD in Computer Science' },
            { label: 'Where You Studied', type: 'text', placeholder: 'IIT Delhi' },
            { label: 'Year Completed', type: 'number', placeholder: '2020' },
            { label: 'Upload Certificate', type: 'file', placeholder: 'Select file' }
          ]
        };
        break;
      case 'naac-nirf-demo':
        content = {
          title: 'Automatic Government Reports',
          description: 'Instead of manually creating complex reports, the system generates them automatically when your institution needs to prove compliance.',
          checklist: [
            { item: 'Academic Performance Ready', status: 'Ready' },
            { item: 'Research Metrics Complete', status: 'Ready' },
            { item: 'Infrastructure Standards Met', status: 'Ready' },
            { item: 'Governance Practices Verified', status: 'Ready' }
          ]
        };
        break;
      case 'publications-demo':
        content = {
          title: 'Your Research Showcase',
          description: 'Track all your research papers, see how often they are cited, and monitor the impact of your work.',
          stats: [
            { paper: 'Your Latest Research', citations: 15, impact: 'Growing' },
            { paper: 'Previous Publication', citations: 8, impact: 'Steady' },
            { paper: 'Early Work', citations: 3, impact: 'Building' }
          ]
        };
        break;
      case 'awards-demo':
        content = {
          title: 'Document Your Achievements',
          description: 'Record all your awards, honors, and recognitions along with official certificates to verify them.',
          form: [
            { label: 'Award Name', type: 'text', placeholder: 'Best Researcher Award' },
            { label: 'Awarding Organization', type: 'text', placeholder: 'University Grants Commission' },
            { label: 'Date Received', type: 'date' },
            { label: 'Upload Certificate', type: 'file', placeholder: 'Select certificate file' }
          ]
        };
        break;
      case 'events-demo':
        content = {
          title: 'Track Your Professional Growth',
          description: 'Log conferences, workshops, and training programs you attend to build your professional development record.',
          form: [
            { label: 'Event Name', type: 'text', placeholder: 'National Education Conference' },
            { label: 'Location', type: 'text', placeholder: 'Mumbai' },
            { label: 'Start Date', type: 'date' },
            { label: 'Upload Attendance Proof', type: 'file' }
          ]
        };
        break;
      case 'auto-cv-demo':
        content = {
          title: 'Professional CV Creation Made Simple',
          description: 'Create polished, professional CVs automatically from your stored information - no formatting headaches.',
          templates: [
            { name: 'Academic Standard', desc: 'Perfect for university positions' },
            { name: 'Industry-Focused', desc: 'Great for corporate roles' },
            { name: 'Grant Applications', desc: 'Formatted for research funding' },
            { name: 'Conference Submissions', desc: 'Compact for presentations' }
          ]
        };
        break;
      default:
        content = { 
          title: 'Aacharyaa Faculty Management', 
          description: 'This system helps you organize your entire academic career in one place - from degrees to publications to achievements.' 
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
              {activeModule.id === 'academic-profile' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Store Your Academic Info</div>
                  <div className="text-xs text-slate-600">Keep all your degrees and certificates in one secure place</div>
                </div>
              )}
              {activeModule.id === 'naac-nirf' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Generate Compliance Reports</div>
                  <div className="text-xs text-slate-600">Create government reports with one click</div>
                </div>
              )}
              {activeModule.id === 'publications' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Manage Your Research</div>
                  <div className="text-xs text-slate-600">Track publications and see your research impact</div>
                </div>
              )}
              {activeModule.id === 'awards' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Record Your Achievements</div>
                  <div className="text-xs text-slate-600">Document awards and upload certificates</div>
                </div>
              )}
              {activeModule.id === 'events' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Track Professional Activities</div>
                  <div className="text-xs text-slate-600">Log conferences and workshops you attend</div>
                </div>
              )}
              {activeModule.id === 'auto-cv' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Create Professional CVs</div>
                  <div className="text-xs text-slate-600">Generate perfectly formatted CVs automatically</div>
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
                          <label className="block text-sm font-medium text-slate-700 mb-1">{field.label}</label>
                          {field.type === 'select' ? (
                            <select className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent text-sm sm:text-base">
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
                              <p className="text-slate-600 text-sm font-medium">Click to Upload Certificate</p>
                              <p className="text-slate-500 text-xs mt-1">PDF, DOC, JPG up to 10MB</p>
                              <p className="text-[#0494e2] text-xs mt-2 font-medium">Try clicking this area!</p>
                            </div>
                          ) : (
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent text-sm sm:text-base"
                            />
                          )}
                        </div>
                      ))}
                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 bg-[#0494e2] text-white py-2 px-4 rounded-lg hover:bg-[#037ab8] transition-colors">
                          Submit
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
                            <th className="text-left py-2 text-slate-700">Date</th>
                            <th className="text-left py-2 text-slate-700">Action</th>
                            <th className="text-left py-2 text-slate-700">By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modalContent.table.map((row: TableItem, index: number) => (
                            <tr key={index} className="border-b border-slate-100 last:border-b-0">
                              <td className="py-2 text-slate-600">{row.date}</td>
                              <td className="py-2 text-slate-800">{row.action}</td>
                              <td className="py-2 text-slate-600">{row.by}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Checklist Content */}
                  {modalContent?.checklist && (
                    <div className="space-y-3">
                      {modalContent.checklist.map((item: ChecklistItem, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-slate-700">{item.item}</span>
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

                  {/* Options Content */}
                  {modalContent?.options && (
                    <div className="space-y-3">
                      {modalContent.options.map((option: OptionItem, index: number) => (
                        <div key={index} className="p-3 border border-slate-200 rounded-lg hover:border-[#0494e2] transition-colors">
                          <div className="font-medium text-slate-800">{option.name}</div>
                          <div className="text-sm text-slate-600">{option.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats Content */}
                  {modalContent?.stats && (
                    <div className="space-y-4">
                      {modalContent.stats.map((stat: StatItem, index: number) => (
                        <div key={index} className="p-3 border border-slate-200 rounded-lg">
                          <div className="font-medium text-slate-800">{stat.paper}</div>
                          <div className="flex justify-between mt-2">
                            <span className="text-slate-600">Citations: {stat.citations}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              stat.impact === 'High' ? 'bg-red-100 text-red-800' : 
                              stat.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'
                            }`}>
                              {stat.impact}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Publications Content */}
                  {modalContent?.publications && (
                    <div className="space-y-3">
                      {modalContent.publications.map((pub: PublicationItem, index: number) => (
                        <div key={index} className="p-3 border border-slate-200 rounded-lg">
                          <div className="font-medium text-slate-800">{pub.title}</div>
                          <div className="text-sm text-slate-600">{pub.journal} ({pub.year})</div>
                          <div className="text-sm text-slate-500 mt-1">Citations: {pub.citations}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Timeline Content */}
                  {modalContent?.timeline && (
                    <div className="space-y-4">
                      {modalContent.timeline.map((item: TimelineItem, index: number) => (
                        <div key={index} className="flex">
                          <div className="mr-4 text-slate-500 min-w-[60px]">{item.year}</div>
                          <div className="flex-1 pb-4 border-l-2 border-slate-200 pl-4 relative">
                            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#0494e2] border-4 border-white"></div>
                            <div className="font-medium text-slate-800">{item.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Events Content */}
                  {modalContent?.events && (
                    <div className="space-y-3">
                      {modalContent.events.map((event: EventItem, index: number) => (
                        <div key={index} className="p-3 border border-slate-200 rounded-lg">
                          <div className="font-medium text-slate-800">{event.name}</div>
                          <div className="flex justify-between text-sm text-slate-600">
                            <span>{event.date}</span>
                            <span className="capitalize">{event.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Templates Content */}
                  {modalContent?.templates && (
                    <div className="space-y-3">
                      {modalContent.templates.map((template: TemplateItem, index: number) => (
                        <div 
                          key={index} 
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            template.selected ? 'border-[#0494e2] bg-[#f0f9ff]' : 'border-slate-200 hover:border-[#0494e2]'
                          }`}
                        >
                          <div className="font-medium text-slate-800">{template.name}</div>
                          <div className="text-sm text-slate-600">{template.desc || template.preview}</div>
                          {template.selected && (
                            <div className="mt-2 text-xs text-[#0494e2] font-medium">SELECTED</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Formats Content */}
                  {modalContent?.formats && (
                    <div className="grid grid-cols-2 gap-3">
                      {modalContent.formats.map((format: FormatItem, index: number) => (
                        <div 
                          key={index} 
                          className="p-4 border border-slate-200 rounded-lg text-center hover:border-[#0494e2] transition-colors cursor-pointer"
                        >
                          <div className="text-2xl mb-1">{format.icon}</div>
                          <div className="font-medium text-slate-800">{format.name}</div>
                          <div className="text-xs text-slate-600">{format.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Instructions Content */}
                  {modalContent?.instructions && (
                    <div className="space-y-2">
                      {modalContent.instructions.map((instruction: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-slate-700">{instruction}</span>
                        </div>
                      ))}
                      {modalContent.uploadArea && (
                        <div className="mt-4 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#0494e2] transition-colors">
                          <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-600 text-sm">Click to upload certificate</p>
                          <p className="text-slate-500 text-xs mt-1">PDF, JPG, PNG up to 10MB</p>
                        </div>
                      )}
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