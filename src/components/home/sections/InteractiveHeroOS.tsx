"use client";

import { useState, useEffect } from "react";
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  Library, 
  Home, 
  Briefcase
} from "lucide-react";
import { TYPOGRAPHY } from "@/styles/typography";

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

// Module data configuration
const modules: ModuleData[] = [
  {
    id: 'student-info',
    name: 'Student Information System',
    icon: Users,
    description: 'Comprehensive student management and records',
    metrics: [
      { label: 'Total Students', value: 12450, trend: 'up', change: '+12.5%' },
      { label: 'Active Enrollment', value: 11840, trend: 'up', change: '+8.2%' },
      { label: 'Pending Applications', value: 189, trend: 'down', change: '-15.3%' }
    ],
    features: ['Digital records', 'Automated workflows', 'Analytics dashboard'],
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'faculty',
    name: 'Aacharyaa Faculty Management',
    icon: GraduationCap,
    description: 'Complete academic profile management and NAAC compliance',
    metrics: [
      { label: 'Faculty Profiles', value: 847, trend: 'up', change: '+3.1%' },
      { label: 'NAAC Compliance', value: 'Ready', trend: 'up' },
      { label: 'Report Generation', value: 156, trend: 'up', change: '+22.7%' }
    ],
    features: ['Academic Profile Management', 'NAAC/NIRF Reporting', 'Auto CV Generation'],
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'financial',
    name: 'Financial Management',
    icon: DollarSign,
    description: 'Budget tracking and payment processing',
    metrics: [
      { label: 'Annual Budget', value: '₹42.8M', trend: 'up', change: '+18.5%' },
      { label: 'Collections', value: '₹38.2M', trend: 'up', change: '+12.3%' },
      { label: 'Pending Payments', value: '₹2.1M', trend: 'down', change: '-8.7%' }
    ],
    features: ['Budget planning', 'Payment tracking', 'Financial reporting'],
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'library',
    name: 'Library System',
    icon: Library,
    description: 'Inventory and circulation management',
    metrics: [
      { label: 'Total Books', value: 185600, trend: 'up', change: '+5.2%' },
      { label: 'Active Members', value: 9240, trend: 'up', change: '+7.8%' },
      { label: 'Books Issued', value: 3420, trend: 'neutral' }
    ],
    features: ['Digital catalog', 'Circulation tracking', 'Resource management'],
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 'hostel',
    name: 'Hostel Management',
    icon: Home,
    description: 'Accommodation and maintenance tracking',
    metrics: [
      { label: 'Total Capacity', value: 2850, trend: 'neutral' },
      { label: 'Current Occupancy', value: 2680, trend: 'up', change: '+4.1%' },
      { label: 'Maintenance Requests', value: 23, trend: 'down', change: '-32.4%' }
    ],
    features: ['Room allocation', 'Maintenance tracking', 'Occupancy analytics'],
    color: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'placement',
    name: 'Placement Management',
    icon: Briefcase,
    description: 'Career services and industry connections',
    metrics: [
      { label: 'Job Postings', value: 342, trend: 'up', change: '+28.7%' },
      { label: 'Student Placements', value: 892, trend: 'up', change: '+15.6%' },
      { label: 'Industry Partners', value: 156, trend: 'up', change: '+12.3%' }
    ],
    features: ['Job portal', 'Placement tracking', 'Industry relations'],
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function InteractiveHeroOS() {
  const [activeModule, setActiveModule] = useState<ModuleData>(modules[0]);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

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

  return (
    <div className="relative w-full max-w-[420px] lg:max-w-none bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col">
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
        {/* Sidebar Navigation */}
        <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col py-4">
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
        <div className="flex-1 p-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
                    {typeof metric.value === 'string' && metric.value.includes('₹') && (
                      <span className="text-base text-slate-500">L</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features</h4>
            <div className="grid grid-cols-1 gap-2">
              {activeModule.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeModule.gradient}`}></div>
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#b4d8f0] to-cyan-200 rounded-2xl blur-xl opacity-25 -z-10" />
    </div>
  );
}