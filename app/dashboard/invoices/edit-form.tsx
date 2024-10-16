import { useActionState } from "react";

import { InvoiceForm } from "@/app/lib/definitions";
import { updateInvoice, State } from "@/app/lib/actions";

export default function EditInvoiceForm({ invoice }: { invoice: InvoiceForm }) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [, formAction] = useActionState(updateInvoiceWithId, initialState);

  return <form action={formAction}></form>;
}
