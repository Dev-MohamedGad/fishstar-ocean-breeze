import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Image as ImageIcon } from "lucide-react";
import imageFood1 from "@/assets/image-food.jpeg";
import imageFood2 from "@/assets/image-food-2.jpeg";
import imageFood3 from "@/assets/image-food-3.jpeg";
import imageFood4 from "@/assets/image-food-4.jpeg";
import imageFood5 from "@/assets/image-food-5.jpeg";
import imageFood6 from "@/assets/image-food-6.jpeg";
import imageFood7 from "@/assets/image-food-7.jpeg";
import imageFood8 from "@/assets/image-food-8.jpeg";
import imageFood9 from "@/assets/image-food-9.jpeg";
import imageFood10 from "@/assets/image-food-10.jpeg";

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

const galleryImages: ImageItem[] = [
  { id: 1, src: imageFood1, alt: "مأكولات بحرية طازجة" },
  { id: 2, src: imageFood2, alt: "سمك مشوي" },
  { id: 3, src: imageFood3, alt: "جمبري مقلي" },
  { id: 4, src: imageFood4, alt: "أرز بالمأكولات البحرية" },
  { id: 5, src: imageFood5, alt: "مأكولات بحرية فاخرة" },
  { id: 6, src: imageFood6, alt: "سمك طازج" },
  { id: 7, src: imageFood7, alt: "مأكولات بحرية متنوعة" },
  { id: 8, src: imageFood8, alt: "طبق بحري شهي" },
  { id: 9, src: imageFood9, alt: "مأكولات بحرية طازجة" },
  { id: 10, src: imageFood10, alt: "عرض المأكولات" },
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
            معرض الصور
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            جولة بصرية في عالم نجمة السمك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 px-3">
                <p className="text-white font-semibold text-sm text-center drop-shadow-lg">
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
