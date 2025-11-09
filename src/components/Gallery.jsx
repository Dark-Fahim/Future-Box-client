import { Camera } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000",
  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1000",
  "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1000",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000",
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#121212] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-2">
            <Camera className="w-5 h-5" />
            <span>Event Highlights</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Gallery of Memorable Moments
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Take a look at some of the most exciting events organized through EventSphere.
            Each photo captures energy, creativity, and community spirit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300
                ${i >= 4 ? "hidden sm:block" : ""}
              `}
            >
              <img
                src={img}
                alt={`Event ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                Event {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
