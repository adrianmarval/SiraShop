import { Title } from "@/components";

export default function TermsConditionsPage() {
  return (
    <div className="mb-10 px-5">
      <Title title="Terms & Conditions" subtitle="Rules and regulations" />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity
            (“you”) and Crowdfast Store (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of our
            website.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and all source code, databases, functionality, software, website designs, audio, video,
            text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained
            therein (the “Marks”) are owned or controlled by us or licensed to us.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as
            necessary.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">4. Products</h2>
          <p>
            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products
            available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will
            be accurate, complete, reliable, current, or free of other errors.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">5. Purchases and Payment</h2>
          <p>
            We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal. You agree to provide
            current, complete, and accurate purchase and account information for all purchases made via the Site.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">6. Return Policy</h2>
          <p>Please review our Return Policy posted on the Site prior to making any purchases.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">7. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact
            us at:{" "}
            <a href="mailto:support@crowdfast.store" className="text-blue-600 hover:underline">
              support@crowdfast.store
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
