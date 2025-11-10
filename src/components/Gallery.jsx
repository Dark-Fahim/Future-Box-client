import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000", delay: 0.2 },
  { image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000", delay: 0.4 },
  { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000", delay: 0.6 },
  { image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000", delay: 0.8 },
  { image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1000", delay: 1.0 },
  { image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1000", delay: 1.2 },
  { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000", delay: 1.4 },
  { image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000", delay: 1.6 }
]


const container = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay
    },
  }
})
const fade = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay
    },
  }
})



const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#121212] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="text-center mb-12">
          <motion.div
            variants={container(0.4)}
            initial="hidden"
            whileInView={'show'}
            className="flex justify-center items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-2">
            <Camera className="w-5 h-5" />
            <span>Event Highlights</span>
          </motion.div>
          <motion.h2
            variants={container(0.6)}
            initial="hidden"
            whileInView={'show'} className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Gallery of Memorable Moments
          </motion.h2>
          <motion.p
            variants={container(0.7)}
            initial="hidden"
            whileInView={'show'}
            className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Take a look at some of the most exciting events organized through EventSphere.
            Each photo captures energy, creativity, and community spirit.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div

              key={i}
              className={`
                relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300
                ${i >= 4 ? "hidden sm:block" : ""}
              `}
            >
              <motion.img
                variants={container(.5)}
                initial="hidden"
                whileInView={'show'}
                src={img.image}
                alt={`Event ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                Event {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
