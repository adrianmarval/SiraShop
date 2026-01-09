import { Title } from "@/components";

export default function RefundPolicyPage() {
  return (
    <div className="mb-10 px-5">
      <Title title="Refund Policy" subtitle="Our returns and cancellation policy" />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">Returns</h2>
          <p>
            Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
          </p>
          <p className="mt-2">
            To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the
            original packaging.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Refunds (if applicable)</h2>
          <p>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund.
          </p>
          <p className="mt-2">
            If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or
            original method of payment, within a certain amount of days.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Late or missing refunds</h2>
          <p>
            If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take
            some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund
            is posted.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at{" "}
            <a href="mailto:support@sirastore.com" className="text-blue-600 hover:underline">
              support@sirastore.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">Shipping</h2>
          <p>To return your product, you should mail your product to: returns@sirastore.com.</p>
          <p className="mt-2">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If
            you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>
        </section>
      </div>
    </div>
  );
}
