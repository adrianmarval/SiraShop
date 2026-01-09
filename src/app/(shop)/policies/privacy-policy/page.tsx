import { Title } from "@/components";

export default function PrivacyPolicyPage() {
  return (
    <div className="mb-10 px-5">
      <Title title="Privacy Policy" subtitle="How we handle your data" />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">1. Introduction</h2>
          <p>
            Welcome to Sira Store. We respect your privacy and are committed to protecting your personal data. This privacy policy will
            inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how
            the law protects you.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.
            </li>
            <li>
              <strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.
            </li>
            <li>
              <strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have
              purchased from us.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do
              not override those interests.
            </li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">4. Payment Processing (Stripe)</h2>
          <p>
            We use Stripe for payment, analytics, and other business services. Stripe collects identifying information about the devices
            that connect to its services. Stripe uses this information to operate and improve the services it provides to us, including for
            fraud detection. You can learn more about Stripe and read its privacy policy at{" "}
            <a href="https://stripe.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              https://stripe.com/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">5. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed
            in an unauthorized way, altered or disclosed.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
            <a href="mailto:support@sirastore.com" className="text-blue-600 hover:underline">
              support@sirastore.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
