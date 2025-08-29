import { Link } from 'react-router-dom';
import ExpertCard from '../components/ExpertCard';

export default function ExpertsGallery() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Experts</h1>
        <Link to="/experts/new" className="px-3 py-2 border rounded">+ New Expert</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <ExpertCard />
        <ExpertCard />
        <ExpertCard />
      </div>
    </div>
  );
}
