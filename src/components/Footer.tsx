import { Facebook, Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="نجمة السمك" className="w-16 h-16" />
            <div className="text-center md:text-right">
              <h3 className="font-bold text-xl mb-1">نجمة السمك</h3>
              <p className="text-primary-foreground/80">للمأكولات البحرية</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4">تابعونا على</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="p-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="فيسبوك"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="إنستغرام"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/966501234567"
                className="p-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="واتساب"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-primary-foreground/90 leading-relaxed">
              نقدم أشهى المأكولات البحرية الطازجة بأعلى جودة في أجواء راقية ومريحة
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 نجمة السمك للمأكولات البحرية – جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
