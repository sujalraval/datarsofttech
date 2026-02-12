"use client";

import { useState, useEffect } from "react";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Globe, 
  ShieldCheck,
  CheckCircle,
  Star,
  User,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Settings,
  Database,
  Network,
  Lock,
  Zap,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Award,
  Eye,
  Download,
  Share2,
  Bookmark,
  Filter,
  SortAsc,
  Hash,
  CalendarDays,
  X,
  Upload,
  Plus,
  Edit3,
  Trash2,
  UserPlus,
  UserCheck,
  MessageSquare,
  Bell,
  AlertCircle,
  ThumbsUp,
  MessageCircle,
  Paperclip,
  File,
  Printer,
  ExternalLink,
  Copy,
  Flag
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

interface ArticleItem {
  id: string;
  title: string;
  author: string;
  department: string;
  status: string;
  views: number;
  downloads: number;
  citations: number;
  publishedDate: string;
}

interface ChecklistItem {
  item: string;
  status: string;
  completed: boolean;
}

interface ReviewItem {
  reviewer: string;
  expertise: string;
  status: string;
  comments: string;
  recommendation: string;
}

interface MetricItem {
  metric: string;
  value: number | string;
  change: string;
  icon: string;
}

interface StatItem {
  label: string;
  value: string | number;
  trend: 'up' | 'down' | 'neutral';
}

interface EditorialMember {
  name: string;
  role: string;
  department: string;
  expertise: string;
}

