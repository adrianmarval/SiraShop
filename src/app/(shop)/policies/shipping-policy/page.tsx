import { Title } from "@/components";

export default function ShippingPolicyPage() {
  return (
    <div className="mb-10 px-5">
      <Title title="Shipping Policy" subtitle="Delivery and tracking information" />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">Processing Time</h2>
          <p>
            All orders are processed within 1 to 3 business days (excluding weekends and holidays) after receiving your order confirmation
            email. You will receive another notification when your order has shipped.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Domestic Shipping Rates and Estimates</h2>
          <p>
            We offer fixed rate shipping for $5.99 on all domestic orders under $50. Orders over $50 include free standard shipping.
            Delivery estimates are usually between 3-7 business days depending on your location.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">International Shipping</h2>
          <p>
            We currently ship to select international countries. Shipping charges for your order will be calculated and displayed at
            checkout. Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your
            destination country. Sira Store is not responsible for these charges if they are applied and are your responsibility as the
            customer.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">How do I check the status of my order?</h2>
          <p>
            When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to
            check its status. Please allow 48 hours for the tracking information to become available.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Shipping to P.O. boxes</h2>
          <p>
            Some carriers have limitations around shipping to P.O. Boxes. If one of our carriers falls into this group, you should look up
            their policy.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Refunds, returns, and exchanges</h2>
          <p>
            We accept returns up to 30 days after delivery, if the item is unused and in its original condition, and we will refund the full
            order amount minus the shipping costs for the return. In the event that your order arrives damaged in any way, please email us
            as soon as possible at{" "}
            <a href="mailto:support@sirastore.com" className="text-blue-600 hover:underline">
              support@sirastore.com
            </a>{" "}
            with your order number and a photo of the item’s condition.
          </p>
        </section>
      </div>
    </div>
  );
}
