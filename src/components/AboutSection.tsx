import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import freshFishImage from "@/assets/fresh-fish.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 bg-ocean-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            من نحن
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={freshFishImage}
                alt="مأكولات بحرية طازجة"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground">
              في <span className="font-bold text-primary">نجمة السمك</span>، نقدم أشهى المأكولات البحرية الطازجة المحضّرة بأعلى جودة وبأيدي طهاة محترفين.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              نحرص على اختيار أجود أنواع الأسماك والمأكولات البحرية يومياً، لنضمن لكم تجربة طعام لا تُنسى تجمع بين النكهة الأصيلة والجودة العالية.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              مطعمنا هو وجهتكم المثالية للاستمتاع بأطباق بحرية شهية في أجواء راقية ومريحة.
            </p>
            <div className="pt-4 flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                <div className="text-muted-foreground">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">طبق مميز</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-muted-foreground">عميل سعيد</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