interface ModalContent {
  title: string;
  description: string;
  form?: FormField[];
  articles?: ArticleItem[];
  checklist?: ChecklistItem[];
  reviews?: ReviewItem[];
  metrics?: MetricItem[];
  stats?: StatItem[];
  editorialTeam?: EditorialMember[];
  submissionGuidelines?: string[];
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

// Module data configuration for Research Journal
const modules: ModuleData[] = [
  {
    id: 'article-submission',
    name: 'Article Submission',
    icon: FileText,
    description: 'Manuscript submission and tracking system',
    metrics: [
      { label: 'Submissions This Month', value: 45, trend: 'up', change: '+12' },
      { label: 'Under Review', value: 28, trend: 'neutral' },
      { label: 'Accepted', value: 15, trend: 'up', change: '+3' }
    ],
    features: ['Easy Submission', 'Status Tracking', 'Document Management'],
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'peer-review',
    name: 'Peer Review',
    icon: UserCheck,
    description: 'Reviewer management and evaluation process',
    metrics: [
      { label: 'Active Reviewers', value: 85, trend: 'up', change: '+8' },
      { label: 'Reviews Completed', value: 120, trend: 'up', change: '+15' },
      { label: 'Average Review Time', value: '14 days', trend: 'down', change: '-2 days' }
    ],
    features: ['Reviewer Assignment', 'Review Tracking', 'Quality Assurance'],
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'editorial-dashboard',
    name: 'Editorial Dashboard',
    icon: Settings,
    description: 'Editorial workflow and decision management',
    metrics: [
      { label: 'Issues Published', value: 12, trend: 'up', change: '+2' },
      { label: 'Pending Decisions', value: 18, trend: 'neutral' },
      { label: 'Editorial Efficiency', value: '92%', trend: 'up', change: '+3%' }
    ],
    features: ['Workflow Management', 'Decision Tracking', 'Issue Planning'],
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'analytics-insights',
    name: 'Analytics & Insights',
    icon: BarChart3,
    description: 'Research impact and performance metrics',
    metrics: [
      { label: 'Monthly Views', value: 15000, trend: 'up', change: '+2500' },
      { label: 'Article Downloads', value: 2300, trend: 'up', change: '+400' },
      { label: 'Citation Index', value: 'SCI/EI', trend: 'up', change: '+2 categories' }
    ],
    features: ['View Analytics', 'Download Tracking', 'Citation Metrics'],
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'journal-management',
    name: 'Journal Management',
    icon: BookOpen,
    description: 'Publication management and branding',
    metrics: [
      { label: 'Published Articles', value: 2500, trend: 'up', change: '+150' },
      { label: 'Indexed Journals', value: 8, trend: 'up', change: '+1' },
      { label: 'Institutional Reach', value: '50+', trend: 'up', change: '+5' }
    ],
    features: ['Issue Management', 'Branding Control', 'Indexing Support'],
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'author-portal',
    name: 'Author Portal',
    icon: User,
    description: 'Researcher profile and publication management',
    metrics: [
      { label: 'Active Authors', value: 1200, trend: 'up', change: '+85' },
      { label: 'Publications per Author', value: 2.3, trend: 'up', change: '+0.2' },
      { label: 'Profile Completion', value: '87%', trend: 'up', change: '+5%' }
    ],
    features: ['Profile Management', 'Publication Tracking', 'Impact Metrics'],
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function ResearchJournalInteractiveDemo() {
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
      case 'article-submission-demo':
        content = {
          title: 'Submit Research Article',
          description: 'Submit your manuscript for peer review and publication.',
          form: [
            { label: 'Article Title', type: 'text', placeholder: 'Enter full article title', required: true },
            { label: 'Author Name', type: 'text', placeholder: 'Enter your full name', required: true },
            { label: 'Department/Affiliation', type: 'text', placeholder: 'Enter your department', required: true },
            { label: 'Abstract', type: 'textarea', placeholder: 'Provide article abstract (250-300 words)' },
            { label: 'Keywords', type: 'text', placeholder: 'Enter relevant keywords separated by commas' },
            { label: 'Upload Manuscript', type: 'file', placeholder: 'Select PDF or DOC file' },
            { label: 'Article Type', type: 'select', options: ['Research Article', 'Review Article', 'Case Study', 'Short Communication'] }
          ]
        };
        break;
      case 'peer-review-demo':
        content = {
          title: 'Peer Review Management',
          description: 'Manage reviewer assignments and track review progress.',
          reviews: [
            {
              reviewer: 'Dr. Sarah Johnson',
              expertise: 'Computer Science',
              status: 'Completed',
              comments: 'Well-structured research with significant contributions to the field.',
              recommendation: 'Accept'
            },
            {
              reviewer: 'Prof. Michael Chen',
              expertise: 'Data Science',
              status: 'In Progress',
              comments: 'Methodology is sound, but needs clarification on data sources.',
              recommendation: 'Minor Revisions'
            },
            {
              reviewer: 'Dr. Emily Rodriguez',
              expertise: 'Artificial Intelligence',
              status: 'Pending',
              comments: '',
              recommendation: 'Awaiting Review'
            }
          ]
        };
        break;
      case 'editorial-dashboard-demo':
        content = {
          title: 'Editorial Workflow',
          description: 'Manage editorial decisions and publication workflow.',
          articles: [
            { id: 'ART001', title: 'Machine Learning Applications in Education', author: 'Dr. John Smith', department: 'Computer Science', status: 'Under Review', views: 1250, downloads: 340, citations: 15, publishedDate: '2024-01-15' },
            { id: 'ART002', title: 'Sustainable Campus Development Strategies', author: 'Prof. Maria Garcia', department: 'Environmental Science', status: 'Accepted', views: 890, downloads: 280, citations: 8, publishedDate: '2024-01-10' },
            { id: 'ART003', title: 'Digital Transformation in Higher Education', author: 'Dr. Robert Wilson', department: 'Educational Technology', status: 'In Press', views: 2100, downloads: 650, citations: 22, publishedDate: '2024-01-20' }
          ]
        };
        break;
      case 'analytics-insights-demo':
        content = {
          title: 'Research Impact Analytics',
          description: 'Track article performance and research impact metrics.',
          metrics: [
            { metric: 'Monthly Article Views', value: 15420, change: '+25%', icon: '👁️' },
            { metric: 'Downloads This Month', value: 2340, change: '+18%', icon: '📥' },
            { metric: 'Citation Growth', value: '32%', change: '+8%', icon: '📈' },
            { metric: 'Social Shares', value: 890, change: '+45%', icon: '🔗' }
          ]
        };
        break;
      case 'journal-management-demo':
        content = {
          title: 'Journal Administration',
          description: 'Manage journal publications and institutional branding.',
          checklist: [
            { item: 'Issue Planning and Scheduling', status: 'Completed', completed: true },
            { item: 'Indexing Applications', status: 'In Progress', completed: false },
            { item: 'Editorial Board Updates', status: 'Pending', completed: false },
            { item: 'Compliance Documentation', status: 'Ready', completed: false }
          ]
        };
        break;
      case 'author-portal-demo':
        content = {
          title: 'Author Profile Management',
          description: 'Manage your research profile and publication history.',
          editorialTeam: [
            { name: 'Dr. John Smith', role: 'Editor-in-Chief', department: 'Computer Science', expertise: 'AI & Machine Learning' },
            { name: 'Prof. Maria Garcia', role: 'Associate Editor', department: 'Environmental Science', expertise: 'Sustainability' },
            { name: 'Dr. Robert Wilson', role: 'Review Editor', department: 'Education', expertise: 'Digital Learning' }
          ]
        };
        break;
      default:
        content = { 
          title: 'Research Journal Platform', 
          description: 'Your complete digital platform for academic research publishing, peer review, and scholarly communication with impact analytics and institutional branding.' 
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
              {activeModule.id === 'article-submission' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Streamlined Submission</div>
                  <div className="text-xs text-slate-600">Easy manuscript upload and tracking</div>
                </div>
              )}
              {activeModule.id === 'peer-review' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Expert Review Management</div>
                  <div className="text-xs text-slate-600">Reviewer assignment and quality control</div>
                </div>
              )}
              {activeModule.id === 'editorial-dashboard' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Editorial Workflow</div>
                  <div className="text-xs text-slate-600">Decision tracking and issue management</div>
                </div>
              )}
              {activeModule.id === 'analytics-insights' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Impact Analytics</div>
                  <div className="text-xs text-slate-600">Views, downloads, and citation metrics</div>
                </div>
              )}
              {activeModule.id === 'journal-management' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Publication Management</div>
                  <div className="text-xs text-slate-600">Issue planning and institutional branding</div>
                </div>
              )}
              {activeModule.id === 'author-portal' && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">Researcher Profile</div>
                  <div className="text-xs text-slate-600">Publication tracking and impact metrics</div>
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
                                input.accept = '.pdf,.doc,.docx';
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
                              <p className="text-slate-500 text-xs mt-1">PDF, DOC up to 20MB</p>
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
                          Submit Article
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

                  {/* Reviews Content */}
                  {modalContent?.reviews && (
                    <div className="space-y-4">
                      {modalContent.reviews.map((review: ReviewItem, index: number) => (
                        <div key={index} className="p-4 border border-slate-200 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium text-slate-800">{review.reviewer}</h4>
                              <p className="text-sm text-slate-600">{review.expertise}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              review.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              review.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-slate-100 text-slate-800'
                            }`}>
                              {review.status}
                            </span>
                          </div>
                          
                          <div className="text-sm text-slate-700 mb-2">
                            <strong>Comments:</strong> {review.comments || 'No comments yet'}
                          </div>
                          
                          <div className="text-sm">
                            <strong>Recommendation:</strong> 
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                              review.recommendation === 'Accept' ? 'bg-green-100 text-green-800' :
                              review.recommendation === 'Minor Revisions' ? 'bg-yellow-100 text-yellow-800' :
                              review.recommendation === 'Major Revisions' ? 'bg-orange-100 text-orange-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {review.recommendation}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Articles Table */}
                  {modalContent?.articles && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 text-slate-700">Article</th>
                            <th className="text-left py-2 text-slate-700">Status</th>
                            <th className="text-left py-2 text-slate-700">Views</th>
                            <th className="text-left py-2 text-slate-700">Downloads</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modalContent.articles.map((article: ArticleItem, index: number) => (
                            <tr key={index} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                              <td className="py-3">
                                <div>
                                  <div className="font-medium text-slate-800">{article.title}</div>
                                  <div className="text-xs text-slate-500">{article.author} • {article.department}</div>
                                </div>
                              </td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  article.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                                  article.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                                  article.status === 'In Press' ? 'bg-blue-100 text-blue-800' :
                                  'bg-slate-100 text-slate-800'
                                }`}>
                                  {article.status}
                                </span>
                              </td>
                              <td className="py-3">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-700">{article.views}</span>
                                </div>
                              </td>
                              <td className="py-3">
                                <div className="flex items-center gap-1">
                                  <Download className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-700">{article.downloads}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Metrics Content */}
                  {modalContent?.metrics && (
                    <div className="grid grid-cols-2 gap-4">
                      {modalContent.metrics.map((metric: MetricItem, index: number) => (
                        <div key={index} className="p-4 border border-slate-200 rounded-lg text-center">
                          <div className="text-2xl mb-2">{metric.icon}</div>
                          <div className="font-medium text-slate-800">{metric.metric}</div>
                          <div className="text-xl font-bold text-[#0494e2] my-1">{metric.value}</div>
                          <div className="text-xs text-green-600 font-medium">↑ {metric.change}</div>
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

                  {/* Editorial Team Content */}
                  {modalContent?.editorialTeam && (
                    <div className="space-y-4">
                      {modalContent.editorialTeam.map((member: EditorialMember, index: number) => (
                        <div key={index} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-800">{member.name}</h4>
                            <p className="text-sm text-slate-600">{member.role}</p>
                            <p className="text-xs text-slate-500">{member.department}</p>
                            <p className="text-xs text-slate-500 mt-1">Expertise: {member.expertise}</p>
                          </div>
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