import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="max-w-lg pr-4 sm:border-r-2 sm:border-blue-600">
          <h2 className="text-3xl font-bold text-blue-600">Get in touch</h2>
          <p className="max-w-md mt-4 text-gray-700">
            Fill out the form, and we&apos;ll get back to you as soon as
            possible. We typically respond within 24-48 hours.
          </p>

          {/* Contact Info Section */}
          <div className="flex flex-col mt-6 space-y-4">
            {/* Address */}
            <div className="flex items-center space-x-3">
              <BuildingOffice2Icon className="h-6 w-6 text-gray-800" />
              <span className="text-gray-700">
                123 Business St, City, Country
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-6 w-6 text-gray-800" />
              <span className="text-gray-700">+1 (234) 567-8900</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-6 w-6 text-gray-800" />
              <span className="text-gray-700">contact@yourbusiness.com</span>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-900 focus:border-blue-900"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-900 focus:border-blue-900"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-900 focus:border-blue-900 resize-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
