import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import grilledFish from "@/assets/grilled-fish.jpg";
import friedShrimp from "@/assets/fried-shrimp.jpg";
import seafoodRice from "@/assets/seafood-rice.jpg";
import freshFish from "@/assets/fresh-fish.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import heroSeafood from "@/assets/hero-seafood.jpg";

const galleryImages = [
  { id: 1, src: grilledFish, alt: "سمك مشوي" },
  { id: 2, src: friedShrimp, alt: "جمبري مقلي" },
  { id: 3, src: seafoodRice, alt: "أرز بالمأكولات البحرية" },
  { id: 4, src: freshFish, alt: "مأكولات بحرية طازجة" },
  { id: 5, src: chefCooking, alt: "طاهي يحضر الطعام" },
  { id: 6, src: heroSeafood, alt: "عرض المأكولات البحرية" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" ref={ref} className="py-20 bg-ocean-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            صور من مطبخنا
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            جولة بصرية في عالم نجمة السمك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-primary-foreground font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
