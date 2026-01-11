import { Title } from "@/components";

export default function ContactPage() {
  return (
    <div className="mb-10 px-5">
      <Title title="Contact Us" subtitle="Get in touch with Crowdfast Store" />

      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-gray-100 p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold">Customer Support</h3>
          <p className="mb-4">We are here to help you. If you have any questions, concerns, or feedback, please reach out to us.</p>

          <div className="space-y-4">
            <div>
              <span className="block font-semibold">Email:</span>
              <a href="mailto:support@crowdfast.store" className="text-blue-600 hover:underline">
                support@crowdfast.store
              </a>
            </div>

            <div>
              <span className="block font-semibold">Phone:</span>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <span className="block font-semibold">Address:</span>
              <p>
                Crowdfast Store HQ
                <br />
                123 Commerce St.
                <br />
                Business District, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
          <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          <p className="mb-2">Saturday: 10:00 AM - 2:00 PM EST</p>
          <p>Sunday: Closed</p>

          <div className="mt-8">
            <p className="text-sm text-gray-500">For faster assistance, please have your order number ready when contacting us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
