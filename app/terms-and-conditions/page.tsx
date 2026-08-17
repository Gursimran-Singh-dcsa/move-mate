import type { Metadata } from "next";
import Link from "next/link";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing moving, relocation, freight, payment, cancellation and liability services provided by Move Mate Relocations NZ.",

  openGraph: {
    title: "Terms & Conditions | Move Mate Relocations NZ",
    description:
      "Terms and conditions for moving, relocation and freight services provided by Move Mate Relocations NZ.",
    images: [
      {
        url: `${bp}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Move Mate Relocations NZ",
      },
    ],
  },
};

const Section = ({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-b border-gray-100 py-8 last:border-0 sm:py-10">
    <div className="flex gap-4">
      {/* <div className="hidden shrink-0 text-sm font-bold text-primary sm:block">
        {number}
      </div> */}

      <div className="min-w-0 flex-1">
        <h2 className="text-xl font-extrabold tracking-tight text-midnight-blue sm:text-2xl">
          {title}
        </h2>

        <div className="mt-5 space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const Clause = ({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-3">
    <span className="shrink-0 font-semibold text-midnight-blue">{number}</span>

    <p className="min-w-0">{children}</p>
  </div>
);

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-slate-50 text-midnight-blue">
      {/* Hero */}
      <section className="bg-midnight-blue">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Move Mate Relocations NZ
            </p>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Please read these terms and conditions carefully before booking or
              accepting moving, relocation or freight services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="px-5 sm:px-8 lg:px-12">
              {/* Introduction */}
              <Section number="1.0" title="Contract">
                <Clause number="1.0.">
                  This contract is made between Move Mate Relocations NZ (“the
                  Movers”) and ————————— (“the Customer”). All business is
                  undertaken by the movers, including the provision if any,
                  advice, information or other services is undertaken upon and
                  subject to these conditions.
                </Clause>
              </Section>

              {/* Acceptance */}
              <Section number="2.0" title="Acceptance of Goods for Carriage">
                <Clause number="2.0.">
                  Move Mate Relocations NZ accepts goods for carriage only upon
                  these terms and conditions:
                </Clause>

                <Clause number="2.1">
                  For any house/office moves and furniture relocation and
                  general freight movement, where prices are quoted based on
                  information provided by the customer, Move Mate Relocations NZ
                  reserves the right to modify prices as a result of incorrect
                  volume, dimension and/or weight or access conditions e.g.
                  stairs or balcony varying to those quoted by the customer at
                  the time of booking. The Customer should notify Move Mate
                  Relocations NZ if there is not suitable and convenient access
                  to the place from which the goods are to be removed. The
                  movers can make an extra charge due to any access restrictions
                  and will not be liable for any goods damaged through the lack
                  of such access. Undeclared redirection, multi route, or
                  additional manpower not requested, storage, etc. will incur
                  extra charges.
                </Clause>

                <Clause number="2.2">
                  There will be an extra charge of $120.00 each for any extra
                  heavy, oversized item such as double door fridge, vault/safe,
                  spa pool, pool table, commercial items, etc. It’s the
                  customer’s responsibility to inform Move Mate Relocations NZ
                  prior if the move includes any item of such or similar nature.
                </Clause>

                <Clause number="2.3">
                  If Move Mate Relocations NZ notices that goods are not safe to
                  transport or insufficiently packaged and may cause potential
                  damage to either the item being moved or other items, the
                  company reserves the right to reject acceptance of the item/s.
                </Clause>

                <Clause number="2.4">
                  The Customer will not give to the Movers for packing, removal
                  or storage:
                </Clause>

                <ul className="ml-5 list-disc space-y-3 text-gray-600">
                  <li>
                    Any article or substance which is, or is likely to be, of a
                    dangerous, corrosive, inflammable, explosive or damaging
                    nature, or anything likely to encourage vermin, bora, or any
                    other pest.
                  </li>

                  <li>
                    Prohibited or stolen goods, drugs/medicines, aerosols,
                    paints, firearms, gas cylinders and ammunition.
                  </li>

                  <li>
                    Jewelry, watches, trinkets, precious stones or metals,
                    money, deeds, securities, stamps, coins or goods or
                    collections of a similar kind
                  </li>

                  <li>
                    The customers will empty, properly defrost, and clean
                    refrigerators and deep freezers. We are not responsible for
                    the contents
                  </li>

                  <li>
                    Any animals and their cages or tanks including pets, birds,
                    or fish.
                  </li>
                </ul>

                <Clause number="2.5">
                  The company withholds the right to delay the customer’s job by
                  2 hours due to any unforeseen circumstances without waiving
                  any charges. Should the service be delayed more than two hours
                  the customer will be informed and will then come to a mutual
                  decision at the company’s discretion.
                </Clause>

                <Clause number="2.6">
                  Our designated arrival time is to be considered as a guide
                  only. Various factors can affect our arrival time such as
                  unexpected delays on previous job(s), delays caused by traffic
                  congestion and/or accidents, roadworks and/or closures,
                  streets not on maps and/or incorrect directions supplied by
                  customers, weather, truck breakdown, etc.
                </Clause>

                <Clause number="2.7">
                  Obtain at your own expense, all documents, permits, and
                  licences necessary for the removal to be completed. It will
                  incur extra charges, if our team has to wait for any
                  documentation needed from your end.
                </Clause>
              </Section>

              {/* Loss / Damage */}
              <Section number="3.0" title="Loss, Damage and Other Liabilities">
                <Clause number="3.1">
                  Whilst our team of movers provides highest care and attention
                  when carrying out your move, there remains the risk of damage.
                  Whilst the risk is low, all work done will be carried out at
                  “Owners Risk”.
                </Clause>

                <Clause number="3.2">
                  Any damage to premises (lawns, floors, driveways, footpaths,
                  underground pipes, cables, sewerage, and other underground
                  installations), is not covered. Should our staff be instructed
                  by the property occupier, or any person acting on their behalf
                  to drive, park or maneuver vehicles in or near an area where
                  such damage is likely to occur, compliance with such
                  instructions will not in any way involve the Movers or its
                  insurers in responsibility for any subsequent damage which may
                  be sustained. Such responsibility will rest solely in the
                  hands of the Owner.
                </Clause>
              </Section>

              {/* Insurance */}
              <Section number="4.0" title="Transit Insurance">
                <Clause number="4.1">
                  Whilst our team provides highest care and attention to your
                  goods when carrying out your move, there remains the risk of
                  damage, especially when handling fragile items, large
                  furniture, white ware items and/or kitchen appliances without
                  its original packaging/unpacked. Arranging a transit insurance
                  cover will give you peace of mind, should the unforeseen
                  happen, you’ll be able to repair/replace your valuables.
                  <br />
                  If you have an existing insurance provider, you can arrange a
                  transit insurance with them, otherwise, Move Mate Relocations
                  NZ can assist you with it.
                </Clause>

                <Clause number="4.2">
                  Any claim must be lodged in writing within 24 hours of the
                  occurrence of damage or loss. Claims submitted outside this
                  time will not be accepted.
                </Clause>

                <Clause number="4.3">
                  There is no liability for damage if goods have pre-existing
                  damage, inherent damage/vice or where the damage has resulted
                  from insufficient packaging.
                </Clause>

                <Clause number="4.4">
                  There will be no liability for damage to the goods packed by
                  the owner themselves. If any glass or fragile item breaks
                  unless factory packed, or electrical appliances fail to
                  operate after transit, the company does not take any
                  liability.
                </Clause>

                <Clause number="4.5">
                  There will be no liability for third party damage – i.e. in
                  the event of an accident where the other party is found at
                  fault, the carrier will not be liable for goods damaged in
                  transit. In this case the customer must claim directly off the
                  insurance company of the other party.
                </Clause>

                <Clause number="4.6">
                  In accordance with the Contract and Commercial Act, your claim
                  will only be processed once complete payment of move has been
                  received and acknowledged.
                </Clause>
              </Section>

              {/* Payment */}
              <Section number="5.0" title="Payment">
                <Clause number="5.1">
                  All residential and non-credit account moves are strictly
                  cash, bank transfer or credit/debit card payments unless
                  pre-arranged with management. With commercial office moves, we
                  allow a maximum 7 days account.
                </Clause>

                <Clause number="5.2">
                  All Credit Card payments (Visa and MasterCard) will be charged
                  a 1.5% fee to cover Mobile EFTPOS terminal fees and
                  transaction fees.
                </Clause>

                <Clause number="5.3">
                  Move Mate Relocations NZ reserves the right to ask for the
                  payment before unloading the goods.
                </Clause>

                <Clause number="5.4">
                  If the full payment is not made when required then a late fee
                  of $50.00 + GST applies after every 24 hours.
                </Clause>

                <Clause number="5.5">
                  All defaulting accounts will be forwarded to third party debt
                  collectors at the defaulter’s expense.
                </Clause>

                <Clause number="5.6">
                  We require you to pay in advance a 15% deposit to confirm the
                  moving slot for any intercity move. Proof of payment should be
                  sent to us through email. The deposit will be refunded if the
                  cancellation is made 72 hours prior to the moving date.
                </Clause>
              </Section>

              {/* Misconduct */}
              <Section
                number="6.0"
                title="Misconduct and Unacceptable Behaviour"
              >
                <Clause number="6.0">
                  Misconduct and unacceptable behaviour with any staff member(s)
                  may result in customer’s booking being terminated at the
                  company’s discretion.
                </Clause>
              </Section>

              {/* Cancellation */}
              <Section number="7.0" title="Cancellation">
                <Clause number="7.0">
                  Cancellation: $100.00 cancellation fee applies unless 48 hours
                  notice is given via email.
                </Clause>

                <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-5">
                  <p className="text-sm leading-7 text-midnight-blue sm:text-base">
                    By accepting an email quote request or confirming the
                    booking through a third party, you agree to the terms and
                    conditions of Furniture and Freight Distribution Group.
                    These terms and conditions will be considered as a legal
                    contract between you and Move Mate Relocations NZ Our terms
                    and conditions are subject to change without prior notice.
                  </p>
                </div>
              </Section>

              {/* Footer navigation */}
              <div className="flex flex-col gap-4 border-t border-gray-100 py-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-gray-500">
                  Please ensure you understand these terms before confirming
                  your booking.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/get-a-quote"
                    className="text-primary hover:underline"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
