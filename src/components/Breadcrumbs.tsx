import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path: string) => {
    switch (path) {
      case 'artists':
        return 'Artiesten';
      case 'timetable':
        return 'Timetable';
      case 'info':
        return 'Praktische Info';
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4 px-4 lg:px-8">
      <Link to="/" className="hover:text-white transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            {isLast ? (
              <span className="text-white">{getBreadcrumbName(value)}</span>
            ) : (
              <Link to={to} className="hover:text-white transition-colors">
                {getBreadcrumbName(value)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs; 