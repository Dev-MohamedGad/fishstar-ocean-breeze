import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import grilledFish from "@/assets/grilled-fish.jpg";
import friedShrimp from "@/assets/fried-shrimp.jpg";
import seafoodRice from "@/assets/seafood-rice.jpg";

const menuItems = [
  {
    id: 1,
    name: "سمك مشوي",
    description: "سمك طازج مشوي على الفحم مع الليمون والأعشاب",
    image: grilledFish,
  },
  {
    id: 2,
    name: "جمبري مقلي",
    description: "جمبري مقرمش محضر بطريقة احترافية",
    image: friedShrimp,
  },
  {
    id: 3,
    name: "أرز بالمأكولات البحرية",
    description: "أرز بسمتي مع خلطة مميزة من المأكولات البحرية",
    image: seafoodRice,
  },
  {
    id: 4,
    name: "سمك سلمون مشوي",
    description: "شرائح سلمون طازجة مشوية بصوص خاص",
    image: grilledFish,
  },
  {
    id: 5,
    name: "كبسة روبيان",
    description: "كبسة بالروبيان الطازج والتوابل الشرقية",
    image: seafoodRice,
  },
  {
    id: 6,
    name: "حبار مقلي",
    description: "حلقات حبار مقرمشة مع صوص التارتار",
    image: friedShrimp,
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="menu" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            قائمة المأكولات
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            اختر من تشكيلتنا الواسعة من المأكولات البحرية الشهية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-border hover:border-secondary transition-all duration-300 group cursor-pointer h-full">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
