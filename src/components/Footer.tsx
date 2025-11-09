import { Instagram, MessageCircle, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="نجمة السمك" className="w-16 h-16 rounded-full object-cover" />
            <div className="text-center md:text-right">
              <h3 className="font-bold text-xl mb-1">نجمة السمك</h3>
              <p className="text-primary-foreground/80">للمأكولات البحرية</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4">تابعونا على</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.instagram.com/star_fish_sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="إنستغرام"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@star_fish81?_r=1&_t=ZS-91GLIP0LwvQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="تيك توك"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://snapchat.com/t/h7QpXPy0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-all hover:scale-110 shadow-lg font-bold"
                aria-label="سناب شات"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.031.003.005c.012.857.085 1.714.085 2.576 0 3.163-.108 6.275-1.305 8.729-1.24 2.543-3.218 4.438-5.93 4.438-2.713 0-4.69-1.895-5.93-4.438-1.197-2.454-1.305-5.566-1.305-8.729 0-.862.073-1.719.085-2.576l.003-.005v-.031c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793zm4.843 8.85c-.003-.82-.006-1.55.002-2.12.006-.46.01-.85.01-1.16 0-.31-.004-.7.01-1.16.008-.57.005-1.3.002-2.12-.99-2.3-3.393-2.59-4.073-2.59-.68 0-3.083.29-4.073 2.59-.003.82-.006 1.55.002 2.12.006.46.01.85.01 1.16 0 .31-.004.7-.01 1.16-.008.57-.005 1.3-.002 2.12.99 2.3 3.393 2.59 4.073 2.59.68 0 3.083-.29 4.073-2.59z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/966539888843"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="واتساب"
              >
                <MessageCircle className="w-6 h-6" />
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
