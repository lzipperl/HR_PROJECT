import SectionCard from '../components/SectionCard';
import { Building2, Users, BookOpen, MapPin, Award, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">About & References</h1>
        <p className="text-sm text-gray-500 mt-1">University information, team details, and academic references</p>
      </div>

      {/* About LPU */}
      <SectionCard title="🏛️ About Lovely Professional University" subtitle="India's largest single-campus university">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Lovely Professional University (LPU)</strong> was established in 
              <strong> 2005</strong> by the Lovely International Trust and commenced operations in 2006. Located on a 
              sprawling <strong>600-acre campus</strong> in Chaheru, Phagwara, Punjab (on the Grand Trunk Road), LPU is 
              recognized as India's largest single-campus university.
            </p>
            <p>
              The university offers <strong>150+ programs across 200+ courses</strong>, serving <strong>34,871+ students</strong> 
              including <strong>1,800+ international students from 40 countries</strong>. LPU has been accredited with 
              <strong> NAAC A++ grade</strong> and holds <strong>UGC Category 1 University</strong> status with Graded Autonomy.
            </p>
            <p>
              LPU's commitment to research excellence is reflected in its <strong>1,418 patents filed in 2023-24</strong> 
              (more than all IITs combined), <strong>19,800+ Scopus publications</strong>, and <strong>49 faculty members</strong> 
              featured in the Stanford University Top 2% Scientists list.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { icon: MapPin, label: 'Location', value: 'Chaheru, Phagwara, Punjab — GT Road' },
              { icon: Building2, label: 'Campus', value: '600 acres — Largest single campus in India' },
              { icon: Users, label: 'Students', value: '34,871+ (1,800+ international)' },
              { icon: BookOpen, label: 'Programs', value: '150+ programs, 200+ courses' },
              { icon: Award, label: 'Accreditation', value: 'NAAC A++ | UGC Category 1' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-3 bg-maroon-50 rounded-xl">
                <item.icon className="w-5 h-5 text-maroon mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Team Members */}
      <SectionCard title="👥 Team Members" subtitle="Group members for HRM203 assignment">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 border-2 border-dashed border-gray-300 rounded-xl text-center hover:border-maroon transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon-50 to-gold-50 mx-auto mb-3 flex items-center justify-center">
                <Users className="w-6 h-6 text-maroon/40" />
              </div>
              <p className="text-sm font-medium text-gray-400">Team Member {i}</p>
              <p className="text-xs text-gray-300 mt-0.5">Name & Registration No.</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Assignment Details */}
      <SectionCard title="📄 Assignment Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500">Subject Code</p>
            <p className="font-semibold text-gray-900">HRM203</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500">Subject Name</p>
            <p className="font-semibold text-gray-900">Human Resource Planning & Development</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500">Batch</p>
            <p className="font-semibold text-gray-900">2022</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500">Submitted To</p>
            <p className="font-semibold text-gray-900">[Faculty Name]</p>
          </div>
        </div>
      </SectionCard>

      {/* References */}
      <SectionCard title="📚 References">
        <div className="space-y-3 text-sm">
          {[
            'Becker, B.E., Huselid, M.A., & Ulrich, D. (2001). The HR Scorecard: Linking People, Strategy, and Performance. Harvard Business School Press.',
            'Rao, T.V. (2014). HRD Audit: Evaluating the Human Resource Function for Business Improvement. Response Books (Sage Publications).',
            'Werner, J.M., & DeSimone, R.L. (2012). Human Resource Development (6th ed.). Cengage Learning.',
            'Noe, R.A. (2020). Employee Training and Development (8th ed.). McGraw-Hill Education.',
          ].map((ref, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-xs font-bold text-maroon mt-0.5">[{i + 1}]</span>
              <p className="text-gray-600">{ref}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
