export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Arena 51</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Book the Game
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Pricing</a></li>
              <li><a href="#competitions" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Competitions</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">About</a></li>
              <li><a href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Blog</a></li>
              <li><a href="#careers" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Help Center</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Contact</a></li>
              <li><a href="#terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Arena 51. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-900 dark:hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
