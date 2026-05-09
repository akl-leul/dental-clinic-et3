const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'about', title: 'About the Clinic' },
  { path: 'services', title: 'Our Services' },
  { path: 'prices', title: 'Prices' },
  { path: 'credentials', title: 'Credentials' },
  { path: 'contact', title: 'Contact Us' },
  { path: 'services/restorative-dentistry', title: 'Restorative Dentistry' },
  { path: 'services/oral-surgery', title: 'Oral Surgery' },
  { path: 'services/prosthodontics', title: 'Prosthodontics' },
  { path: 'services/dental-implants', title: 'Dental Implants' },
  { path: 'book-online', title: 'Book Online' },
  { path: 'enquire', title: 'Enquire' }
];

const basePath = path.join(process.cwd(), 'app');

pages.forEach(page => {
  const dirPath = path.join(basePath, page.path);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const content = `
export default function Page() {
  return (
    <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh]">
      <h1 className="text-5xl font-bold text-[#014d4e] mb-6 uppercase">
        ${page.title}
      </h1>
      <p className="text-lg text-gray-700">
        This is a placeholder page for ${page.title}.
      </p>
    </div>
  );
}
`.trim() + '\n';

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Successfully created all placeholder pages!');
